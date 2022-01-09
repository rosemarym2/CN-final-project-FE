import React, { useContext, createContext, useState } from "react";
import { SignUp } from "./components/signup.js";
import { Home } from "./components/home.js";
import { LogIn } from "./components/logIn.js";
import { UserList } from "./components/personalList.js";
import { List } from "./components/publicList.js";
import { Profile } from "./components/profile.js";
import { Settings } from "./components/settings.js";
import { Category } from "./components/category.js";
import { NewList } from "./components/newList.js";
import { EditProfile } from "./components/editProfile.js";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/login">
            <LogIn authContext={authContext} />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
          <PrivateRoute path="/settings">
            <Settings />
          </PrivateRoute>
          <PrivateRoute path="/editProfile">
            <EditProfile />
          </PrivateRoute>
          <PrivateRoute path="/newList">
            <NewList />
          </PrivateRoute>
          <PrivateRoute path="/userList">
            <UserList />
          </PrivateRoute>
          <PrivateRoute path="/category/:handle">
            <Category />
          </PrivateRoute>
          <PrivateRoute path="/list/:handle">
            <List />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

const userAuth = {
  isAuthenticated: false,
  signin(cb) {
    userAuth.isAuthenticated = true;
    setTimeout(cb, 1000);
  },
  signout(cb) {
    userAuth.isAuthenticated = false;
    setTimeout(cb, 1000);
  }
};
const authContext = createContext();
export const useAuth = () => {
  return useContext(authContext);
}
const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();

  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}
const useProvideAuth = () => {

  const init = () => {
    const userId = localStorage.getItem("myId")
    if (userId) {
      return userId;
    } else {
      return null
    }
  }

  const [user, setUser] = useState(init());

  const signin = (cb, userId) => {
    return userAuth.signin(() => {
      setUser(userId);
      localStorage.setItem("myId", userId);
      cb();
    });
  };
  const signout = cb => {
    return userAuth.signout(() => {
      setUser(null);
      cb();
    });
  };
  return {
    user,
    signin,
    signout
  };
}

export default App;