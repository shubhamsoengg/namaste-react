import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export default function Header() {
  const [buttonName, setButtonName] = useState("Login");
  const changeBtnName = () => {
    buttonName === "Login" ? setButtonName("Logout") : setButtonName("Login");
  };
  return (
    <div className="header">
      <img src={LOGO_URL} alt="" className="logo" />
      <ul className="header-menu-items">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/about"> About Us </Link>
        </li>
        <li>
          <Link to="/contact"> Contact Us</Link>
        </li>
        <li>Cart</li>
        <button
          className="login"
          onClick={() => {
            changeBtnName();
          }}
        >
          {buttonName}
        </button>
      </ul>
    </div>
  );
}
