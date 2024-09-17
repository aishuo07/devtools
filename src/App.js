import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import JsonFormatter from "./components/JsonFormatter";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<h1>Welcome to DevTools Hub</h1>} />
            <Route path="/json-formatter" element={<JsonFormatter />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
