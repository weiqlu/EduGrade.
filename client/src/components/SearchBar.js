import React from "react";

function SearchBar() {
  const [input, setInput] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search"> Search For a Class:</label>
      <input
        id="search"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      ></input>
    </form>
  );
}

export default SearchBar;
