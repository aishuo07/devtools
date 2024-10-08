import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Dev Tools Hub</h2>
      <ul>
        <li>
          <Link to="/json-formatter">JSON Formatter</Link>
        </li>
        {/* Add more tools here */}
      </ul>
    </div>
  );
}

export default Sidebar;
