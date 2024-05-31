import React from "react";
import "../styles/Home.css";
import { Button } from "primereact/button";

function Home() {
  function handleSubmit() {
    //link to the grade distribution page
  }

  return (
    <div className="home-page">
      <div className="home-content">
        <h1> Picking Classes Just Got Easier </h1>
        <h3> Discover Official Grades From Professors Last Semester</h3>
        <div className="home-button">
          <Button
            onSubmit={handleSubmit}
            label="FIND YOUR SECTION"
            severity="primary"
            rounded
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
