import "./about.css";
import { TopNav } from "../topNav/topNav";
import { Footer } from "../footer/footer"
import { useState, useEffect } from "react";

export const About = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("myId");
    if (userId) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <>
      {loggedIn ? <TopNav /> : ""}
      <div className="about-us-component">
        <div className="about">
          <img className="aboutImg" src="https://res.cloudinary.com/cn-project/image/upload/v1642092205/pana/misc/output-onlinepngtools_d346ft.png
"></img>
          <h3>What is List Junkie?</h3>
          <h5>This is a space for you to go wild with your bucket lists! Always wanted to sky dive? Visit the Amazon? Have the bragging rights of reading all of the classics? Show off all the awesome thing's you've done and plan to do? Have fun with our scratch off lists! Use our existing lists or create your own!
          </h5>
          <h3>Who are we?</h3>
          <h5>Based in Nottingham UK, Rosie, Rachel, Julija and Holly met at work and found a shared interest in creating websites and also making lists! Join them as they delve into the world of online lists!</h5>
        </div>
      </div>
      {loggedIn ? <Footer /> : ""}
    </>
  )
}