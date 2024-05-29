import React from "react";
import NavBar from "./components/NavBar";
import ClassList from "./components/ClassList";

function App() {
  // state for the search query to filter, passed down to NavBar and ClassList component
  const [search, setSearch] = React.useState("");

  return (
    <div className="nav-bar">
      <NavBar setSearch={setSearch} />
      <div className="class-list">
        <ClassList search={search} />
      </div>
    </div>
  );
}

export default App;
