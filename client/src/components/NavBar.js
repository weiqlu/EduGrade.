import React from "react";
import "../styles/NavBar.css";
import { FaSearch } from "react-icons/fa";

function NavBar() {
  const [input, setInput] = React.useState("");

  // resets the search bar to empty after submitting
  function handleSubmit(event) {
    event.preventDefault();
    setInput("");
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
            onChange={(event) => setInput(event.target.value)}
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
