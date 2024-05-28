import NavBar from "./components/NavBar";
import ClassList from "./components/ClassList";

function App() {
  /* need to bring both the input state and data state to 
  this parent directory in order to be able to filter it later*/
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
