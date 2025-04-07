import React from "react";
import "./menu.css";

const menuItems = [
  { name: "Coffee", price: "$2.50", image: "https://via.placeholder.com/120" },
  { name: "Espresso", price: "$3.00", image: "https://via.placeholder.com/120" },
  { name: "Latte", price: "$4.00", image: "https://via.placeholder.com/120" },
  { name: "Cappuccino", price: "$4.50", image: "https://via.placeholder.com/120" },
  { name: "Tea", price: "$2.00", image: "https://via.placeholder.com/120" },
  { name: "Pastries", price: "$3.50", image: "https://via.placeholder.com/120" },
];

const MenuPage: React.FC = () => {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Our Special Menu</h1>
      <p className="menu-description">Freshly brewed and baked daily for the best experience.</p>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <h2 className="menu-item-name">{item.name}</h2>
            <p className="menu-item-price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
