import React from "react";

function RestaurantList({ onSelect }) {
  const restaurantsData = [
    {
      id: 1,
      name: "Pasta Palace",
      menu: [
        { id: 101, name: "Spaghetti Carbonara", price: 12.99 },
        { id: 102, name: "Fettuccine Alfredo", price: 13.99 },
        { id: 103, name: "Penne Arrabiata", price: 11.99 },
        { id: 104, name: "Lasagna", price: 14.99 },
        { id: 105, name: "Ravioli", price: 13.49 },
      ],
    },
    {
      id: 2,
      name: "Burger Barn",
      menu: [
        { id: 201, name: "Classic Cheeseburger", price: 9.99 },
        { id: 202, name: "Bacon Burger", price: 10.99 },
        { id: 203, name: "Veggie Burger", price: 8.99 },
        { id: 204, name: "Double Patty Burger", price: 12.99 },
        { id: 205, name: "Chicken Burger", price: 9.49 },
      ],
    },
    {
      id: 3,
      name: "Sushi Central",
      menu: [
        { id: 301, name: "California Roll", price: 8.99 },
        { id: 302, name: "Spicy Tuna Roll", price: 9.99 },
        { id: 303, name: "Salmon Nigiri", price: 10.99 },
        { id: 304, name: "Eel Roll", price: 11.49 },
        { id: 305, name: "Tempura Roll", price: 9.49 },
      ],
    },
    {
      id: 4,
      name: "Taco Town",
      menu: [
        { id: 401, name: "Beef Taco", price: 3.99 },
        { id: 402, name: "Chicken Taco", price: 3.49 },
        { id: 403, name: "Veggie Taco", price: 3.29 },
        { id: 404, name: "Fish Taco", price: 4.49 },
        { id: 405, name: "Shrimp Taco", price: 4.99 },
      ],
    },
    {
      id: 5,
      name: "Pizza Plaza",
      menu: [
        { id: 501, name: "Margherita", price: 11.99 },
        { id: 502, name: "Pepperoni", price: 13.99 },
        { id: 503, name: "BBQ Chicken", price: 14.99 },
        { id: 504, name: "Hawaiian", price: 12.99 },
        { id: 505, name: "Veggie Supreme", price: 13.49 },
      ],
    },
    {
      id: 6,
      name: "Curry Corner",
      menu: [
        { id: 601, name: "Butter Chicken", price: 10.99 },
        { id: 602, name: "Paneer Tikka", price: 9.99 },
        { id: 603, name: "Lamb Vindaloo", price: 12.99 },
        { id: 604, name: "Chana Masala", price: 8.49 },
        { id: 605, name: "Naan Bread", price: 2.99 },
      ],
    },
    {
      id: 7,
      name: "Salad Station",
      menu: [
        { id: 701, name: "Caesar Salad", price: 7.99 },
        { id: 702, name: "Greek Salad", price: 7.49 },
        { id: 703, name: "Cobb Salad", price: 8.99 },
        { id: 704, name: "Garden Salad", price: 6.99 },
        { id: 705, name: "Kale Salad", price: 7.99 },
      ],
    },
    {
      id: 8,
      name: "BBQ Barn",
      menu: [
        { id: 801, name: "Pulled Pork", price: 11.99 },
        { id: 802, name: "BBQ Ribs", price: 14.99 },
        { id: 803, name: "Brisket", price: 13.99 },
        { id: 804, name: "Grilled Chicken", price: 10.49 },
        { id: 805, name: "Cornbread", price: 3.49 },
      ],
    },
  ];

  return (
    <div>
      <h3>Restaurants</h3>
      <ul>
        {restaurants.map((restaurant) => (
          <li
            key={restaurant.id}
            onClick={() => onSelect(restaurant.id)}
            style={{ cursor: "pointer", marginBottom: "0.5rem" }}
          >
            {restaurant.name} - {restaurant.cuisine}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantList;
