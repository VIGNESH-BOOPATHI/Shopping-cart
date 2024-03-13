import React, { useState } from 'react';
import { IoCartSharp } from 'react-icons/io5';

function Navbar({ cartQuantity, cart, removeFromCart,total }) {
  const [showLinks, setShowLinks] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for cart popup

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCartClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

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
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                onClick={toggleDropdown}
              >
                Shop
              </a>
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
          <div className={`d-flex ${showLinks ? 'show' : ''}`}>
            <button className="btn btn-outline-dark" type="button" onClick={handleCartClick}>
              <IoCartSharp size={25} />
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {cartQuantity}
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* Render the popup if isPopupOpen is true */}
      {isPopupOpen && (
        <div className="cart-popup-overlay">
          <div className="cart-popup-container">
            <h1>Cart</h1>
            <hr></hr>
            {cart.length == 0 ? (
            <div><h3>No Items in Cart</h3></div>
          ) :(<>
            <ul className="list-group">
              {cart.map((product, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <div className="fw-bold">{product.name}</div>
                    <div>${product.price}</div>
                  </div>
                  <button onClick={() => removeFromCart(product)} className="btn btn-outline-danger">X</button>
                </li>
              ))}
            </ul>
              <h1>Total : ${total}</h1>
              </>)}
            
            <button onClick={closePopup} className="btn btn-outline-dark mt-3" id='CartX'>Close</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
