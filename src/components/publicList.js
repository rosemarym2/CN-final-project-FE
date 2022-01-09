import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSpecificListFetch } from "../utils";

export const List = () => {
  const { handle } = useParams();
  const [listTitle, setListTitle] = useState("");
  const [items, setItems] = useState([]);
  const [listImg, setListImg] = useState("");

  useEffect(() => {
    dataHandler(handle);
  }, []);

  const dataHandler = async (linkId) => {
    const data = await getSpecificListFetch(linkId);
    console.log(data);
    setListTitle(data.list.title);
    setItems(data.list.listItems);
    switch (data.list.category) {
      case "Travel":
        setListImg("https://res.cloudinary.com/cn-project/image/upload/v1641481525/pana/Winter_solstice-pana_x4wbwx.png")
        break;
      case "Music":
        setListImg("https://res.cloudinary.com/cn-project/image/upload/v1641481525/pana/Headphone-pana_ay39wz.png");
        break;
      case "Books":
        setListImg("https://res.cloudinary.com/cn-project/image/upload/v1641481525/pana/Book_lover-pana_gvn56e.png");
        break;
      case "Movies":
        setListImg("https://res.cloudinary.com/cn-project/image/upload/v1641481525/pana/Film_rolls-pana_wipspq.png");
        break;
    }
  }

  return (
    <div>
      <h1>{listTitle}</h1>
      <div className="scratchcards">
        {items.map((item, index) => {
          return (
            <div className="card" key={index}>
              <img src={listImg} style={{ width: "150px" }} />
              <h5 style={{ margin: "5px" }}>{item.itemName}</h5>
              <p style={{ fontSize: "12px", margin: "0" }}>{item.itemInfo}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}