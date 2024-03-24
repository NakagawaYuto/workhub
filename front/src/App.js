import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from './pages/HomePage.js';
import Applypage from './pages/ApplyPage.js';
import AddUserpage from './pages/AddUserPage.js';
import EditUserpage from './pages/EditUserPage.js';
import DeleteUserpage from './pages/DeleteUserPage.js';

import Header from './components/Header.js';

function App() {
  return(
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/post/:id" element={<Applypage />} />
          <Route path="/add" element={<AddUserpage />} />
          <Route path="/applicants/:id" element={<EditUserpage />} />
          <Route path="/delete" element={<DeleteUserpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
