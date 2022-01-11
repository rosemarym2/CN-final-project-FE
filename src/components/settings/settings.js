import React, { useState, useEffect } from "react";
import "./settings.css";
import { getUserFetch, deleteUserFetch } from "../../utils";
import { Link, Redirect } from "react-router-dom";

export const Settings = (props) => {
  const [user, setUser] = useState("");
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [userDeleted, setUserDeleted] = useState(false);

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

  return (
    <>
      {userDeleted ? <Redirect to="/landing" /> : (
        <div className="userProfile">
          <h1>Settings</h1>
          <p>{user.username}</p>
          <UserProfile
            Img="https://res.cloudinary.com/cn-project/image/upload/v1641488639/pana/Binary_code-pana_ld9rm6.png"
            username={user} // user profile details linked with the back-end database
          />
          <Link to="/profile/edit">
            <EditProfile
              title="Edit Profile"
            />
          </Link>
          <Colour
            title="Colour Scheme"
            colour1="light"
            colour2="dark"
          />
          <FontSize
            title="Font Size"
            sizeSmall="small"
            sizeMedium="medium"
            sizeLarge="large"
          />
          <ListStyle
            title="List Style"
            scratch="scratchcard"
            flip="card flip"
            checklist="checklist"
          />
          <div onClick={() => deleteConfirmationHandler(true)}>
            <Delete
              title="DELETE PROFILE"
            />
          </div>
          {!deleteConfirmation ? "" : (
            <div>
              <p>Are you sure you want to delete your account?</p>
              <button onClick={deleteUserProfileHandler}>Yes, delete it!</button>
              <button onClick={() => deleteConfirmationHandler(false)}>No, I want to keep it.</button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

const UserProfile = (props) => {
  return (
    <div className="UserProfile">
      <img src={props.Img} className="Img" />
      <h2>{props.username}</h2>
    </div>
  );
};

const Colour = (props) => {
  return (
    <div className="Colour">
      <button>{props.title}</button>
      <SubCategories
        title={props.colour1}
      />
      <SubCategories
        title={props.colour2}
      />
    </div>
  );
};

const FontSize = (props) => {
  return (
    <div className="FontSize">
      <button>{props.title}</button>
      <SubCategories
        title={props.sizeSmall}
      />
      <SubCategories
        title={props.sizeMedium}
      />
      <SubCategories
        title={props.sizeLarge}
      />
    </div>
  );
};

const ListStyle = (props) => {
  return (
    <div className="ListStyle">
      <button>{props.title}</button>
      <SubCategories
        title={props.scratch}
      />
      <SubCategories
        title={props.flip}
      />
      <SubCategories
        title={props.checklist}
      />
    </div>
  );
};

const EditProfile = (props) => {
  return (
    <div className="EditProfile">
      <button>{props.title}</button>
      {/* <button onClick={toggleBtn}>{props.title}</button> */}
    </div>
  );
};

const SubCategories = (props) => {
  return (
    <div>
      <button className="Subcategories">{props.title}</button>
    </div>
  );
};

const Delete = (props) => {
  return (
    <div>
      <button className="Delete">{props.title}</button>
    </div>
  );
};

// const toggleBtn = async () => {

// }