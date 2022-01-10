import { useState } from "react";
import { addNewListFetch } from "../utils";

export const NewList = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
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
      
      const infoChangeHandler = (event) => {
        setItemInfo(event.target.value);
      }

    const newListItem = (name, info) => {
        const currentArr = [...listItems]
        currentArr.push({itemName: name, itemInfo: info})
        setListItems(currentArr);
    };

    return (
        <div>
            <h1>Create a New List</h1>
            <h2>Set Up Your List</h2>
            <label for="listTitle">Name Your List</label>
            <input type="text" onChange={(event) => setTitle(event.target.value)} id="listTitle" name="listTitle" placeholder="My New List" required/>

            <label for="listCat">Category</label>
            <input type="text" onChange={(event) => setCategory(event.target.value)} id="listCat" name="listCat" placeholder="Travel" required/>

            <label for="listKeyword">Keywords</label>
            <input type="text" onChange={(event) => setKeywordStr(event.target.value)} id="listKeyword" name="listKeyword" placeholder="Flight" required />
            <button onClick={() => newKeyword(keywordStr)}>Add Keyword</button>
            {keywords.map((item, index) => {
                return (
                    <div>
                        <li key={index}>{item}</li>
                    </div>
                )
            })}
            <h2>Add List Items</h2>
            <label for="itemName">Name</label>
            <input type="text" onChange={nameChangeHandler} id="itemName" name="itemName" placeholder="Fly to the Moon" required />
            <label for="itemInfo">Info</label>
            <input type="text" onChange={infoChangeHandler} id="itemInfo" name="itemInfo" placeholder="Need a Rocket" required />
            <button onClick={() => newListItem(itemName, itemInfo)}>Add Item</button>
            {listItems.map((item, index) => {
                return (
                    <ul>
                        <li key={index}>{item.itemName} - {item.itemInfo}</li>
                    </ul>
                )
            })}
            <button onClick={newListHandler}>Save List</button>
        </div >
    )
};
