import React, { useState, useEffect } from "react";
import "./settings.css";
import { TopNav } from "../topNav/topNav";
import { Footer } from "../footer/footer"
import { getUserFetch, deleteUserFetch } from "../../utils";
import { Link, Redirect } from "react-router-dom";
import { lightTheme, darkTheme, GlobalStyles } from "./colourThemes";
import { ThemeProvider } from "styled-components";

export const Settings = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [showButtons2, setShowButtons2] = useState(false);
  const [showButtons3, setShowButtons3] = useState(false);
  const [user, setUser] = useState("");
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [userDeleted, setUserDeleted] = useState(false);
  const [theme, setTheme] = useState("light");

  const getUser = async () => {
    const userId = localStorage.getItem("myId");
    const profile = await getUserFetch(userId);
    setUser(profile.user.username);
  };

  useEffect(() => {
    getUser();
  }, []);

  const deleteConfirmationHandler = (value) => {
    if (value) {
      setDeleteConfirmation(true);
    } else {
      setDeleteConfirmation(false);
    }
  }

  const deleteUserProfileHandler = async () => {
    const userId = localStorage.getItem("myId");
    await deleteUserFetch(userId);
    localStorage.clear();
    setTimeout(() => setUserDeleted(true), 1000);
  }

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

  const darkMode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    console.log(theme);
  };

  const lightMode = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
    console.log(theme);
  };

  return (
    <>
      {userDeleted ? <Redirect to="/landing" /> : (
        <div className="align">
          <TopNav />
          <div className="userProfile">
            <h1>Settings</h1>
            <p>{user.username}</p>
            <UserProfile
              Img="https://res.cloudinary.com/cn-project/image/upload/v1641918750/pana/users/Focus-pana_d8i1ve.png"
              username={user}
            />
          </div>
          <Link to="/profile/edit">
            <button className="main">Edit Profile</button>
          </Link>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button className="main" onClick={buttonHandler}>Colour Scheme</button>
            {!showButtons ? "" : (
              <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <>
                  <GlobalStyles />
                  <button className="sub" onClick={() => darkMode()}>Light/Dark mode</button>
                  {/* <button className="sub" onClick={() => lightMode()}>Light mode</button> */}
                </>
              </ThemeProvider>
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
          <button className="delete" onClick={() => deleteConfirmationHandler(true)}>Delete Profile</button>
          <div className="delConf">
            {!deleteConfirmation ? "" : (
              <div>
                <p>Are you sure you want to delete your account?</p>
                <button className="delConfSub" onClick={deleteUserProfileHandler}>Yes, delete it!</button>
                <button className="delConfSub" onClick={() => deleteConfirmationHandler(false)}>No, keep it!</button>
              </div>
            )}
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

const UserProfile = (props) => {
  return (
    <div className="UserProfile">
      <img src={props.Img} className="Img" />
      <h2>{props.username}</h2>
    </div>
  );
};

