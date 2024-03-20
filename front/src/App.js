import "./App.css";
//import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from './pages/HomePage.js';
import Applypage from './pages/ApplyPage.js';
import AddUserpage from './pages/AddUserPage.js';

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
