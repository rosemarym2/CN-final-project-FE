import { useState } from "react";
import { signUpFetch } from "../utils";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpHandler = async () => {
    // e.preventDefault();
    const success = signUpFetch(username, email, password);
    // if (success) {
    //   history.push("/login");
    // }
  }

  return (
    <div className="signup-page" style={{ textAlign: "center" }}>
      <form onSubmit={signUpHandler}>
        <input onChange={(e) => setUsername(e.target.value)} autocapitalize="none" placeholder="Username" type="text" value={username} />
        <input onChange={(e) => setEmail(e.target.value)} autocapitalize="none" placeholder="Email address" type="text" value={email} />
        <div className="password-input">
          <input onChange={(e) => setPassword(e.target.value)} autocapitalize="none" placeholder="Password" type="password" value={password} />
          {/* <i class={passIcon} onClick={visiblePassHandler}></i> */}
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Log In</Link></p>
    </div >
  );
}