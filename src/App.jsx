// App.jsx

import React, { useState } from 'react';
import './App.css'; // Importing custom styles
import '/node_modules/bootstrap/dist/css/bootstrap.css'; // Importing Bootstrap CSS

import Navbar from './Navbar'; // Importing Navbar component
import ProductList from './ProductList'; // Importing ProductList component

// Sample product data
const products = [
  { id: 1, name: 'Fancy Product', price:   80.00},
  { id: 2, name: 'Special Item', price: 18.00, sale: true },
  { id: 3, name: 'Sale Item', price: 25.00, sale: true },
  { id: 4, name: 'Popular Item', price: 40.00 },
  { id: 5, name: 'Sale Item', price: 25.00, sale: true },
  { id: 6, name: 'Fancy Product', price: 280.00 },
  { id: 7, name: 'Special Item', price: 18.00, sale: true },
  { id: 8, name: 'Popular Item', price: 40.00 },
];

function App() {
  // State variables for managing cart and cart quantity
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  // Function to add a product to the cart
  const addToCart = (productId) => {
    if (!cart.includes(productId)) {
      setCart([...cart, productId]);
      setCartQuantity(cartQuantity + 1);
      setTotal(total + productId.price);
    }
  };

  // Function to remove a product from the cart
  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
    setCartQuantity(cartQuantity - 1);
    setTotal(total - product.price);
  };

  // Render the JSX for the App component
  return (
    <>
      {/* Navbar component */}
      <Navbar cartQuantity={cartQuantity}
       cart={cart}
       removeFromCart={removeFromCart}
       total={total}/>
      {/* Header component */}
      <Header />
      {/* ProductList component */}
      <ProductList
        products={products}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cart={cart}
      />
      {/* Footer component */}
      <Footer />
    </>
  );
}

// Header component
function Header() {
  // Render header JSX
  return (
    <header className="bg-dark py-5 header">
      <div>
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Shop in style</h1>
          <p className="lead fw-normal text-white-50 mb-0">
            With this shop homepage template
          </p>
        </div>
      </div>
    </header>
  );
}

// Footer component
function Footer() {
  // Render footer JSX
  return (
    <footer className="py-5 bg-dark">
      <div className="container-xl">
        <p className="m-0 text-center text-white">
          Copyright © Your Website 2023
        </p>
      </div>
    </footer>
  );
}

export default App;
