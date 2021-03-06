import { useState, useEffect } from "react";
import "./editProfile.css";
import { updateUserEmailFetch, updateUserPasswordFetch, updateUserFetch, getUserFetch } from "../../utils";
import { TopNav } from "../topNav/topNav";
import { Footer } from "../footer/footer"
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Link } from "react-router-dom"
import { Button } from 'antd';

export const EditProfile = () => {
  const [user, setUser] = useState({});
  const [newUsername, setNewUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");
  const [profileImg, setProfileImg] = useState("");
  const [openProfile, setOpenProfile] = useState(true);

  const profileImagesArr = [
    "https://res.cloudinary.com/cn-project/image/upload/v1641917420/pana/users/Binary_code-pana_uxhgqu.png",
    "https://res.cloudinary.com/cn-project/image/upload/v1641917420/pana/users/Waist_bag-pana_ltvavt.png",
    "https://res.cloudinary.com/cn-project/image/upload/v1641917420/pana/users/Self_confidence-pana_gbdl3f.png",
    "https://res.cloudinary.com/cn-project/image/upload/v1641917587/pana/users/Files_sent-pana_oisyu6.png",
    "https://res.cloudinary.com/cn-project/image/upload/v1641918750/pana/users/Focus-pana_d8i1ve.png",
    "https://res.cloudinary.com/cn-project/image/upload/v1641917587/pana/users/Coolness-pana_nztmbe.png",
    "https://res.cloudinary.com/cn-project/image/upload/v1641917587/pana/users/Octopus-pana_r21w9m.png",
    "https://res.cloudinary.com/cn-project/image/upload/v1641916932/pana/users/404_Error_with_a_cute_animal-pana_kcnmwq.png",
    "https://res.cloudinary.com/cn-project/image/upload/v1641918466/pana/users/Sleeping_bat-pana_elji47.png",
  ];

  const handleToggle = () => {
    setOpenProfile(prev => !prev)
  }

  useEffect(async () => {
    const userId = localStorage.getItem("myId");
    const profile = await getUserFetch(userId);
    setUser(profile.user);
  }, [])

  const handleImageChange = (picture) => {
    setProfileImg(picture);
  };

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

    if (profileImg !== "") {
      updateUserFetch(userId, "image", profileImg);
    }
    createNotification("success");
  }

  const createNotification = (type) => {
    switch (type) {
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
          {profileImg ? <img className="userImgSelected" src={profileImg} /> : <img src={user.image} style={{ width: 150 }} />}
          <Button className="imgSelectBtn" type="primary" onClick={handleToggle}>{openProfile ? "Change profile photo" : "Close"}</Button>
          <div className={`${openProfile ? "hideModal" : "imgSelect"}`}>
            {profileImagesArr.map((picture, index) => {
              return (
                <img className="userImgSelected" key={index} src={picture} onClick={() => handleImageChange(picture)} />
              )
            })}
          </div>
        </div>
        <form className={`${openProfile ? "form-size" : "hideModal"}`} >
          <p>
            <label for="username">Update username</label>
            <input className="edit-profile-input" onChange={(e) => setNewUsername(e.target.value)} autocapitalize="none" placeholder="New username" type="text" id="username" autocomplete="off" value={newUsername} />
          </p>
          <p>
            <label for="emailAddress">Update email address</label>
            <input className="edit-profile-input" onChange={(e) => setEmail(e.target.value)} autocapitalize="none" placeholder="New email" type="text" id="emailAddress" autocomplete="off" value={email} />
          </p>
          <p>
            <label for="newPassword">Update password</label>
            <input className="edit-profile-input" onChange={(e) => setPassword(e.target.value)} autocapitalize="none" placeholder="New password" id="newPassword" type={inputType} value={password} />
          </p>
        </form>
      </div >
      <div className="changesBtnPosition">
        <button className="changesBtn" type="submit" id="save-changes-button" onClick={submitHandler}>Save Changes</button>
        <Link to="/settings"><button className="changesBtn">Back to Settings</button></Link>
      </div>
      <Footer />
      <NotificationContainer />
    </div >
  )
}


