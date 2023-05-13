import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";

// import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Navbar/>
      <Home />
    </Router>
  );
}

export default App;
