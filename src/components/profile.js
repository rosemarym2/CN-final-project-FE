import React from "react";
// import'./App.css';
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
    name = {`{$name}`}//need to link user profile details with the back-end database
    />
    <Article  
    Img = {image1}  
    alt= "Animated picture of person on top of the world globe"
    title = "Travel"
    // category= "Travel" 
     />
    <Article  
    Img = {image2}  
    alt= "Animated picture of person reading books"
    title = "Books"
    // category= "Books"
    />
    <Article  
    Img = {image3}  
    alt= "Animated picture of couple watching movies"
    title = "Movies"
    // category= "Movies" - target="_blank"/page link
    />
    <Article  
    Img = {image4}  
    alt= "Animated picture of person listening to music"
    title = "Music"
    // category= "Music"
    />
    <h2>Create Your Own</h2>
    <Article  
    Img = {image5}  
    alt= "Animated picture of person with an empty list"
    title = "New List"
    // category= "Create your own"
    />    
    </div>
  )
}

const UserProfile  = (props) =>{
  return (<div className ="UserProfile">
  <img src = {props.profileImage} className= "profileImg" />
  <h2>{props.name}</h2>
  </div>
  )}

const Article = (props) =>{
  return (<div className ="Article">
  <img src = {props.Img} className= "Img" />
  <p>{props.title}</p>
  {/* <p className = "category">{props.category}</p> */}
  </div>
  )}

  export default Profile