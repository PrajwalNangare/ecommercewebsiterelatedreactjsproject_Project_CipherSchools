import React, { useEffect, useState } from "react";

import "./App.css";

import Screens from "./screens";
import ReactDOM from "react-dom/client";
import {Router,Route,Routes,Link } from "react-router-dom";
function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log("cartItems: ", cartItems);
  }, [cartItems]);

  return (
    
    <div className="App">
      <Screens.Home
        cartItems={cartItems}
        updateCart={(cart) => setCartItems(cart)}
      />
    </div>

  );
}

export default App;