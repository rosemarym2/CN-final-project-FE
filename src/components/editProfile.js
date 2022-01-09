import { useState, useEffect } from "react";
import "./editProfile.css";
import { Redirect } from "react-router-dom";
import { updateUserEmailFetch, updateUserPasswordFetch, updateUserFetch } from "../utils";

export const EditProfile = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePass, setVisiblePass] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [passIcon, setPassIcon] = useState("bi bi-eye-slash");

  useEffect(() => {
    const userId = localStorage.getItem("myId");
    if (userId !== null) {
      setLoggedIn(true);
    }
  }, []);

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

  const submitHandler = async () => {
    const userId = localStorage.getItem("myId");
    if (email !== "") {
      await updateUserEmailFetch(userId, email);
    }

    if (password !== "") {
      await updateUserPasswordFetch(userId, password);
    }

    if (newUsername !== "") {
      await updateUserFetch(userId, "username", newUsername);
    }
  }

  return (
    <>
      {!loggedIn ? <Redirect to="/login" /> : (
        <div className="edit-profile-page">
          <h1 className="edit-profile-title">Edit Profile</h1>
          <div className="change-profile-picture">
            <div className="profile-picture"></div>
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
            <button type="submit" id="save-changes-button">Save Changes</button>
          </form>
        </div >
      )
      }
    </>
  );
}