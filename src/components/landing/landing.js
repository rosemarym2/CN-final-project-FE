import { Link } from "react-router-dom";
import "./landing.css";
import { Footer } from "../footer/footer"

export const Landing = () => {
  return (
    <div>
    <div className="landingBody">
      <div className="landingStyle">
        <img className="landingLogoImg" src="https://res.cloudinary.com/cn-project/image/upload/v1641915487/output-onlinepngtools_r2el6k.png"></img>
        <img className="landingImg" src="https://res.cloudinary.com/cn-project/image/upload/v1641915856/pana/misc/Reading_list-pana_tsuo3u.png"></img>
        <div className="landingBtnStyle">
          <button className="landingBtn" ><Link to="/login">Log In</Link></button>
          <button className="landingBtn"><Link to="/signup">Sign Up</Link></button>
        </div>
        <div className="landingSpan">
          <hr className="landingHR"></hr>
          <span>OR</span>
          <hr className="landingHR"></hr>
        </div>
        <p className="landingAbout"><Link to="/about">About Us</Link></p>
      </div>
    </div >
      <Footer />
    </div>
  );
}
