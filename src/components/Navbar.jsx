import React from "react";
import BurgerLogo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="main">
        <img src={BurgerLogo} alt="" />
        <div className="nav-items">
          <NavLink to="/">Ana Sayfa</NavLink>
          <NavLink to="/menu">Menuler</NavLink>
          <NavLink to="/about">Hakkımızda</NavLink>
          <NavLink to="/contact">İletişim</NavLink>
        </div>
      </div>
    </div>
  );
}
