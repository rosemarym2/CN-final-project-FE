import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { updateListItemCompletionStateFetch, getUserFetch, updateListFetch } from "../../utils";
import grey from "../../images/grey.png";
import ScratchCard from "react-scratchcard";
import "./personalList.css";
import { TopNav } from "../topNav/topNav";

export const UserList = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);
  const [numOfItems, setNumOfItems] = useState();
  const [itemsCompleted, setItemsCompleted] = useState();
  const [percentage, setPercentage] = useState();
  const [currentItem, setCurrentItem] = useState();
  const [listImage, setListImage] = useState("");

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
    setItems(listToDisplay.listItems);
    setTitle(listToDisplay.title);
    setItemsCompleted(result.numOfItemsCompleted);
    setPercentage(Math.round(result.completionPercentage));
    setListImage(listToDisplay.listImage);
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
    width: 150,
    height: 150,
    image: grey,
    finishPercent: 80,
    onComplete: () => updateListItemState(currentItem, true)
  }

  return (
    <div className="personal-list">
      <TopNav />
      <div style={{ textAlign: "center" }}>
        <h2>{title}</h2>
        <p>{title ? (`${itemsCompleted} / ${numOfItems} - ${percentage}% completed`) : ""}</p>
      </div>
      <div className="scratchcards">
        {items.map((item, index) => {
          return (
            <div className="card" key={index}>
              {item.completed == false ? (
                <div onMouseDown={() => updateCurrentItem(item.itemName)}>
                  <ScratchCard {...settings}>
                    <img src={listImage} style={{ width: "150px" }} />
                  </ScratchCard>
                </div>
              ) : (
                <img src={listImage} style={{ width: "150px" }} onDoubleClick={() => updateListItemState(item.itemName, false)} />
              )}
              <h5 style={{ margin: "5px" }}>{item.itemName}</h5>
              <p style={{ fontSize: "12px", margin: "0" }}>{item.itemInfo}</p>
            </div>
          )
        })}
      </div>
      <hr></hr>
    </div >
  );
}