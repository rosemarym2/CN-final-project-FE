import { useState, useEffect } from "react";
import { getSpecificListFetch, updateListItemCompletionStateFetch, addToUserListsFetch } from "../utils";
import grey from "../images/grey.png";
import travel from "../images/travel.png";
import ScratchCard from 'react-scratchcard';
import './personalList.css';
import { Link } from "react-router-dom";

export const List = () => {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);
  const [numOfItems, setNumOfItems] = useState();
  const [itemsCompleted, setItemsCompleted] = useState();
  const [percentage, setPercentage] = useState();
  const [currentItem, setCurrentItem] = useState();
  const [list, setList] = useState();

  const dataHandler = async () => {
    const data = await getSpecificListFetch("61d47a3d78db3cca18488211");
    const result = calculatePercentage(data.list.listItems)
    setList(data.list);
    setNumOfItems(result.totalNumOfItems);
    setItems(data.list.listItems);
    setTitle(data.list.title);
    setItemsCompleted(result.numOfItemsCompleted);
    setPercentage(Math.round(result.completionPercentage));
  }

  useEffect(() => {
    dataHandler();
  }, []);

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
    await updateListItemCompletionStateFetch("61d47a3d78db3cca18488211", itemName, competionState);
    dataHandler();
  }

  const updateCurrentItem = (currentItemName) => {
    setCurrentItem(currentItemName);
  }

  const pushToUserLists = async () => {
    await addToUserListsFetch("61d6c9e7ed3d92ea3f0cb028", list);
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
        <button style={{ cursor: "pointer" }}><Link to="/home">Go Back</Link></button>
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
        <i class="bi bi-star"></i><span>rate/rating</span><i class="bi bi-chat-text"></i><span>comments</span> <i class="bi bi-share"></i><span>share</span><i class="bi bi-bookmark" onClick={pushToUserLists} style={{ cursor: "pointer" }}></i>
      </div>
    </div >
  );
}