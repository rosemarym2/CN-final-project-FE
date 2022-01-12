import { useState, useContext } from "react";
import { logInFetch } from "../../utils";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./logIn.css";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

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
      createNotification("error");
    }
  };

  const createNotification = (type) => {
    switch (type) {
      // case 'info':
      //   NotificationManager.info('Info message');
      //   break;
      // case 'success':
      //   NotificationManager.success('Success message', 'Title here');
      //   break;
      case 'warning':
        NotificationManager.warning("Incorrect username or password, please try again");
        break;
      case 'error':
        NotificationManager.error("Incorrect username or password, please try again");
        break;
    }
  };

  return (
    <div className="loginBody">
      <form className="loginForm" onSubmit={logInHandler}>
        <img className="loginLogoImg" src="https://res.cloudinary.com/cn-project/image/upload/v1641915487/output-onlinepngtools_r2el6k.png"></img>
<<<<<<< HEAD:src/components/logIn.js
        <img className="loginImg" src="https://res.cloudinary.com/cn-project/image/upload/v1641980972/pana/misc/Tablet_login-pana_miktxi.png"></img>
=======
        <img className="loginImg" src="https://res.cloudinary.com/cn-project/image/upload/v1641490186/pana/Reading_list-pana_nkdm01.png"></img>
>>>>>>> 9565760dd096ae7e3e27cb89f59720e75c1459ed:src/components/login/logIn.js
        <input className="loginInput" onChange={(e) => setUsername(e.target.value)} autocapitalize="none" placeholder="Username" type="text" value={username} />
        <div className="password-input">
          <input className="loginInput" onChange={(e) => setPassword(e.target.value)} autocapitalize="none" placeholder="Password" type="password" value={password} />
        </div>
        <button type="submit">Log In</button>
        <p>Don't have an account? <span className="loginLoginSpan"><Link to="/signup">Sign Up</Link></span></p>
      </form>

<<<<<<< HEAD:src/components/logIn.js
=======
      <NotificationContainer />
>>>>>>> 9565760dd096ae7e3e27cb89f59720e75c1459ed:src/components/login/logIn.js
    </div >
  );
}