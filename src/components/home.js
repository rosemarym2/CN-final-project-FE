import React from "react";
import'./profile.css';


export const Home = (props) =>{
  return (
    <div className = "text">
    <h1>Pick A List</h1>
    <div>
    <MainArticle 
    title = "Categories"
    />
    </div>
    <div className="home">
    <Article  
    Img = "https://res.cloudinary.com/cn-project/image/upload/v1641481525/pana/Winter_solstice-pana_x4wbwx.png" 
    alt= "Animated picture of the world globe"
    title = "Travel"
    // category= "Travel" 
     />
    <Article  
    Img = "https://res.cloudinary.com/cn-project/image/upload/v1641481525/pana/Book_lover-pana_gvn56e.png"  
    alt= "Animated picture of person reading books"
    title = "Books"
    // category= "Books"
    />
    <Article  
    Img = "https://res.cloudinary.com/cn-project/image/upload/v1641481525/pana/Film_rolls-pana_wipspq.png" 
    alt= "Animated picture movie reels"
    title = "Movies"
    // category= "Movies" - target="_blank"/page link
    />
    <Article  
    Img = "https://res.cloudinary.com/cn-project/image/upload/v1641481525/pana/Headphone-pana_ay39wz.png"
    alt= "Animated picture of person listening to music"
    title = "Music"
    // category= "Music"
    />
    </div>
    <div className= "text">
    <h2>Create Your Own</h2>
    </div>
    <div className= "create">
    <Article  
    Img = "https://res.cloudinary.com/cn-project/image/upload/v1641481525/pana/Add_notes-pana_eh4w5x.png"
    alt= "Animated picture of person with an empty list"
    title = "New List"
    // category= "Create your own"
    /> 
    </div>   
    </div>
  )
}

const MainArticle = (props) =>{
  return (<div className ="MainArticle">
  <img src = {props.image1} className= "mainImg"/>
  <h2>{props.title}</h2>
  </div>
  )}

const Article = (props) =>{
  return (<div className ="Article">
  <img src = {props.Img} className= "Img" />
  <p>{props.title}</p>
  {/* <p className = "category">{props.category}</p> */}
  </div>
  )}

//   export default Home