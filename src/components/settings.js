import React, { useState, useEffect } from "react";
import "./settings.css";
import { getUserFetch } from "../utils";

export const Settings = (props) => {
  const [user, setUser] = useState("");
//   const [list, setList] = useState([]);
  const getUser = async () => {
    const profile = await getUserFetch("61d5ace72b3bb16c099a7b29");
    console.log(profile);
    setUser(profile.user.username);
  };

  useEffect(() => {
      getUser();
    }, []);

  return (
    <div className="userProfile">
      <h1>Settings</h1>
      <p>{user.username}</p>
      <UserProfile
        Img="https://res.cloudinary.com/cn-project/image/upload/v1641488639/pana/Binary_code-pana_ld9rm6.png"
        username={user} // user profile details linked with the back-end database
      />
      <Categories
      title = "Edit Profile"
      />
      <Categories
      title = "Colour Scheme"
      colour1= "light"
      colour2= "dark"
      />
      <Categories
      title = "Font Size"
      />
      <Categories
      title = "List Style"
      />
      <SubCategories
      title = "DELETE PROFILE"
      />
    </div>
  );
};

const UserProfile = (props) => {
  return (
    <div className="UserProfile">
      <img src={props.Img} className="Img" />
      <img src={props.Img2} className="Img" />
      <img src={props.Img3} className="Img" />
      <h2>{props.username}</h2>
    </div>
  );
};

const Categories = (props) => {
  return (
    <div className="Article">
      <img src={props.Img} className="Img" />
      <button>{props.title}</button>
      <SubCategories
      title = {props.colour1}
      />
      <SubCategories
      title = {props.colour2}
      />
      <SubCategories
      />
    </div>
  );
};

const SubCategories = (props) => {
    return (
      <div className="Article">
        <img src={props.Img} className="Img" />
        <button>{props.title}</button>
      </div>
    );
  };

