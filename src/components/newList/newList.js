import { useState } from "react";
import { addNewListFetch, addToUserListsFetch, getSpecificListFetch } from "../../utils";
import { TopNav } from "../topNav/topNav.js";
import { Footer } from "../footer/footer"
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
  const [listImage, setListImage] = useState("");
  const [publicAccess, setPublicAccess] = useState(false);
  const [privateAccess, setPrivateAccess] = useState(false);


  const newListHandler = async () => {
    const finalListItems = listItems.map((item) => ({
      image: "",
      itemName: item.itemName,
      itemInfo: item.itemInfo,
      completed: false
    }));
    let access = "public";
    if (!publicAccess) {
      access = "private";
    }
    const success = await addNewListFetch(title, category, listImage, access, keywords, finalListItems);
    if (success.newList) {
      createNotification("success");
      if (privateAccess) {
        const userId = localStorage.getItem("myId");
        const data = await getSpecificListFetch(success.newList._id);
        data.list.status = "saved";
        await addToUserListsFetch(userId, data.list);
      }
    }
  }

  const newKeyword = (input) => {
    const storedKeys = [...keywords];
    storedKeys.push(input);
    setKeywords(storedKeys);
    setKeywordStr("");
  };

  const nameChangeHandler = (event) => {
    setItemName(event.target.value);
  }
  const handleCategory = (category) => {
    setCategory(category);
    switch (category) {
      case "Travel":
        setListImage("https://res.cloudinary.com/cn-project/image/upload/v1641917068/pana/categories/Winter_solstice-pana_ga4pzm.png")
        break;
      case "Music":
        setListImage("https://res.cloudinary.com/cn-project/image/upload/v1641916769/pana/categories/Headphone-pana_befwwy.png");
        break;
      case "Books":
        setListImage("https://res.cloudinary.com/cn-project/image/upload/v1641916769/pana/categories/Book_lover-pana_ruswm0.png");
        break;
      case "Movies":
        setListImage("https://res.cloudinary.com/cn-project/image/upload/v1641916622/pana/categories/Film_rolls-pana_gnpcro.png");
        break;
    }
  }

  const infoChangeHandler = (event) => {
    setItemInfo(event.target.value);
  }

  const newListItem = (name, info) => {
    const currentArr = [...listItems]
    currentArr.push({ itemName: name, itemInfo: info })
    setListItems(currentArr);
    setItemName("");
    setItemInfo("");
  };

  const handlePublicAccess = () => {
    const currentPublicAccess = publicAccess;
    if (currentPublicAccess) {
      setPublicAccess(false);
    } else {
      setPublicAccess(true);
    }
  }

  const handlePrivateAccess = () => {
    const currentPrivateAccess = privateAccess;
    if (currentPrivateAccess) {
      setPrivateAccess(false);
    } else {
      setPrivateAccess(true);
    }
  }

  const editKeywordHandler = (index) => {
    const storedItems = [...keywords];
    const itemToEdit = storedItems.splice(index, 1);
    setKeywords(storedItems);
    setKeywordStr(itemToEdit);
  }

  const removeKeywordHandler = (index) => {
    const storedItems = [...keywords];
    storedItems.splice(index, 1);
    setKeywords(storedItems);
  }


  const editItemHandler = (index) => {
    const storedItems = [...listItems];
    const itemToEdit = storedItems.splice(index, 1);
    setListItems(storedItems);
    setItemName(itemToEdit[0].itemName);
    setItemInfo(itemToEdit[0].itemInfo);
  }

  const removeItemHandler = (index) => {
    const storedItems = [...listItems];
    storedItems.splice(index, 1);
    setListItems(storedItems);
  }

  const createNotification = (type) => {
    switch (type) {
      // case 'info':
      //   NotificationManager.info('Info message');
      //   break;
      case 'success':
        NotificationManager.success("You've successfully added your list!", 'List Added');
        break;
      // case 'warning':
      //   NotificationManager.warning("Something went wrong, please try again");
      //   break;
      // case 'error':
      //   NotificationManager.error("Something went wrong, please try again");
      //   break;
    }
  };

  return (
    <>
      <TopNav />
      <div className="newListComponentDiv">
        <div className="newListBody">
          <h1>Create a New List</h1>
          <img className="newListImg" src="https://res.cloudinary.com/cn-project/image/upload/v1641918493/pana/misc/Add_notes-pana_h7jiy7.png" />
          <div className="newListSetupandKeyContainer">
            <div className="newListSetupContainer">
              <h2>Set Up Your List</h2>
              <label for="listTitle">Name Your List</label>
              <input className="newListInput" type="text" onChange={(event) => setTitle(event.target.value)} id="listTitle" name="listTitle" placeholder="My New List" required />
              <label className="listLabelPadding" for="listTitle">Choose a Category</label>
              <select className="selectNewListCategory listLabelPadding" defaultValue={category} onChange={(e) => handleCategory(e.target.value)}>
                <option value="default" disabled selected>
                  Select Category
                </option>
                <option value="Travel">Travel</option>
                <option value="Music">Music</option>
                <option value="Books">Books</option>
                <option value="Movies">Movies</option>
              </select>
              <label className="listLabelPadding" for="listKeyword">Add Some Keywords <span className="keywordSubtext">(Click "Add Keyword" after each entry)</span></label>
              <input className="newListInput" type="text" onChange={(event) => setKeywordStr(event.target.value)} id="listKeyword" name="listKeyword" placeholder='e.g. Travel, Bucket List, Amazing...' required autocomplete="off" value={keywordStr} />
              <button className="newListButtons" onClick={() => newKeyword(keywordStr)}>Add Keyword</button>
            </div>
            <div className="newListKeywordsContainer">
              <h2>Keywords:</h2>
              <div className="newListListMap">
                {keywords.map((item, index) => {
                  if (item !== "") {
                    return (
                      <div className="mapped-item">
                        <li key={index}>{item}</li>
                        <div className="edit-delete-item-buttons">
                          <i class="bi bi-pencil" onClick={() => editKeywordHandler(index)}></i>
                          <i class="bi bi-trash" onClick={() => removeKeywordHandler(index)}></i>
                        </div>
                      </div>
                    )
                  }
                })}
              </div>
            </div>
          </div>
          <div className="newListAddListItemsAndRender">
            <div className="newListListItemsContainer">
              <h2>Add List Items</h2>
              <label for="itemName">Name</label>
              <input className="newListInput" type="text" onChange={nameChangeHandler} id="itemName" name="itemName" placeholder="Fly to the Moon" required autocomplete="off" value={itemName} />
              <label for="itemInfo">Info</label>
              <input className="newListInput" type="text" onChange={infoChangeHandler} id="itemInfo" name="itemInfo" placeholder="Need a Rocket" required autocomplete="off" value={itemInfo} />
              <button className="newListButtons" onClick={() => newListItem(itemName, itemInfo)}>Add Item</button>
            </div>
            <div className="newListListContents">
              <h2>Your List Items:</h2>
              <div className="newListRenderListMap">
                {listItems.map((item, index) => {
                  if (item.itemName !== "") {
                    return (
                      <div className="mapped-item">
                        <li key={index}>{item.itemName} {!item.itemInfo ? "" : `- ${item.itemInfo}`}</li>
                        <div className="edit-delete-item-buttons">
                          <i class="bi bi-pencil" onClick={() => editItemHandler(index)}></i>
                          <i class="bi bi-trash" onClick={() => removeItemHandler(index)}></i>
                        </div>
                      </div>
                    )
                  }
                })}
              </div>
            </div>
          </div>
        </div>
            <div>
              <p>Choose where you want the list saved to!</p>
                <div className="newListCheckbox" >
              <input type="checkbox" id="private" name="private" value="private" onChange={handlePrivateAccess} />
              <label for="private"> Add to my lists</label>
              </div>
              <div className="newListCheckbox" >
              <input className="newListCheckbox" type="checkbox" id="public" name="public" value="public" onChange={handlePublicAccess} />
              <label for="public"> Add to public gallery</label>
              </div>
            </div>
        <button className="newListSaveButton newListButtons" onClick={newListHandler}>Save List</button>
      </div >
      <Footer />
      <NotificationContainer />
    </div>
    </>
  )
};
