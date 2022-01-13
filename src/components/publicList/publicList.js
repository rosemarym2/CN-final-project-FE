import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSpecificListFetch, addToUserListsFetch, getUserFetch } from "../../utils";
import { TopNav } from "../topNav/topNav";
import { Footer } from "../footer/footer"
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import "./publicList.css";

export const List = () => {
  const { id } = useParams();
  const [listTitle, setListTitle] = useState("");
  const [list, setList] = useState();
  const [items, setItems] = useState([]);
  const [listImg, setListImg] = useState("");
  const [bookmark, setBookmark] = useState("bi bi-bookmark");
  const [bookmarkColour, setBookmarkColour] = useState("#000000");
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    dataHandler(id);
  }, []);

  const dataHandler = async (linkId) => {
    const data = await getSpecificListFetch(linkId);
    setList(data.list);
    setKeywords(data.list.keywords);
    setListTitle(data.list.title);
    setItems(data.list.listItems);
    switch (data.list.category) {
      case "Travel":
        setListImg("https://res.cloudinary.com/cn-project/image/upload/v1641917068/pana/categories/Winter_solstice-pana_ga4pzm.png")
        break;
      case "Music":
        setListImg("https://res.cloudinary.com/cn-project/image/upload/v1641916769/pana/categories/Headphone-pana_befwwy.png");
        break;
      case "Books":
        setListImg("https://res.cloudinary.com/cn-project/image/upload/v1641916769/pana/categories/Book_lover-pana_ruswm0.png");
        break;
      case "Movies":
        setListImg("https://res.cloudinary.com/cn-project/image/upload/v1641916622/pana/categories/Film_rolls-pana_gnpcro.png");
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
      createNotification("success");
    } else {
      createNotification("info");
    }
  }

  const createNotification = (type) => {
    switch (type) {
      case "info":
        NotificationManager.info(`List "${list.title}" already exists in your profile`);
        break;
      case "success":
        NotificationManager.success(`List "${list.title}" successfully added to your profile`);
        break;
      // case "warning":
      //   NotificationManager.warning("Incorrect username or password, please try again");
      //   break;
      // case "error":
      //   NotificationManager.error("Incorrect username or password, please try again");
      //   break;
    }
  };

  return (
    <>
      <TopNav />
      <div className="public-list-component-body">
        <h1>{listTitle}</h1>

        <div className="public-list-list-icons">
          <i class="bi bi-star"></i><span>rate</span>
          <i class="bi bi-chat-text"></i><span>comment</span>
          <i class="bi bi-share"></i><span>share</span>
          <i class={bookmark}
            onClick={pushToUserLists}
            onMouseEnter={() => setBookmark("bi bi-bookmark-fill")}
            onMouseLeave={() => setBookmark("bi bi-bookmark")}
            onMouseDown={() => setBookmarkColour("#FF725E")}
            onMouseUp={() => setBookmarkColour("#000000")}
            style={{ color: bookmarkColour }}></i><span>save</span>
        </div>
        <hr></hr>
        <div className="all-items-public-list">
          {items.map((item, index) => {
            return (
              <div className="public-list-card" key={index}>
                <img src={item.image ? item.image : listImg} />
                <h5>{item.itemName}</h5>
                <p>{item.itemInfo}</p>
              </div>
            )
          })}
        </div>
        <hr></hr>
        <ul className="public-list-keywords">
          {keywords.map((item, index) => {
            return <li key={index}>#{item}</li>
          })}
        </ul>
        <div className="public-list-list-icons">
          <i class="bi bi-star"></i><span>4.7 </span>
          <i class="bi bi-chat-text"></i><span>53 </span>
          <i class="bi bi-share"></i><span>41 </span>
        </div>
      </div>
      <Footer />
      <NotificationContainer />
    </>
  )
}