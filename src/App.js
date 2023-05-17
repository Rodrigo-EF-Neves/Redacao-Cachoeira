import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";
import Columns from "./components/pages/Columns";

// import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Navbar/>
      <Container>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/columns" element={<Columns/>} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
