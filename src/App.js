import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import JsonFormatter from './components/JsonFormatter';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/json-formatter" element={<JsonFormatter />} />
            {/* Add other tools here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
