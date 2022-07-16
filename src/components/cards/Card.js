import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card-cont">
      <div className="card-img">
        <img src={props.item.img} alt=" card-img" />
      </div>
      <div className="card-info-cont">
        <h2>{props.item.title} </h2>
        <h2>{props.item.price}</h2>
        <h3>{props.item.description}</h3>
        <h3>{props.item.category}</h3>
        <h3>{props.item.rating}</h3>
      </div>
      <button
        className={props.isPresent ? "card-btn added-to-cart" : "card-btn"}
        onClick={() =>
          props.updateCart(props.item, props.isPresent ? "remove" : "add")
        }
      >
        {props.isPresent ? "Remove from cart" : "Add to cart"}
      </button>
    </div>
  );
}

export default Card;