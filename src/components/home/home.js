import React from "react";
import './home.css';
import { Link } from "react-router-dom";
import { TopNav } from "../topNav/topNav";
import { Footer } from "../footer/footer";

export const Home = () => {

  return (
    <>
      <TopNav />
      <div className="home-component-body">
        <h1>Pick A List</h1>
        <div>
          <MainArticle
            title="Categories"
          />
        </div>
        <div className="category-list">
          <Link to="/category/Travel">
            <Article
              Img="https://res.cloudinary.com/cn-project/image/upload/v1641917068/pana/categories/Winter_solstice-pana_ga4pzm.png"
              alt="Animated picture of the world globe"
              title="Travel"
            />
          </Link>

          <Link to="/category/Books">
            <Article
              Img="https://res.cloudinary.com/cn-project/image/upload/v1641916769/pana/categories/Book_lover-pana_ruswm0.png"
              alt="Animated picture of person reading books"
              title="Books"
            />
          </Link>

          <Link to="/category/Movies">
            <Article
              Img="https://res.cloudinary.com/cn-project/image/upload/v1641916622/pana/categories/Film_rolls-pana_gnpcro.png"
              alt="Animated picture movie reels"
              title="Movies"
            />
          </Link>

          <Link to="/category/Music">
            <Article
              Img="https://res.cloudinary.com/cn-project/image/upload/v1641916769/pana/categories/Headphone-pana_befwwy.png"
              alt="Animated picture of person listening to music"
              title="Music"
            />
          </Link>
        </div>
        <div className="text">
          <h2>Create Your Own</h2>
        </div>
        <div className="create">
          <Link to="/lists/create">
            <Article
              Img="https://res.cloudinary.com/cn-project/image/upload/v1641918493/pana/misc/Add_notes-pana_h7jiy7.png"
              alt="Animated picture of person with an empty list"
              title="New List"
            />
          </Link>
        </div>
        <Footer />
      </div>
    </>
  )
}

const MainArticle = (props) => {
  return (
    <div className="MainArticle">
      <img src={props.image1} className="mainImg" />
      <h2>{props.title}</h2>
    </div>
  )
}

const Article = (props) => {
  return (
    <div className="category-article">
      <img src={props.Img} className="Img" />
      <p>{props.title}</p>
    </div>
  )
}