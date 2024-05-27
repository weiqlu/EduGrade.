import NavBar from "./components/NavBar";
import ClassList from "./components/ClassList";

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
