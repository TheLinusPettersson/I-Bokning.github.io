import React from "react";
import "../styles/Menu.css";

const Menu: React.FC = () => {
  const handleMenuClick = (event: React.MouseEvent<HTMLLIElement>) => {
    document.querySelectorAll(".menu li").forEach((btn) => {
      btn.classList.remove("selected");
      btn.removeAttribute("style");
    });
    const target = event.target as HTMLLIElement;
    target.style.background = "white";
    target.classList.add("selected");
  };

  return (
    <ul className="menu">
      <li onClick={handleMenuClick}>&#128663; Sektionsbilen</li>
      <li onClick={handleMenuClick}>&#127870; Golden-I</li>
      <li onClick={handleMenuClick}>&#128266; Ljudsystemet</li>
      <li onClick={handleMenuClick}>&#128266; Sektionshögtalaren</li>
    </ul>
  );
};

export default Menu;
