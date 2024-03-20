import "./App.css";
//import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from './Pages/Homepage.js';
import Applypage from './Pages/Applypage.js';
import AddUserpage from './Pages/AddUserpage.js';

import Header from './components/Header.js';

function App() {
  return(
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/apply" element={<Applypage />} />
          <Route path="/add" element={<AddUserpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
