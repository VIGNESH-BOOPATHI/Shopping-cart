import React from 'react';
import { MdStar } from 'react-icons/md';

// ProductList component
function ProductList({ products, addToCart, removeFromCart, cart }) {
  return (
    <section className="py-5">
      <div className="container-xl">
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {/* Iterate over products and render product cards */}
          {products.map((product) => (
            <div key={product.id} className="col mb-5">
              <div className="card h-100">
                {/* Display sale badge if product is on sale */}
                {product.sale && (
                  <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: '0.5rem', right: '0.5rem' }}
                  >
                    Sale
                  </div>
                )}
                {/* Product image */}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="Product"
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name */}
                    <h5 className="fw-bolder">{product.name}</h5>
                    {/* Display star icons if product is on sale */}
                    {product.sale && (
                      <div>
                        {[...Array(5)].map((_, index) => (
                          <MdStar key={index} style={{ color: 'gold' }} size={20} />
                        ))}
                      </div>
                    )}
                    {/* Product price */}
                    <p>{product.price}</p>
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {/* Add to cart or remove from cart button */}
                    {cart.includes(product.id) ? (
                      <button
                        className="btn btn-outline-danger mt-auto"
                        onClick={() => removeFromCart(product.id)}
                      >
                        Remove from Cart
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => addToCart(product.id)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;
