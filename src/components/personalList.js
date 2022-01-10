import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// functions below need changing
import { getSpecificListFetch, updateListItemCompletionStateFetch, addToUserListsFetch } from "../utils";
import grey from "../images/grey.png";
//below needs removing
import travel from "../images/travel.png";
import ScratchCard from 'react-scratchcard';
import './personalList.css';
import { Link } from "react-router-dom";

export const UserList = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);
  const [numOfItems, setNumOfItems] = useState();
  const [itemsCompleted, setItemsCompleted] = useState();
  const [percentage, setPercentage] = useState();
  const [currentItem, setCurrentItem] = useState();
  const [list, setList] = useState();

  useEffect(() => {
    dataHandler(id);
  }, []);

  const dataHandler = async (id) => {
    const data = await getSpecificListFetch(id);
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
    </div >
  );
}