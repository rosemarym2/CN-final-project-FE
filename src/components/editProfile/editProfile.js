import { useState } from "react";
import "./editProfile.css";
import { updateUserEmailFetch, updateUserPasswordFetch, updateUserFetch } from "../../utils";
import { TopNav } from "../topNav/topNav";

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

  const submitHandler = () => {
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
  }

  return (
    <div className="edit-profile-page">
      <TopNav />
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