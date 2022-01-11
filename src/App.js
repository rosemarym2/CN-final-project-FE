import React, { useContext, createContext, useState } from "react";
import { SignUp } from "./components/signup.js";
import { Home } from "./components//home/home";
import { LogIn } from "./components/logIn.js";
import { UserList } from "./components/personalList/personalList.js";
import { List } from "./components/publicList.js";
import { Landing } from "./components/landing.js";
import { Profile } from "./components/profile/profile.js";
import { Settings } from "./components/settings/settings.js";
import { Category } from "./components/category/category.js";
import { NewList } from "./components/newList.js";
import { EditProfile } from "./components/editProfile/editProfile.js";
import { About } from "./components/about/about.js";
import { Error404 } from "./components/404/404.js";
import { ComingSoon } from "./components/comingSoon/comingSoon.js"
import { BottomNav } from "./components/bottomNav/bottomNav.js";
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
          <PrivateRoute path="/profile/edit">
            <EditProfile />
          </PrivateRoute>
          <PrivateRoute path="/profile/lists/:id">
            <UserList />
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
          <PrivateRoute path="/settings">
            <Settings />
          </PrivateRoute>
          <PrivateRoute path="/lists/create">
            <NewList />
          </PrivateRoute>
          <PrivateRoute path="/category/:name">
            <Category />
          </PrivateRoute>
          <PrivateRoute path="/lists/:id">
            <List />
          </PrivateRoute>
          <PrivateRoute path="/error404">
            <Error404 />
          </PrivateRoute>
          <PrivateRoute path="/comingSoon">
            <ComingSoon />
          </PrivateRoute>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
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