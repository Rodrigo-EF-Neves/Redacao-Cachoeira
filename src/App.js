import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";
import Columns from "./components/pages/Columns";
import News from "./components/pages/News";
import Login from './components/pages/Login'
import SignUp from "./components/pages/SignUp";

// import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Navbar/>
      <Container>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/columns" element={<Columns/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
