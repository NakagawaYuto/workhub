import Homepage from './Pages/Homepage.js';
import Applypage from './Pages/Applypage.js';
import "./App.css";
import Header from './components/Header.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return(
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/apply" element={<Applypage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
