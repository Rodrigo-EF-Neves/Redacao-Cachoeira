import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";

// import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Navbar/>
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
