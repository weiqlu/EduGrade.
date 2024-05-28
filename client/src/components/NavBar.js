import React from "react";
import "../styles/NavBar.css";
import { FaSearch } from "react-icons/fa";

function NavBar({ setSearch }) {
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
      <form onSubmit={handleSubmit} className="search-form">
        <div className="input-container">
          <input
            id="search"
            type="text"
            value={input}
            placeholder="Search..."
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </div>
      </form>
    </nav>
  );
}

export default NavBar;
