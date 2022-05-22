import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function App() {
  return (
     <Router>
   <Navbar expand="lg">
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">    
       <NavLink to={"/"}  className="nav-link">Home</NavLink>
       <NavLink  to={"/contact"}  className="nav-link">Contact</NavLink>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
     </Routes>
   </Router>
  );
}

export default App;
