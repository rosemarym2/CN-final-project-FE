import React, { useState, useEffect } from "react";
import "./profile.css";
import { getUserFetch, deleteSpecificListFetch } from "../../utils";
import { Link } from "react-router-dom";
import { TopNav } from "../topNav/topNav";
import { Footer } from "../footer/footer"
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

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

  const createNotification = (type, message) => {
    switch (type) {
      case "info":
        NotificationManager.info(`${message}`);
        break;
      case "success":
        NotificationManager.success(`${message}`);
        break;
    }
  };

  const deleteHandler = async (listId) => {
    const userId = localStorage.getItem("myId");
    const itemToDelete = await deleteSpecificListFetch(userId, listId);
    getUser();
    createNotification("success", itemToDelete.message);
  }

  return (
    <>
      <TopNav />
      <div className="profile-component">
        <h1>My Collection</h1>
        <UserProfile
          Img={user.image}
          username={user}
        />
        <h2>In Progress</h2>
        {inProgress.length == 0 ? <img src="https://res.cloudinary.com/cn-project/image/upload/v1641918860/pana/misc/No_data-pana_nb1uva.png" className="empty-folder-profile-component" /> :
          (
            <div className="profile-progress-lists">
              {inProgress.map((item, index) => {
                return (
                  <div>
                    <div className="delete-personal-list-button" onClick={() => deleteHandler(item._id)}>
                      <i class="bi bi-trash"></i>
                    </div>
                    <Link to={`/profile/lists/${item._id}`}>
                      <div key={index} className="profile-list">
                        <img src={item.listImage} />
                        <h5>{item.title}</h5>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          )
        }
        <h2>Completed</h2>
        {completed.length == 0 ? <img src="https://res.cloudinary.com/cn-project/image/upload/v1641918860/pana/misc/No_data-pana_nb1uva.png" className="empty-folder-profile-component" /> :
          (
            <div className="profile-completed-lists">
              {completed.map((item, index) => {
                return (
                  <div>
                    <div className="delete-personal-list-button" onClick={() => deleteHandler(item._id)}>
                      <i class="bi bi-trash"></i>
                    </div>
                    <Link to={`/profile/lists/${item._id}`}>
                      <div key={index} className="profile-list">
                        <img src={item.listImage} />
                        <h5>{item.title}</h5>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          )
        }
        <h2>Saved</h2>
        {saved.length == 0 ? <img src="https://res.cloudinary.com/cn-project/image/upload/v1641918860/pana/misc/No_data-pana_nb1uva.png" className="empty-folder-profile-component" /> :
          (
            <div className="profile-saved-lists">
              {saved.map((item, index) => {
                return (
                  <div>
                    <div className="delete-personal-list-button" onClick={() => deleteHandler(item._id)}>
                      <i class="bi bi-trash"></i>
                    </div>
                    <Link to={`/profile/lists/${item._id}`}>
                      <div key={index} className="profile-list">
                        <img src={item.listImage} />
                        <h5>{item.title}</h5>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          )
        }
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
        <Footer />

        <NotificationContainer />
      </div >
    </>
  );
};

const UserProfile = (props) => {
  return (
    <div className="userProfile">
      <img src={props.Img} className="Img" />
      <img src={props.Img2} className="Img" />
      <img src={props.Img3} className="Img" />
      <h2>{props.username}</h2>
    </div>
  );
};

const CreateList = (props) => {
  return (
    <div>
      <img src={props.Img} className="Img" />
      <p>{props.title}</p>
      {/* <p className = "category">{props.category}</p> */}
    </div>
  );
};