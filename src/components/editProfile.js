import { useState, useEffect } from "react";
import "./editProfile.css";

export const EditProfile = () => {
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

  return (
    <div className="edit-profile-page">
      <h1>Edit Profile</h1>
      <div className="change-profile-picture">
        <div className="profile-picture"></div>
        <p>Change profile photo</p>
      </div>

      <form className="form-size">
        <p>
          <label for="username">Username</label>
          <input autocapitalize="none" placeholder="Username" type="text" id="username" autocomplete="off" />
        </p>
        <p>
          <label for="emailAddress">Email address</label>
          <input autocapitalize="none" placeholder="Email address" type="text" id="emailAddress" autocomplete="off" />
        </p>
        <p>
          <label for="newPassword">New Password</label>
          <input onChange={(e) => setPassword(e.target.value)} autocapitalize="none" placeholder="New password" id="newPassword" type={inputType} value={password} />
          <i class={passIcon} onClick={visiblePassHandler}></i>
        </p>
        <button type="submit" id="save-changes-button">Save Changes</button>
      </form>
    </div >
  );
}