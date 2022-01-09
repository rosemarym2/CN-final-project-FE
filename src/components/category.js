import { useState, useEffect } from "react";
import { getFilteredListsFetch } from "../utils";
import { useParams } from "react-router-dom";

export const Category = () => {
  const { handle } = useParams();
  const [listArr, setListArr] = useState([]);

  useEffect(() => {
    dataHandler(handle);
  }, []);

  const dataHandler = async (handle) => {
    const data = await getFilteredListsFetch("category", handle);
    setListArr(data.filteredLists);
    console.log(listArr);
  }

  return (
    <div>
      <h1>{handle}</h1>
      {listArr.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.title}</p>
          </div>
        )
      })}
    </div>
  );
}