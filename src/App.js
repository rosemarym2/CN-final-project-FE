import logo from './logo.svg';
import './App.css';
import { SignUp } from "./components/signup.js";
import { Home } from "./components/home.js";
import { LogIn } from "./components/logIn.js";
import { Profile } from "./components/profile.js";
import { Settings } from "./components/settings.js";
import { NewList } from "./components/newList.js";
import { EditProfile } from "./components/editProfile.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/editProfile">
          <EditProfile />
        </Route>
        <Route path="/newList">
          <NewList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;