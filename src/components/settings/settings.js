import React, { useState, useEffect } from "react";
import "./settings.css";
import { getUserFetch } from "../../utils";
import { TopNav } from "../topNav/topNav";
import { BottomNav } from "../bottomNav/bottomNav";

export const Settings = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [showButtons2, setShowButtons2] = useState(false);
  const [showButtons3, setShowButtons3] = useState(false);
  const [user, setUser] = useState("");
  const getUser = async () => {
    const id = localStorage.getItem("myId");
    const profile = await getUserFetch(id);
    console.log(profile);
    setUser(profile.user.username);
  };

  useEffect(() => {
    getUser();
  }, []);

  const buttonHandler = async () => {
    if (showButtons) {
      setShowButtons(false);
    } else {
      setShowButtons(true);
    }
  }

  const buttonHandler2 = async () => {
    if (showButtons2) {
      setShowButtons2(false);
    } else {
      setShowButtons2(true);
    }
  }

  const buttonHandler3 = async () => {
    if (showButtons3) {
      setShowButtons3(false);
    } else {
      setShowButtons3(true);
    }
  }

  const UserProfile = (props) => {
    return (
      <div className="UserProfile">
        <img src={props.Img} className="Img" />
        <h2>{props.username}</h2>
      </div>
    );
  };

  return (
    <div className="align">
      <TopNav />
      <div className="userProfile">
        <h1>Settings</h1>
        <p>{user.username}</p>
        <UserProfile
          Img="https://res.cloudinary.com/cn-project/image/upload/v1641488639/pana/Binary_code-pana_ld9rm6.png"
          username={user}
        />
      </div>
      <button className="main">Edit Profile</button>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button className="main" onClick={buttonHandler}>Colour Scheme</button>
        {!showButtons ? "" : (
          <>
            <button className="sub">Dark mode</button>
            <button className="sub">Light mode</button>
          </>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button className="main" onClick={buttonHandler2}>List Styles</button>
        {!showButtons2 ? "" : (
          <>
            <button className="sub">Scratchcard</button>
            <button className="sub">Flip card</button>
            <button className="sub">Checklist</button>
          </>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button className="main" onClick={buttonHandler3}>Font Size</button>
        {!showButtons3 ? "" : (
          <>
            <button className="sub">Small</button>
            <button className="sub">Medium</button>
            <button className="sub">Large</button>
          </>
        )}
      </div>
      <button className="delete">DELETE PROFILE</button>
      <BottomNav />
    </div>
  );
}


