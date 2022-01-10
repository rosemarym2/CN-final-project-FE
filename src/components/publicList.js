import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSpecificListFetch, addToUserListsFetch, getUserFetch } from "../utils";

export const List = () => {
  const { id } = useParams();
  const [listTitle, setListTitle] = useState("");
  const [list, setList] = useState();
  const [items, setItems] = useState([]);
  const [listImg, setListImg] = useState("");
  const [bookmark, setBookmark] = useState("bi bi-bookmark");
  const [bookmarkColour, setBookmarkColour] = useState("#000000");

  useEffect(() => {
    dataHandler(id);
  }, []);

  const dataHandler = async (linkId) => {
    const data = await getSpecificListFetch(linkId);
    setList(data.list);
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

  const pushToUserLists = async () => {
    const userId = localStorage.getItem("myId");
    const user = await getUserFetch(userId);
    const matchExists = user.user.lists.find(element => element._id == list._id);
    if (!matchExists) {
      list.status = "saved";
      await addToUserListsFetch(userId, list);
    } else {
      alert("You already have this list on your profile");
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
      <div className="list-icons">
        <i class="bi bi-star"></i><span>rate/rating</span>
        <i class="bi bi-chat-text"></i><span>comments</span>
        <i class="bi bi-share"></i><span>share</span>
        <i class={bookmark}
          onClick={pushToUserLists}
          onMouseEnter={() => setBookmark("bi bi-bookmark-fill")}
          onMouseLeave={() => setBookmark("bi bi-bookmark")}
          onMouseDown={() => setBookmarkColour("#FF725E")}
          onMouseUp={() => setBookmarkColour("#000000")}
          style={{ color: bookmarkColour }}></i>
      </div>
    </div>
  )
}