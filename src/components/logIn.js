import { useState } from "react";
import { logInFetch } from "../utils";
import { Link, useHistory } from "react-router-dom"

export const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const logInHandler = async (e) => {
    e.preventDefault();
    const success = await logInFetch(username, password);
    if (!success) {
      history.push("/home");
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
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div >
  );
}