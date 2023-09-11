import React from "react";
import { LOGO_URL } from "../utils/constants";

export default function Header() {
  return (
    <div className="header">
      <img src={LOGO_URL} alt="" className="logo" />
      <ul className="header-menu-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
}
