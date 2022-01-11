import { Link } from "react-router-dom";
import { TopNav } from "./topNav/topNav";

export const Landing = () => {

  return (
    <div>
      <TopNav />
      <button style={{ cursor: "pointer" }}><Link to="/login">Log In</Link></button>
      <button style={{ cursor: "pointer" }}><Link to="/signup">Sign Up</Link></button>
      <div style={{ display: "flex" }}>
        <hr style={{ width: "30px" }}></hr>
        <span>OR</span>
        <hr style={{ width: "30px" }}></hr>
      </div>
      <p style={{ cursor: "pointer" }}>About Us</p>
    </div>
  );
}
