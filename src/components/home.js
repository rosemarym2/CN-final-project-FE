import React from "react";
// import'./App.css';
import image1 from 'https://res.cloudinary.com/cn-project/image/upload/v1641481525/pana/Winter_solstice-pana_x4wbwx.png';
import image2 from 'https://res.cloudinary.com/cn-project/image/upload/v1641481525/pana/Book_lover-pana_gvn56e.png';
import image3 from 'https://res.cloudinary.com/cn-project/image/upload/v1641481525/pana/Film_rolls-pana_wipspq.png';
import image4 from 'https://res.cloudinary.com/cn-project/image/upload/v1641481525/pana/Headphone-pana_ay39wz.png';
import image5 from 'https://res.cloudinary.com/cn-project/image/upload/v1641481525/pana/Add_notes-pana_eh4w5x.png';



const Home = (props) =>{
  return (
    <div className = 'home'>
    <h1>Pick A List</h1>
    <MainArticle 
    title = "Categories"
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

const MainArticle = (props) =>{
  return (<div className ="MainArticle">
  <img src = {props.image1} className= "mainImg" />
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

  export default Home