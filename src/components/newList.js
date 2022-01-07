import { useState } from "react";
import { addNewListFetch } from "../utils";

export const NewList = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [keywords, setKeywords] = useState([]);
    const [listItems, setListItems] = useState([]);
    const [itemName, setItemName] = useState("");
    const [itemInfo, setItemInfo] = useState("");

    const newKeyword = (input) => {
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

    const newListItem = (input) => {
        const storedName = [...itemName]
        storedName.push(input)
        setItemName(storedName)
        const storedInfo = [...itemInfo]
        storedInfo.push(input)
        setItemInfo(storedInfo)
        // const storedList = [...listItems]
        // storedList.push(itemName, itemInfo)
    };

    return (
        <div>
            <h1>Create a New List</h1>
            <h2>Set Up Your List</h2>
            <label for="listTitle">Name Your List</label>
            <input type="text" onChange={(event) => setTitle(event.target.value)} id="listTitle" name="listTitle" placeholder="My New List" />

            <label for="listCat">Category</label>
            <input type="text" onChange={(event) => setCategory(event.target.value)} id="listCat" name="listCat" placeholder="Travel" />

            <label for="listKeyword">Keywords</label>
            <input type="text" onChange={(event) => setKeywords(event.target.value)} id="listKeyword" name="listKeyword" placeholder="Flight" />
            <button onClick={() => newKeyword()}>Add Keyword</button>
            {keywords.map((keyword, index) => {
                return (
                    <div>
                        <li key={index}>{keyword}</li>
                    </div>
                )
            })}
            <h2>Add List Items</h2>
            <label for="itemName">Name</label>
            <input type="text" onChange={nameChangeHandler} id="itemName" name="itemName" placeholder="Fly to the Moon" />
            <label for="itemInfo">Info</label>
            <input type="text" onChange={infoChangeHandler} id="itemInfo" name="itemInfo" placeholder="Need a Rocket" />
            <button onClick={() => newListItem()}>Add Item</button>
            {listItems.map((item1, item2, index) => {
                return (
                    <div>
                        <li key={index}>{item1} {item2}</li>
                    </div>
                )
            })}
        </div >
    )
};

// onChange={infoChangeHandler}