import React from "react";

export default function Card({ burger }) {
  return (
    <>
      <div className="Card">
        <img src={burger.image} alt="" />
        <div className="card-content">
          <h2 className="card-title">{burger.name}</h2>
          <p className="card-description">{burger.Content}</p>
          <p className="card-price">{burger.price} ₺</p>
        </div>
      </div>
    </>
  );
}
