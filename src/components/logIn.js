import { useState, useContext } from "react";
import { logInFetch } from "../utils";
import { Link, useHistory, useLocation } from "react-router-dom";

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
    <div style={{ textAlign: "center" }}>
      <form onSubmit={logInHandler}>
        <input onChange={(e) => setUsername(e.target.value)} autocapitalize="none" placeholder="Username" type="text" value={username} />
        <div className="password-input">
          <input onChange={(e) => setPassword(e.target.value)} autocapitalize="none" placeholder="Password" type="password" value={password} />
        </div>
        <button type="submit">Log In</button>
      </form>
      <p>Don't have an account? <span><Link to="/signup">Sign Up</Link></span></p>
    </div >
  );
}