import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { updateListItemCompletionStateFetch, getUserFetch, updateListFetch } from "../../utils";
import grey from "../../images/grey.png";
import ScratchCard from "react-scratchcard";
import "./personalList.css";
import { TopNav } from "../topNav/topNav";
import { BottomNav } from "../bottomNav/bottomNav";

export const UserList = () => {
  const { id } = useParams();
  const [list, setList] = useState({});
  const [items, setItems] = useState([]);
  const [numOfItems, setNumOfItems] = useState();
  const [itemsCompleted, setItemsCompleted] = useState();
  const [percentage, setPercentage] = useState();
  const [currentItem, setCurrentItem] = useState();
  const [listImage, setListImage] = useState("");
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    dataHandler(id);
  }, []);

  const dataHandler = async (id) => {
    const userId = localStorage.getItem("myId");
    const user = await getUserFetch(userId);
    const listToDisplay = user.user.lists.find(element => element._id == id);
    const result = calculatePercentage(listToDisplay.listItems);
    if (result.completionPercentage > 0 && result.completionPercentage != 100) {
      await updateListFetch(userId, id, "status", "in progress");
    } else if (result.completionPercentage == 100) {
      await updateListFetch(userId, id, "status", "completed");
    } else {
      await updateListFetch(userId, id, "status", "saved");
    }
    setNumOfItems(result.totalNumOfItems);
    setList(listToDisplay);
    setItems(listToDisplay.listItems);
    setItemsCompleted(result.numOfItemsCompleted);
    setPercentage(Math.round(result.completionPercentage));
    setListImage(listToDisplay.listImage);
    setKeywords(listToDisplay.keywords);
  }

  const calculatePercentage = (listItems) => {
    const totalNumOfItems = listItems.length;
    const numOfItemsCompleted = listItems.filter(element => element.completed === true).length;
    const completionPercentage = numOfItemsCompleted / totalNumOfItems * 100;
    return {
      totalNumOfItems,
      numOfItemsCompleted,
      completionPercentage
    }
  }

  const updateListItemState = async (itemName, competionState) => {
    const userId = localStorage.getItem("myId");
    await updateListItemCompletionStateFetch(userId, id, itemName, competionState);
    dataHandler(id);
  }

  const updateCurrentItem = (currentItemName) => {
    setCurrentItem(currentItemName);
  }

  const settings = {
    width: 180,
    height: 180,
    image: grey,
    finishPercent: 80,
    onComplete: () => updateListItemState(currentItem, true)
  }

  return (
    <>
      <TopNav />
      <div className="personal-list-component-body">
        <div className="personal-list-component-title">
          <h1>{list.title}</h1>
          <p>{list.title ? (`${itemsCompleted} / ${numOfItems} - ${percentage}% completed`) : ""}</p>
        </div>
        <div className="scratchcards">
          {items.map((item, index) => {
            return (
              <div className="card" key={index}>
                {item.completed == false ? (
                  <div onMouseDown={() => updateCurrentItem(item.itemName)}>
                    <ScratchCard {...settings}>
                      <img src={item.image ? item.image : listImage} />
                    </ScratchCard>
                  </div>
                ) : (
                  <img src={item.image ? item.image : listImage} onDoubleClick={() => updateListItemState(item.itemName, false)} />
                )}
                <h5>{item.itemName}</h5>
                <p>{item.itemInfo}</p>
              </div>
            )
          })}
        </div>
        <hr></hr>
        <ul className="profile-list-keywords">
          {keywords.map((item, index) => {
            return <li key={index}>#{item}</li>
          })}
        </ul>
        {/* <BottomNav /> */}
      </div>
    </>
  );
}