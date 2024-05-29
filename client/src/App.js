import React from "react";
import NavBar from "./components/NavBar";
import ClassList from "./components/ClassList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="nav-bar">
      <NavBar />
      <div className="class-list">
        <ClassList />
      </div>
    </div>
  );
}

export default App;
