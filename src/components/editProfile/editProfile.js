import { useState } from "react";
import "./editProfile.css";
import { updateUserEmailFetch, updateUserPasswordFetch, updateUserFetch } from "../../utils";
import { TopNav } from "../topNav/topNav";
import { BottomNav } from "../bottomNav/bottomNav";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export const EditProfile = () => {
  const [newUsername, setNewUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePass, setVisiblePass] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [passIcon, setPassIcon] = useState("bi bi-eye-slash");

  const visiblePassHandler = () => {
    setVisiblePass(!visiblePass);
    if (visiblePass) {
      setInputType("password");
      setPassIcon("bi bi-eye-slash");
    } else {
      setInputType("text");
      setPassIcon("bi bi-eye");
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("myId");
    if (email !== "") {
      updateUserEmailFetch(userId, email);
    }

    if (password !== "") {
      updateUserPasswordFetch(userId, password);
    }

    if (newUsername !== "") {
      updateUserFetch(userId, "username", newUsername);
    }
    createNotification("success");
  }

  const createNotification = (type) => {
    switch (type) {
      case "info":
        NotificationManager.info("Changes saved successfully");
        break;
      case "success":
        NotificationManager.success("Changes saved successfully");
        break;
    }
  };

  return (
    <div>
      <TopNav />
      <div className="edit-profile-page">
        <h1 className="edit-profile-title">Edit Profile</h1>
        <div className="change-profile-picture">
          <img className="editImg" src="https://res.cloudinary.com/cn-project/image/upload/v1641918750/pana/users/Focus-pana_d8i1ve.png"></img>
          <p className="edit-profile-p">Change profile photo</p>
        </div>
        <form className="form-size" onSubmit={submitHandler} >
          <p>
            <label for="username">Username</label>
            <input className="edit-profile-input" onChange={(e) => setNewUsername(e.target.value)} autocapitalize="none" placeholder="Username" type="text" id="username" autocomplete="off" value={newUsername} />
          </p>
          <p>
            <label for="emailAddress">Email address</label>
            <input className="edit-profile-input" onChange={(e) => setEmail(e.target.value)} autocapitalize="none" placeholder="Email address" type="text" id="emailAddress" autocomplete="off" value={email} />
          </p>
          <p>
            <label for="newPassword">New Password</label>
            <input className="edit-profile-input" onChange={(e) => setPassword(e.target.value)} autocapitalize="none" placeholder="New password" id="newPassword" type={inputType} value={password} />
            <i class={passIcon} onClick={visiblePassHandler}></i>
          </p>
        </form>
      </div >
      <div className="changesBtnPosition">
        <button className="changesBtn" type="submit" id="save-changes-button">Save Changes</button>
      </div>
      <BottomNav />
      <NotificationContainer />
    </div >
  )
}