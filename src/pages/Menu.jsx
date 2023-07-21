import React from "react";
import { Data } from "../helpers/Data";
import Card from "../components/Card";
import "../styles/Menu.css";

export default function Menu() {
  return (
    <>
      <div className="menu">
        <h1 className="menuTitle">Burgerlerimiz</h1>
        <div className="menuList">
          {Array.from({ length: 12 }, () => Data[0]).map((burger, index) => (
            <Card key={index} burger={burger} />
          ))}
        </div>
      </div>
    </>
  );
}
