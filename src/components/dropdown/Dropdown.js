import React from "react";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import "./Dropdown.css";

function Dropdown(props) {
  return (
    <div className="dd-cont">
      <ArrowDropUpIcon className="dd-top-arrow" />
      <div className="dd-items">
       <div class="dd-items">
         <div>Product Detail</div>
         <div>Shopping Cart</div>
         <div>Checkout</div>
         <div>Order Complete</div>
         <div>Wishlist</div>
       </div>
    </div>
   </div>
  );
}

export default Dropdown;