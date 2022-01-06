import logo from './logo.svg';
// import './App.css';
// import { SignUp } from "./components/signup.js";
import { List } from "./components/personalList.js";
import { useState } from "react";

function App() {
  const [link, setLink] = useState();

  const linkHandler = (id) => {
    setLink(id);
   
  }

  return (
    <div className="App">
      <button onClick={() => linkHandler("61d477b4862003014a05a09f")}>List One</button>
      <button onClick={() => linkHandler("61d47a3d78db3cca18488211")}>List Two</button>
      <button onClick={() => linkHandler("61d47b4b76a5312540841cc4")}>List Three</button>
      <button onClick={() => linkHandler("61d5d921fe4df48127fc14ee")}>List Four</button>
      <List link={link} />
    </div>
  );
}

export default App;
