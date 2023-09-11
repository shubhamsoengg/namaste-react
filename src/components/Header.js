import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export default function Header() {
  const [buttonName, setButtonName] = useState("Login");
  const changeBtnName = () => {
    buttonName === "Login" ? setButtonName("Logout") : setButtonName("Login");
  };
  return (
    <div className="header">
      <img src={LOGO_URL} alt="" className="logo" />
      <ul className="header-menu-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
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
