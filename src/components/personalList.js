import { useState } from "react";
import { getSpecificListFetch, updateListItemCompletionStateFetch } from "../utils";
import grey from "../images/grey.png";
import travel from "../images/travel.png";
import ScratchCard from 'react-scratchcard';
import './personalList.css';

export const List = () => {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);
  const [numOfItems, setNumOfItems] = useState();
  const [itemsCompleted, setItemsCompleted] = useState();
  const [percentage, setPercentage] = useState();
  const [currentItem, setCurrentItem] = useState();

  const dataHandler = async () => {
    const data = await getSpecificListFetch("61d5d921fe4df48127fc14ee");
    const totalNumOfItems = data.list.listItems.length;
    const numOfItemsCompleted = data.list.listItems.filter(element => element.completed === true).length;
    const completionPercentage = numOfItemsCompleted / totalNumOfItems * 100;
    setNumOfItems(totalNumOfItems);
    setItems(data.list.listItems);
    setTitle(data.list.title);
    setItemsCompleted(numOfItemsCompleted);
    setPercentage(Math.round(completionPercentage));
  }

  const updateListItemState = async (itemName, competionState) => {
    await updateListItemCompletionStateFetch("61d5d921fe4df48127fc14ee", itemName, competionState);
    dataHandler();
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
      <div style={{ textAlign: "center" }}>
        <button onClick={dataHandler}>Get the list</button>
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
                    <img src={travel} style={{ width: "150px" }} />
                  </ScratchCard>
                </div>
              ) : (
                <img src={travel} style={{ width: "150px" }} onDoubleClick={() => updateListItemState(item.itemName, false)} />
              )}
              <h5 style={{ margin: "5px" }}>{item.itemName}</h5>
              <p style={{ fontSize: "12px", margin: "0" }}>{item.itemInfo}</p>
            </div>
          )
        })}
      </div>
      <hr></hr>
      <div className="list-icons">
        <i class="bi bi-star"></i><span>rate/rating</span><i class="bi bi-chat-text"></i><span>comments</span> <i class="bi bi-share"></i><span>share</span>
      </div>
    </div >
  );
}