import "./App.css";


// COMPONENTS
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

//REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;