import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/ >
        <main> Hello </main>
    </Router>
  );
}

export default App;
