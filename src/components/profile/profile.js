import React, { useState, useEffect } from "react";
import "./profile.css";
import { getUserFetch, deleteSpecificListFetch } from "../../utils";
import { Link } from "react-router-dom";
import { TopNav } from "../topNav/topNav";
import { BottomNav } from "../bottomNav/bottomNav";

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

  const deleteHandler = async (listId) => {
    const userId = localStorage.getItem("myId");
    console.log(userId);
    console.log(listId);
    const itemToDelete = await deleteSpecificListFetch(userId, listId);
    getUser();
    console.log(itemToDelete);
  }

  return (
    <div className="userProfile">
      <TopNav />
      <h1>My Collection</h1>
      <UserProfile
        Img="https://res.cloudinary.com/cn-project/image/upload/v1641918750/pana/users/Focus-pana_d8i1ve.png"
        username={user}
      />
      <h2>In Progress</h2>
      <div className="prog">
        {inProgress.map((item, index) => {
          return (
            <div>
              <div className="delete-personal-list-button" onClick={() => deleteHandler(item._id)}>
                <i class="bi bi-trash"></i>
              </div>
              <Link to={`/profile/lists/${item._id}`}>
                <div key={index}>
                  <img src={item.listImage} style={{ width: "150px" }} />
                  <h5>{item.title}</h5>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
      <h2>Completed</h2>
      <div className="comp">
        {completed.map((item, index) => {
          return (
            <div>
              <div className="delete-personal-list-button" onClick={() => deleteHandler(item._id)}>
                <i class="bi bi-trash"></i>
              </div>
              <Link to={`/profile/lists/${item._id}`}>
                <div key={index}>
                  <img src={item.listImage} style={{ width: "150px" }} />
                  <h5>{item.title}</h5>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
      <h2>Saved</h2>
      <div className="save">
        {saved.map((item, index) => {
          return (
            <div>
              <div className="delete-personal-list-button" onClick={() => deleteHandler(item._id)}>
                <i class="bi bi-trash"></i>
              </div>
              <Link to={`/profile/lists/${item._id}`}>
                <div key={index}>
                  <img src={item.listImage} style={{ width: "150px" }} />
                  <h5>{item.title}</h5>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
      <h2>Create Your Own</h2>
      <div className="create">
        <Link to="/lists/create">
          <CreateList
            Img="https://res.cloudinary.com/cn-project/image/upload/v1641918493/pana/misc/Add_notes-pana_h7jiy7.png"
            alt="Animated picture of person with an empty list"
            title="New List"
          />
        </Link>
      </div>
      <BottomNav />
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
