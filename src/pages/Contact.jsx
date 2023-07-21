import React from "react";
import "../styles/Contact.css";
import ContactImg from "../assets/contact_banner.jpg";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="contact">
      <div className="left-site">
        <img src={ContactImg} alt="" />
      </div>
      <div className="right-size">
        <h1>Bizimle İletişime Geçin</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Lütfen Adınızı ve Soyadınız Giriniz..."
          />
          <input
            type="email"
            name="email"
            placeholder="Lütfen Email Adresinizi Giriniz..."
          />
          <textarea
            name="message"
            cols="30"
            rows="4"
            placeholder="Lütfen Mesajınızı Giriniz..."
          ></textarea>
          <button>Gönder</button>
        </form>
      </div>
    </div>
  );
}
