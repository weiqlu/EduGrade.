import React from "react";
import "../styles/NavBar.css";

function NavBar() {
  const [input, setInput] = React.useState("");

  // resets the search bar to empty after the user submits
  function handleSubmit(event) {
    event.preventDefault();
    setInput("");
  }

  function handleChange(event) {
    const value = event.target.value;
    setInput(value);
    setSearch(value);
  }

  return (
    <nav className="nav">
      <a href="/" className="site-logo">
        EduGrade
      </a>
    </nav>
  );
}

export default NavBar;
