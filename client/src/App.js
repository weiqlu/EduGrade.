import React from "react";
import NavBar from "./components/NavBar";
import ClassList from "./components/ClassList";
import Home from "./components/Home";
import Review from "./components/Review";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/ClassList" element={<ClassList />} />
        <Route exact path="/Review" element={<Review />} />
      </Route>
    </Routes>
  );
}

export default App;
