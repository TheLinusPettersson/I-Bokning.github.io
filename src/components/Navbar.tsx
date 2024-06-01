import React from "react";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="navbar-title">Bokning</div>
      <div className="navbar-buttons">
        <div className="dropdown">
          <button className="dropbtn">
            <img
              src="/img/arrow.png"
              alt="drop-down-arrow"
              className="dropdown-arrow"
            />
            Bokningspolicy
          </button>
          <div className="dropdown-content">
            <a
              href="https://prismic-io.s3.amazonaws.com/ichalmers/8bf95160-4705-44d0-9999-4c5caf29af73_Fr%C3%A5n+2023-03-22_+I-Sektionens+Policyreglemente+.pdf#page=75"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sektionsbilen
            </a>
            <a
              href="https://prismic-io.s3.amazonaws.com/ichalmers/8bf95160-4705-44d0-9999-4c5caf29af73_Fr%C3%A5n+2023-03-22_+I-Sektionens+Policyreglemente+.pdf#page=31"
              target="_blank"
              rel="noopener noreferrer"
            >
              Högtalare
            </a>
            <a href="#">Golden-I</a>
          </div>
        </div>
        <button className="signin-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
