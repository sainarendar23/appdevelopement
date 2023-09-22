import React, { useState } from 'react';
import '../assetes/css/Home.css';
import { Link } from 'react-router-dom';


const Homepage = () => {
  return (
    <>
    <div className="homepage">
      <nav className="navbar1">
        {/* Add navbar content here */}
        <ul><li>Members</li>
          <li>Task</li>
          <li>Contact</li>
          <li>Feedback</li>
          {/* Add more links or content as needed */}
        </ul>
      </nav>
      <main className="content1">
        <h2 className="content-header1"></h2>
      </main>
    </div>
    </>
  );
};

export default Homepage;