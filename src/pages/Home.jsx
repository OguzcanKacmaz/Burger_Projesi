import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <>
      <div className="main-home">
        <div className="order">
          <Link className="order-btn" to="/menu">
            Sipariş Ver
          </Link>
        </div>
      </div>
    </>
  );
}
