import './App.css';
// import Navbar from "./components/Navbar";
// import Topbar from "./components/Topbar";
import { BrowserRouter as Router } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import Home from './pages';


function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
