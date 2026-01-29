import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Cart = ({ products }) => {
  const [count, setCount] = useState(0);
  const [showItems, setShowItems] = useState(false);
  const navigate = useNavigate();
  console.log("cart mai data ", products);

  const singleCartData = (item) => {
    setCount(0); 
    setShowItems(true);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count - 1 <= 0) {
      setCount(0);
      setShowItems(false);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>

      {products.length === 0 ? (
        <div className="empty-cart-container">
          <p className="empty-cart-msg">
            No item in cart — go to Home and add items!!!
          </p>
          <button className="go-home-btn" onClick={() => navigate("/")}>
            Go to Home
          </button>
        </div>
      ) : (
        <div className="product-grid">
          {products.map((item, index) => (
            <div className="product-card" key={index}>
              <img src={item.image} alt={item.productName} />

              <div className="product-content">
                <p className="product-name">{item.productName}</p>
                <p className="product-price">₹ {item.productPrice}</p>
                <p className="product-description">{item.description}</p>
              
              <div style={{ padding: 20 }}>
                {!showItems && <button onClick={singleCartData}>Add</button>}

                {showItems && (
                  <div >
                    <button onClick={decrement}>-</button>
                    <span>{count}</span>
                    <button onClick={increment}>+</button>
                  </div>
                )}
              </div>
              
              </div>

              
            </div>
          ))}
        </div>
      )}

    
    </>
  );
};

export default Cart;
