import React from "react";
// import'./App.css';
import profileImage from 'cloudinary';
import image1 from 'cloudinary';
import image2 from 'cloudinary';
import image3 from 'cloudinary';
import image4 from 'cloudinary';
import image5 from 'cloudinary';
import image5 from 'cloudinary';


const Profile = (props) =>{
  return (
    <div className = 'home'>
    <h1>Pick A List</h1>
    <UserProfile 
    Img = {profileImage}  
    username = {`{$username}`}//need to link user profile details with the back-end database
    />
    <h2>In Progress</h2>
    <InProgress  
    Img = {image1}  
    alt= "Animated picture of person on top of the world globe"
    title = "Travel"
    // category= "Travel" 
     />
    <InProgress  
    Img = {image2}  
    alt= "Animated picture of person reading books"
    title = "Books"
    // category= "Books"
    />
    <InProgress  
    Img = {image3}  
    alt= "Animated picture of couple watching movies"
    title = "Movies"
    // category= "Movies" - target="_blank"/page link
    />
    <h2>Completed</h2>
    <Completed  
    Img = {image4}  
    alt= "Animated picture of person listening to music"
    title = "Music"
    // category= "Music"
    />
    <Completed  
    Img = {image5}  
    alt= "Animated picture of person with an empty list"
    title = "New List"
    // category= "Create your own"
    /> 
    <Completed  
    Img = {image5}  
    alt= "Animated picture of person with an empty list"
    title = "New List"
    // category= "Create your own"
    />   
    <h2>Saved</h2>  
    <Saved  
    Img = {image4}  
    alt= "Animated picture of person listening to music"
    title = "Music"
    // category= "Music"
    />
    <Saved   
    Img = {image4}  
    alt= "Animated picture of person listening to music"
    title = "Music"
    // category= "Music"
    />
    <Saved   
    Img = {image4}  
    alt= "Animated picture of person listening to music"
    title = "Music"
    // category= "Music"
    />
    </div>
  )
}

const UserProfile  = (props) =>{
  return (<div className ="UserProfile">
  <img src = {props.profileImage} className= "profileImg" />
  <h2>{props.username}</h2>
  </div>
  )}

const InProgress = (props) =>{
  return (<div className ="Article">
  <img src = {props.Img} className= "Img" />
  <p>{props.title}</p>
  {/* <p className = "category">{props.category}</p> */}
  </div>
  )}

const Completed = (props) =>{
  return (<div className ="Article">
  <img src = {props.Img} className= "Img" />
  <p>{props.title}</p>
  {/* <p className = "category">{props.category}</p> */}
  </div>
  )}

const Saved = (props) =>{
  return (<div className ="Article">
  <img src = {props.Img} className= "Img" />
  <p>{props.title}</p>
  {/* <p className = "category">{props.category}</p> */}
  </div>
  )}
  export default Profile