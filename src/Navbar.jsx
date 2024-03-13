import React, { useState } from 'react';
import { IoCartSharp } from 'react-icons/io5';

// Navbar component
function Navbar({ cartQuantity }) {
  // State variables for toggling navbar links and dropdown
  const [showLinks, setShowLinks] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle function for showing/hiding links
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  // Toggle function for showing/hiding dropdown
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Render navbar JSX
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-xl">
        <a className="navbar-brand" href="#!">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleLinks}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            showLinks ? 'show' : ''
          }`}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            {/* Navbar links */}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#!">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                About
              </a>
            </li>
            <li className={`nav-item dropdown ${showDropdown ? 'show' : ''}`}>
              {/* Dropdown button */}
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                onClick={toggleDropdown}
              >
                Shop
              </a>
              {/* Dropdown menu */}
              <ul
                className={`dropdown-menu ${showDropdown ? 'show' : ''}`}
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#!">
                    All Products
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Popular Items
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {/* Cart button */}
          <form className={`d-flex ${showLinks ? 'show' : ''}`}>
            <button className="btn btn-outline-dark" type="submit">
              <IoCartSharp size={25} />
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {cartQuantity}
              </span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
