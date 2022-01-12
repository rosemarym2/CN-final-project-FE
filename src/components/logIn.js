import { useState, useContext } from "react";
import { logInFetch } from "../utils";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./logIn.css";

export const LogIn = ({ authContext }) => {
  const useAuth = () => {
    return useContext(authContext);
  }
  const location = useLocation();
  const auth = useAuth();
  const { from } = location.state || { from: { pathname: "/home" } };
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const logInHandler = async (e) => {
    e.preventDefault();
    const userId = await logInFetch(username, password);
    if (userId) {
      auth.signin(() => {
        history.replace(from);
      }, userId);
    } else {
      alert("Incorrect username or password, please try again");
    }
  };

  return (
    <div className="loginBody">
      <form className="loginForm" onSubmit={logInHandler}>
        <img className="loginLogoImg" src="https://res.cloudinary.com/cn-project/image/upload/v1641915487/output-onlinepngtools_r2el6k.png"></img>
        <img className="loginImg" src="https://res.cloudinary.com/cn-project/image/upload/v1641980972/pana/misc/Tablet_login-pana_miktxi.png"></img>
        <input className="loginInput" onChange={(e) => setUsername(e.target.value)} autocapitalize="none" placeholder="Username" type="text" value={username} />
        <div className="password-input">
          <input className="loginInput" onChange={(e) => setPassword(e.target.value)} autocapitalize="none" placeholder="Password" type="password" value={password} />
        </div>
        <button type="submit">Log In</button>
        <p>Don't have an account? <span className="loginLoginSpan"><Link to="/signup">Sign Up</Link></span></p>
      </form>

    </div >
  );
}