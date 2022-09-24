import './App.css';
import {ComponenteNavbar} from "./components/Navbar/Navbar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
       <ComponenteNavbar/>
       <ItemListContainer greeting="CURSO REACT"/>  
    </div>
  );
}

export default App;
