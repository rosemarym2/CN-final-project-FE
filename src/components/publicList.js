import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSpecificListFetch } from "../utils";
import grey from "../images/grey.png";
import travel from "../images/travel.png";
import ScratchCard from 'react-scratchcard';

export const List = () => {
  const { handle } = useParams();
  const [listTitle, setListTitle] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    dataHandler(handle);
  }, []);

  const dataHandler = async (linkId) => {
    const data = await getSpecificListFetch(linkId);
    console.log(data);
    setListTitle(data.list.title);
    setItems(data.list.listItems);
  }

  const settings = {
    width: 150,
    height: 150,
    image: grey,
    finishPercent: 80,
    onComplete: () => console.log("item complete")
  }

  return (
    <div>
      <h1>{listTitle}</h1>
      <div className="scratchcards">
        {items.map((item, index) => {
          return (
            <div className="card" key={index}>
              {item.completed == false ? (
                <ScratchCard {...settings}>
                  <img src={travel} style={{ width: "150px" }} />
                </ScratchCard>
              ) : (
                <img src={travel} style={{ width: "150px" }} />
              )}
              <h5 style={{ margin: "5px" }}>{item.itemName}</h5>
              <p style={{ fontSize: "12px", margin: "0" }}>{item.itemInfo}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}