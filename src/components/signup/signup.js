import { useState } from "react";
import { signUpFetch } from "../../utils";
import { Link, Redirect } from "react-router-dom";
import "./signup.css";

export const SignUp = () => {
  const [signedUp, setSignedUp] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePass, setVisiblePass] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [passIcon, setPassIcon] = useState("bi bi-eye-slash");

  const signUpHandler = async () => {
    const success = signUpFetch(username, email, password);
    if (success) {
      setSignedUp(true);
    }
  }

  const visiblePassHandler = () => {
    setVisiblePass(!visiblePass);
    if (visiblePass) {
      setInputType("password");
      setPassIcon("bi bi-eye-slash");
    } else {
      setInputType("text");
      setPassIcon("bi bi-eye");
    }
  }

  return (
    <>
      {signedUp ? <Redirect to="/login" /> : (
        <div className="signup-page">
          <form className="signupForm" onSubmit={signUpHandler}>
            <img className="signupLogoImg" src="https://res.cloudinary.com/cn-project/image/upload/v1641915487/output-onlinepngtools_r2el6k.png"></img>
            <img className="signupImg" src="https://res.cloudinary.com/cn-project/image/upload/v1641980972/pana/misc/Sign_up-pana_otvhr4.png"></img>
            <input className="signupInput" onChange={(e) => setUsername(e.target.value)} autocapitalize="none" placeholder="Username" type="text" value={username} />
            <input className="signupInput" onChange={(e) => setEmail(e.target.value)} autocapitalize="none" placeholder="Email address" type="text" value={email} />
            <div className="password-input">
              <input className="signupInput" onChange={(e) => setPassword(e.target.value)} autocapitalize="none" placeholder="Password" type={inputType} value={password} />
              <i class={passIcon} onClick={visiblePassHandler}></i>
            </div>
            <button type="submit">Sign Up</button>
            <p>Already have an account? <span className="signupLoginSpan"><Link to="/login">Log In</Link></span></p>
          </form>

        </div >
      )}
    </>
  );
}