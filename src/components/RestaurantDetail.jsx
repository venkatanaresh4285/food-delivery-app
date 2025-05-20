import React from "react";

const sampleMenus = {
  1: ["Margherita Pizza", "Pepperoni Pizza", "Garlic Bread"],
  2: ["California Roll", "Tuna Sashimi", "Miso Soup"],
  3: ["Chicken Taco", "Beef Burrito", "Chips & Salsa"],
};

function RestaurantDetail({ restaurantId }) {
  const menu = sampleMenus[restaurantId] || [];

  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {menu.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantDetail;
