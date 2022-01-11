import { Link } from "react-router-dom";
import "./landing.css";

export const Landing = () => {
  return (
    <div className="landingBody">
      <div className="landingStyle">
        <h1>List Junkie</h1>
        <img className="landingImg" src="https://res.cloudinary.com/cn-project/image/upload/v1641490186/pana/Reading_list-pana_nkdm01.png"></img>
        <div className="landingBtnStyle">
          <button className="landingBtn" style={{ cursor: "pointer" }}><Link to="/login">Log In</Link></button>
          <button className="landingBtn" style={{ cursor: "pointer" }}><Link to="/signup">Sign Up</Link></button>
        </div>
        <div className="landingSpan" style={{ display: "flex" }}>
          <hr style={{ width: "30px" }}></hr>
          <span>OR</span>
          <hr style={{ width: "30px" }}></hr>
        </div>
        <p style={{ cursor: "pointer" }}>About Us</p>
      </div>
    </div >
  );
}
