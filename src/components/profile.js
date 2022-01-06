import React from "react";
import'./index.css';


export const Profile = (props) =>{
  return (
    <div className = 'userProfile'>
    <h1>My Space</h1>
    <UserProfile 
    Img = "https://res.cloudinary.com/cn-project/image/upload/v1641486239/pana/Watch_app-pana_twwmm6.png" 
    // Img2 = "https://res.cloudinary.com/cn-project/image/upload/v1641486239/pana/Self_confidence-pana_zo0elk.png"
    // Img3 = "https://res.cloudinary.com/cn-project/image/upload/v1641486240/pana/404_Error_with_a_cute_animal-pana_uumdxx.png"
    username = {`{$username}`} //need to link user profile details with the back-end database
    />
    
    <h2>In Progress</h2>
    <InProgress  
    Img = "https://res.cloudinary.com/cn-project/image/upload/v1641486603/pana/No_data-pana_f82ggb.png"   
    alt= "Animated picture of person on top of the world globe"
    title = "Travel"
    // category= "Travel" 
     />
    <InProgress  
    Img = "https://res.cloudinary.com/cn-project/image/upload/v1641486603/pana/No_data-pana_f82ggb.png"   
    alt= "Animated picture of person reading books"
    title = "Books"
    // category= "Books"
    />
    <InProgress  
    Img = "https://res.cloudinary.com/cn-project/image/upload/v1641486603/pana/No_data-pana_f82ggb.png"   
    alt= "Animated picture of couple watching movies"
    title = "Movies"
    // category= "Movies" - target="_blank"/page link
    />
    <h2>Completed</h2>
    <Completed  
    Img = "https://res.cloudinary.com/cn-project/image/upload/v1641486603/pana/No_data-pana_f82ggb.png"   
    alt= "Animated picture of person listening to music"
    title = "Music"
    // category= "Music"
    />
    <Completed  
    Img = "https://res.cloudinary.com/cn-project/image/upload/v1641486603/pana/No_data-pana_f82ggb.png"   
    alt= "Animated picture of person with an empty list"
    title = "New List"
    // category= "Create your own"
    /> 
    <Completed  
    Img = "https://res.cloudinary.com/cn-project/image/upload/v1641486603/pana/No_data-pana_f82ggb.png"   
    alt= "Animated picture of person with an empty list"
    title = "New List"
    // category= "Create your own"
    />   
    <h2>Saved</h2>  
    <Saved  
    Img = "https://res.cloudinary.com/cn-project/image/upload/v1641486603/pana/No_data-pana_f82ggb.png"   
    alt= "Animated picture of person listening to music"
    title = "Music"
    // category= "Music"
    />
    <Saved   
    Img = "https://res.cloudinary.com/cn-project/image/upload/v1641486603/pana/No_data-pana_f82ggb.png"   
    alt= "Animated picture of person listening to music"
    title = "Music"
    // category= "Music"
    />
    <Saved   
    Img = "https://res.cloudinary.com/cn-project/image/upload/v1641486603/pana/No_data-pana_f82ggb.png"   
    alt= "Animated picture of person listening to music"
    title = "Music"
    // category= "Music"
    />
    <h2>Create Your Own</h2>
    <CreateList  
    Img = "https://res.cloudinary.com/cn-project/image/upload/v1641486603/pana/No_data-pana_f82ggb.png"   
    alt= "Animated picture of person with an empty list"
    title = "New List"
    // category= "Create your own"
    />  
    </div>
    
  )
}

const UserProfile  = (props) =>{
  return (<div className ="UserProfile">
  <img src = {props.Img} className= "Img" />
  <img src = {props.Img2} className= "Img" />
  <img src = {props.Img3} className= "Img" />
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

const CreateList = (props) =>{
  return (<div className ="Article">
  <img src = {props.Img} className= "Img" />
  <p>{props.title}</p>
  {/* <p className = "category">{props.category}</p> */}
  </div>
  )}

//   export default Profile