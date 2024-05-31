import React from "react";
import "../styles/Home.css";
import { Button } from "primereact/button";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1> Picking Classes Just Got Easier </h1>
        <h3> Discover Official Grades From Professors Last Semester</h3>
        <div className="home-button">
          <NavLink to={"/ClassList"}>
            <Button label="FIND YOUR SECTION" severity="primary" rounded />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
