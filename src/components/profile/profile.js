import React, { useState, useEffect } from "react";
import "./profile.css";
import { getUserFetch } from "../../utils";
import { Link } from "react-router-dom";
import { TopNav } from "../topNav/topNav";

export const Profile = () => {
  const [user, setUser] = useState("");
  const [saved, setSaved] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  const getUser = async () => {
    const userId = localStorage.getItem("myId");
    const profile = await getUserFetch(userId);
    const savedLists = profile.user.lists.filter(element => element.status == "saved");
    const inProgressLists = profile.user.lists.filter(element => element.status == "in progress");
    const completedLists = profile.user.lists.filter(element => element.status == "completed");
    setSaved(savedLists);
    setInProgress(inProgressLists);
    setCompleted(completedLists);
    setUser(profile.user.username);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="userProfile">
      <TopNav />
      <h1>My Collection</h1>
      <UserProfile
        Img="https://res.cloudinary.com/cn-project/image/upload/v1641488639/pana/Binary_code-pana_ld9rm6.png"
        // Img2 = "https://res.cloudinary.com/cn-project/image/upload/v1641486239/pana/Self_confidence-pana_zo0elk.png"
        // Img3 = "https://res.cloudinary.com/cn-project/image/upload/v1641486240/pana/404_Error_with_a_cute_animal-pana_uumdxx.png"
        // username = {`${user.username}`} //need to link user profile details with the back-end database
        username={user} //need to link user profile details with the back-end database
      />
      <h2>In Progress</h2>
      <div className="prog">
        {inProgress.map((item, index) => {
          return (
            <Link to={`/profile/lists/${item._id}`}>
              <div key={index}>
                <img src={item.listImage} style={{ width: "150px" }} />
                <h5>{item.title}</h5>
              </div>
            </Link>
          )
        })}
      </div>
      <h2>Completed</h2>
      <div className="comp">
        {completed.map((item, index) => {
          return (
            <Link to={`/profile/lists/${item._id}`}>
              <div key={index}>
                <img src={item.listImage} style={{ width: "150px" }} />
                <h5>{item.title}</h5>
              </div>
            </Link>
          )
        })}
      </div>
      <h2>Saved</h2>
      <div className="save">
        {saved.map((item, index) => {
          return (
            <Link to={`/profile/lists/${item._id}`}>
              <div key={index}>
                <img src={item.listImage} style={{ width: "150px" }} />
                <h5>{item.title}</h5>
              </div>
            </Link>
          )
        })}
      </div>
      <h2>Create Your Own</h2>
      <div className="create">
        <Link to="/newList">
          <CreateList
            Img="https://res.cloudinary.com/cn-project/image/upload/v1641486603/pana/No_data-pana_f82ggb.png"
            alt="Animated picture of person with an empty list"
            title="New List"
          />
        </Link>
      </div>
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

const CreateList = (props) => {
  return (
    <div className="Article">
      <img src={props.Img} className="Img" />
      <p>{props.title}</p>
      {/* <p className = "category">{props.category}</p> */}
    </div>
  );
};

// below are not in use anymore 

const InProgress = (props) => {
  return (
    <div className="Article">
      <img src={props.Img} className="Img" />
      <p>{props.title}</p>
      {/* <p className = "category">{props.category}</p> */}
    </div>
  );
};

const Completed = (props) => {
  return (
    <div className="Article">
      <img src={props.Img} className="Img" />
      <p>{props.title}</p>
      {/* <p className = "category">{props.category}</p> */}
    </div>
  );
};

const Saved = (props) => {
  return (
    <div className="Article">
      <img src={props.Img} className="Img" />
      <p>{props.title}</p>
      {/* <p className = "category">{props.category}</p> */}
    </div>
  );
};