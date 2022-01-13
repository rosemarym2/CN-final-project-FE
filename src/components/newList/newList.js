import { useState } from "react";
import { addNewListFetch } from "../../utils";
import { TopNav } from "../topNav/topNav.js";
import { BottomNav } from "../bottomNav/bottomNav";
import "./newList.css"
import { NotificationContainer, NotificationManager } from 'react-notifications';

export const NewList = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("default");
  const [keywords, setKeywords] = useState([]);
  const [keywordStr, setKeywordStr] = useState("");
  const [listItems, setListItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemInfo, setItemInfo] = useState("");

  const newListHandler = async () => {
    const finalListItems = listItems.map((item) => ({
      image: "",
      itemName: item.itemName,
      itemInfo: item.itemInfo,
      completed: false
    }));
    const success = addNewListFetch(title, category, keywords, finalListItems);
    createNotification("success")
  }

  const newKeyword = (input) => {
    console.log(input);
    const storedKeys = [...keywords]
    storedKeys.push(input)
    setKeywords(storedKeys)
  };

  const nameChangeHandler = (event) => {
    setItemName(event.target.value);
  }
  const categoryHandler = (event) => {
    setItemInfo(event.target.value);
  }

  const infoChangeHandler = (event) => {
    setItemInfo(event.target.value);
  }

  const newListItem = (name, info) => {
    const currentArr = [...listItems]
    currentArr.push({ itemName: name, itemInfo: info })
    setListItems(currentArr);
  };

  const createNotification = (type) => {
    switch (type) {
      // case 'info':
      //   NotificationManager.info('Info message');
      //   break;
      case 'success':
        NotificationManager.success("You've successfully added your list!", 'List Added');
        break;
      case 'warning':
        NotificationManager.warning("Something went wrong, please try again");
        break;
      case 'error':
        NotificationManager.error("Something went wrong, please try again");
        break;
    }
  };

  return (
    <>
      <TopNav />
      <div className="newListBody">
        <h1>Create a New List</h1>
        <img className="newListImg" src="https://res.cloudinary.com/cn-project/image/upload/v1641918493/pana/misc/Add_notes-pana_h7jiy7.png" />
        <div className="newListSetupandKeyContainer">
          <div className="newListSetupContainer">
            <h2>Set Up Your List</h2>
            <label for="listTitle">Name Your List</label>
            <input className="newListInput" type="text" onChange={(event) => setTitle(event.target.value)} id="listTitle" name="listTitle" placeholder="My New List" required />

            <label className="listLabelPadding" for="listTitle">Choose a Category</label>
            <select className="selectNewListCategory listLabelPadding" defaultValue={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="default" disabled selected>
                Select Category
              </option>
              <option value="Travel">Travel</option>
              <option value="Music">Music</option>
              <option value="Books">Books</option>
              <option value="Movies">Movies</option>
            </select>

            <label className="listLabelPadding" for="listKeyword">Add Some Keywords <span className="keywordSubtext">(Click "Add Keyword" after each entry)</span></label>

            <input className="newListInput" type="text" onChange={(event) => setKeywordStr(event.target.value)} id="listKeyword" name="listKeyword" placeholder='e.g. Travel, Bucket List, Amazing...' required />
            <button className="newListButtons" onClick={() => newKeyword(keywordStr)}>Add Keyword</button>
          </div>
          <div className="newListKeywordsContainer">
            <h2>Keywords:</h2>
            <div className="newListListMap">
              {keywords.map((item, index) => {
                return (
                  <div>
                    <li key={index}>{item}, </li>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="newListAddListItemsAndRender">
          <div className="newListListItemsContainer">
            <h2>Add List Items</h2>
            <label for="itemName">Name</label>
            <input className="newListInput" type="text" onChange={nameChangeHandler} id="itemName" name="itemName" placeholder="Fly to the Moon" required />
            <label for="itemInfo">Info</label>
            <input className="newListInput" type="text" onChange={infoChangeHandler} id="itemInfo" name="itemInfo" placeholder="Need a Rocket" required />
            <button className="newListButtons" onClick={() => newListItem(itemName, itemInfo)}>Add Item</button>
          </div>
          <div className="newListListContents">
            <h2>Your List Items:</h2>
            <div className="newListRenderListMap">
              {listItems.map((item, index) => {
                return (
                  <div>
                    <li key={index}>{item.itemName} - {item.itemInfo},</li>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <button className="newListSaveButton newListButtons" onClick={newListHandler}>Save List</button>
      </div >
      {/* <BottomNav /> */}
      <NotificationContainer />
    </>
  )
};
