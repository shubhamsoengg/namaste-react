import React from "react";

export default function Header() {
  return (
    <div className="header">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/004/964/938/original/restaurant-logo-on-a-white-background-free-video.jpg"
        alt=""
        className="logo"
      />
      <ul className="header-menu-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
}
