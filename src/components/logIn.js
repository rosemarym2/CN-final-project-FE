import { useState } from "react";
import { logInFetch } from "../utils";

export const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const logInHandler = async (e) => {
    e.preventDefault();
    const success = await logInFetch(username, password);
    if (!success) {
      alert("Incorrect username or password, please try again");
    } else  {
      alert("Logged in successfully.");
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
    </div >
  );
}