import { useState, useEffect } from "react";
import { getFilteredListsFetch } from "../utils";
import { useParams, Link } from "react-router-dom";
import "./category.css";

export const Category = () => {
  const { handle } = useParams();
  const [listArr, setListArr] = useState([]);
  const [listImg, setListImg] = useState("");

  useEffect(() => {
    dataHandler(handle);
  }, []);

  const dataHandler = async (handle) => {
    const data = await getFilteredListsFetch("category", handle);
    setListArr(data.filteredLists);
    switch (handle) {
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
    <div className="category-component">
      <h1>{handle}</h1>
      <div className="category-all-items">
        {listArr.map((item, index) => {
          return (
            <Link to={`publicList/${item._id}`}>
              <div key={index} className="category-item">
                <img src={listImg} className="category-image" />
                <p>{item.title}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}