// src/App.jsx
import { useState } from "react";
import "./App.css";

const restaurantsData = [
  {
    id: 1,
    name: "Chicken Palace",
    image:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=400&q=80",

    menu: [
      {
        id: 101,
        name: "Chicken Breads",
        price: 12.99,
        image:
          "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 102,
        name: "Fettuccine Alfredo",
        price: 13.99,
        image:
          "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 103,
        name: "Biryani",
        price: 11.99,
        image:
          "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 104,
        name: "Fried rice",
        price: 14.99,
        image:
          "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 105,
        name: "Lolly Pop",
        price: 13.49,
        image:
          "https://media.istockphoto.com/id/1336732090/photo/chicken-lollipops.jpg?s=1024x1024&w=is&k=20&c=Vci1BnEPZDHdLr58iftmEgJCfYPl6frpivAkHnD3X3Q=",
      },
      {
        id: 106,
        name: "Deserts",
        price: 15.49,
        image:
          "https://images.unsplash.com/photo-1702742322469-36315505728f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 106,
        name: "Chicken Kabab",
        price: 15.49,
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 106,
        name: "Chicken Pakodi",
        price: 15.49,
        image:
          "https://plus.unsplash.com/premium_photo-1692835633672-50919fdffb75?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: 2,
    name: "Burger King",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/1200px-Burger_King_2020.svg.png", // Burger
    menu: [
      {
        id: 201,
        name: "Classic Cheeseburger",
        price: 9.99,
        image:
          "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 202,
        name: "Bacon Burger",
        price: 10.99,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 203,
        name: "Veggie Burger",
        price: 8.99,
        image:
          "https://plus.unsplash.com/premium_photo-1664648063548-50808d58f061?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 204,
        name: "Double Patty Burger",
        price: 12.99,
        image:
          "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 205,
        name: "Chicken Burger",
        price: 9.49,
        image:
          "https://images.unsplash.com/photo-1637710847214-f91d99669e18?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 206,
        name: "Sweet Burger",
        price: 11.49,
        image:
          "https://plus.unsplash.com/premium_photo-1683121323997-37c33730ede8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 207,
        name: "Egg Burger",
        price: 11.49,
        image:
          "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 208,
        name: "Cheese Burger",
        price: 11.49,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: 3,
    name: "Sushi Central",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=400&q=80", // Sushi
    menu: [
      {
        id: 301,
        name: "California Roll",
        price: 8.99,
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 302,
        name: "Spicy Tuna Roll",
        price: 9.99,
        image:
          "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 303,
        name: "Chicken wings",
        price: 10.99,
        image:
          "https://plus.unsplash.com/premium_photo-1669742928112-19364a33b530?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 304,
        name: "Eel Roll",
        price: 11.49,
        image:
          "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 305,
        name: "Deserts",
        price: 9.49,
        image:
          "https://images.unsplash.com/photo-1662192515569-93905f7dac7b?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 306,
        name: "Sweets",
        price: 9.49,
        image:
          "https://media.istockphoto.com/id/1054228718/photo/indian-sweets-in-a-plate-includes-gulab-jamun-rasgulla-kaju-katli-morichoor-bundi-laddu.jpg?s=1024x1024&w=is&k=20&c=zuHus6q049UchR1NkljCmCehsB-Ty8k_k_oO8J08y0E=",
      },
      {
        id: 307,
        name: "Mutton Biryani",
        price: 9.49,
        image:
          "https://images.unsplash.com/photo-1701579231349-d7459c40919d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 308,
        name: "Pani Puri",
        price: 9.49,
        image:
          "https://media.istockphoto.com/id/1314329942/photo/goal-gappa-or-pani-puri.jpg?s=1024x1024&w=is&k=20&c=6l6_N-llXVhlg-yS_z9GcBwp4RAOvG9-DY-RZzlgzuY=",
      },
    ],
  },
  {
    id: 4,
    name: "Taco Town",
    image:
      "https://images.unsplash.com/photo-1727387562395-6be53e861975?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Tacos
    menu: [
      {
        id: 401,
        name: "Beef Taco",
        price: 3.99,
        image:
          "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 402,
        name: "Chicken Taco",
        price: 3.49,
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 403,
        name: "Veggie Taco",
        price: 3.29,
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 404,
        name: "Spcl Potato Taco",
        price: 4.49,
        image:
          "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 401,
        name: "KM Taco",
        price: 3.99,
        image:
          "https://images.pexels.com/photos/14883825/pexels-photo-14883825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 402,
        name: "Paneer Taco",
        price: 3.49,
        image:
          "https://images.pexels.com/photos/17321006/pexels-photo-17321006/free-photo-of-a-paper-box-with-food-on-top-of-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 403,
        name: "Fish Taco",
        price: 3.29,
        image:
          "https://images.pexels.com/photos/8448322/pexels-photo-8448322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 404,
        name: "Mutton Taco",
        price: 4.49,
        image:
          "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
  },
  {
    id: 5,
    name: "Pizza Plaza",
    image:
      "https://images.pexels.com/photos/10790638/pexels-photo-10790638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Pizza
    menu: [
      {
        id: 501,
        name: "Margherita",
        price: 11.99,
        image:
          "https://images.pexels.com/photos/19968430/pexels-photo-19968430/free-photo-of-pizzas-and-silverware.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 502,
        name: "Pepperoni",
        price: 13.99,
        image:
          "https://images.pexels.com/photos/263116/pexels-photo-263116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 503,
        name: "BBQ Chicken",
        price: 14.99,
        image:
          "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 504,
        name: "Hawaiian",
        price: 12.99,
        image:
          "https://images.pexels.com/photos/4828105/pexels-photo-4828105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 501,
        name: "Tomato Pizza",
        price: 9.99,
        image:
          "https://media.istockphoto.com/id/153444470/photo/pizza.jpg?s=1024x1024&w=is&k=20&c=TYRIpKiWvR0aKKBspWjesTaI-H71F8Gdd1dH5kE_qao=",
      },
      {
        id: 502,
        name: "Greek Pizza",
        price: 10.99,
        image:
          "https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 503,
        name: "Slicing Pizza",
        price: 11.99,
        image:
          "https://images.pexels.com/photos/845808/pexels-photo-845808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 504,
        name: "Chicken Pizza",
        price: 22.99,
        image:
          "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
  },
  {
    id: 1,
    name: "Mehfil Restaurant",
    image:
      "https://content3.jdmagicbox.com/v2/comp/hyderabad/i4/040pxx40.xx40.120220141453.n7i4/catalogue/mehfil-restaurant-attapur-hyderabad-home-delivery-restaurants-49zkq.jpg",
    menu: [
      {
        id: 101,
        name: "Chicken Biryani",
        price: 12.99,
        image:
          "https://images.pexels.com/photos/16020573/pexels-photo-16020573/free-photo-of-rice-and-chicken-meal-on-the-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 102,
        name: "Mutton Biryani",
        price: 13.99,
        image:
          "https://images.pexels.com/photos/18698240/pexels-photo-18698240/free-photo-of-food-photography.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 103,
        name: "Chilly Chicken",
        price: 11.99,
        image:
          "https://media.istockphoto.com/id/464505078/photo/szechuan-chicken-table.jpg?s=1024x1024&w=is&k=20&c=tMUofMlIlnkkOl1Uwnkq9wgLYnBwck--FHkJ6sZxkh8=",
      },
      {
        id: 104,
        name: "Chicken Lollipop",
        price: 14.99,
        image:
          "https://media.istockphoto.com/id/1091608418/photo/szechuan-chicken-which-is-a-popular-indo-chinese-non-vegetarian-recipe-served-in-a-plate-with.jpg?s=1024x1024&w=is&k=20&c=lXBz5DdI5lQJWMErxGUvVYeRdydad42vcP_6pyWHOwc=",
      },
      {
        id: 101,
        name: "Chicken Fried Rice",
        price: 11.99,
        image:
          "https://media.istockphoto.com/id/1371229449/photo/chicken-fried-rice-in-pan-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=1D_UtSg3vFzgd6xWC2c5VQrG8cvaHYSHau6bsLHBEk8=",
      },
      {
        id: 102,
        name: "Egg Biryani",
        price: 10.99,
        image:
          "https://images.pexels.com/photos/8992927/pexels-photo-8992927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 103,
        name: "Rice with chicken",
        price: 8.99,
        image:
          "https://images.pexels.com/photos/11912788/pexels-photo-11912788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 104,
        name: "Chicken Roll",
        price: 10.99,
        image:
          "https://media.istockphoto.com/id/175534964/photo/mexican-chicken-fajita.jpg?s=1024x1024&w=is&k=20&c=mI8QdiRk-omnV0yFzL2hEuuSA57GK90wYzzzxqLkwaw=",
      },
    ],
  },
  {
    id: 2,
    name: "Barbeque Nation",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYWYSsswAMfc1xGX8JPHHit9zNFZFPl4BaQ&s", // Burger
    menu: [
      {
        id: 201,
        name: "Chicken Grill",
        price: 9.99,
        image:
          "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 202,
        name: "Veg Grills",
        price: 8.99,
        image:
          "https://images.pexels.com/photos/53148/shish-kebab-meat-skewer-vegetable-skewer-meat-products-53148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 203,
        name: "Fish Grill",
        price: 8.99,
        image:
          "https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 204,
        name: "Prawns ",
        price: 12.99,
        image:
          "https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 201,
        name: "Combo Grills",
        price: 55.99,
        image:
          "https://images.pexels.com/photos/2165159/pexels-photo-2165159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 202,
        name: "Veg Combo",
        price: 25.99,
        image:
          "https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 203,
        name: "Food Combo",
        price: 15.99,
        image:
          "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 204,
        name: "Mutton Grill",
        price: 22.99,
        image:
          "https://images.pexels.com/photos/604660/pexels-photo-604660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
  },
  {
    id: 3,
    name: "Gismath Jail mandhi",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJK3CFz8-SUvGXaeKh54K60TRhUV89tSIIeQ&s",
    menu: [
      {
        id: 301,
        name: "Large mandhi",
        price: 15.99,
        image:
          "https://images.pexels.com/photos/18698264/pexels-photo-18698264/free-photo-of-food-photography.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 302,
        name: "Combo Pack",
        price: 60.99,
        image:
          "https://images.pexels.com/photos/30119016/pexels-photo-30119016/free-photo-of-middle-eastern-feast-with-diverse-dishes-in-vancouver.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: 303,
        name: "Chicken biryani",
        price: 10.99,
        image:
          "https://images.pexels.com/photos/7426867/pexels-photo-7426867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 304,
        name: "Starters Combo",
        price: 11.49,
        image:
          "https://images.pexels.com/photos/17050759/pexels-photo-17050759/free-photo-of-curry-meat-based-dishes-served-on-white-plates.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 301,
        name: "Tomato Rice",
        price: 15.99,
        image:
          "https://images.pexels.com/photos/5410401/pexels-photo-5410401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 302,
        name: "Fruits",
        price: 11.99,
        image:
          "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 303,
        name: "Chicken curry",
        price: 8.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoZ5W-35XkYg4k-G8V_HJ9UvZ3Ew774xnfyQ&s",
      },
      {
        id: 304,
        name: "Mutton mandi",
        price: 11.49,
        image:
          "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/63dd25d3227cb3001dcfc78e.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Pizza Hut",
    image:
      "https://1000logos.net/wp-content/uploads/2017/05/Pizza-Hut-Logo-1999.jpg",
    menu: [
      {
        id: 401,
        name: "Starters",
        price: 8.99,
        image:
          "https://images.pexels.com/photos/18698222/pexels-photo-18698222/free-photo-of-food-photography.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 402,
        name: "Chicken Taco",
        price: 10.49,
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 403,
        name: "Veggie Taco",
        price: 8.29,
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 404,
        name: "Fish Taco",
        price: 9.49,
        image:
          "https://c.ndtvimg.com/2020-01/op8grfc_fish_625x300_11_January_20.jpg",
      },
      {
        id: 401,
        name: "Special biryani",
        price: 11.99,
        image:
          "https://i.ytimg.com/vi/5lDMzudRT2k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBWLF4kaVRbM_qLKXpPjU5VXDgzKA",
      },
      {
        id: 402,
        name: "Family Pack Biryani",
        price: 30.49,
        image:
          "https://b.zmtcdn.com/data/dish_photos/95e/9a70e9914fdbe6f6547fdb9d9b3c995e.jpg",
      },
      {
        id: 403,
        name: "Mutton Family Pack",
        price: 3.29,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfrsfaYtxkq0IVHjqZq9PkDHiU-_ify55sbg&s",
      },
      {
        id: 404,
        name: "Double Cheese pizza",
        price: 4.49,
        image:
          "https://parcelkaro.in/wp-content/uploads/2023/01/special-pizza.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Platform 65",
    image: "https://platform65.in/wp-content/uploads/2023/12/6-2.jpg", // Pizza
    menu: [
      {
        id: 501,
        name: "Chicken Biryani",
        price: 11.99,
        image:
          "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg",
      },
      {
        id: 502,
        name: "Family Pack Biryani",
        price: 13.99,
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/1a/dd/05/cf/hyderabadi-chicken-biryani.jpg",
      },
      {
        id: 503,
        name: "Kunda Biryani",
        price: 14.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlY7WH5iic7hS3jlGKvPxmixgudm_Ovkoxng&s",
      },
      {
        id: 504,
        name: "Veg Biryani",
        price: 12.99,
        image: "https://i.ytimg.com/vi/JqP4wSWsYr4/maxresdefault.jpg",
      },
      {
        id: 505,
        name: "Mutton Biryani",
        price: 10.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTfDqGZcUnKTQKsQn4CFzY9S54flVrZeboGQ&s",
      },
      {
        id: 506,
        name: "Mutton Family Biryani",
        price: 7.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQERROJY2Xi1qZf17ffsbeejqR7Pnmpr7bjHg&s",
      },
      {
        id: 503,
        name: "Chicken Starters",
        price: 15.89,
        image: "https://i.ytimg.com/vi/iwQ9HI9jrkY/maxresdefault.jpg",
      },
      {
        id: 504,
        name: "Veg starters",
        price: 12.99,
        image:
          "https://assets.zeezest.com/blogs/PROD_Vegetarian%20starters_1691749961064.jpg",
      },
    ],
  },
  {
    id: 1,
    name: "Paradise",
    image:
      "https://i0.wp.com/travelmax.in/wp-content/uploads/2023/06/1.-Paradise-Biryani.jpg?ssl=1",
    menu: [
      {
        id: 101,
        name: "Chicken Breads",
        price: 12.99,
        image:
          "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 102,
        name: "Fettuccine Alfredo",
        price: 13.99,
        image:
          "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 103,
        name: "Biryani",
        price: 11.99,
        image:
          "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 104,
        name: "Fried rice",
        price: 14.99,
        image:
          "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 105,
        name: "Lolly Pop",
        price: 13.49,
        image:
          "https://media.istockphoto.com/id/1336732090/photo/chicken-lollipops.jpg?s=1024x1024&w=is&k=20&c=Vci1BnEPZDHdLr58iftmEgJCfYPl6frpivAkHnD3X3Q=",
      },
      {
        id: 106,
        name: "Deserts",
        price: 15.49,
        image:
          "https://images.unsplash.com/photo-1702742322469-36315505728f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 105,
        name: "Chicken Rolls",
        price: 13.49,
        image:
          "https://bakewithzoha.com/wp-content/uploads/2024/03/chicken-tikka-paratha-rolls-featured.jpg",
      },
      {
        id: 106,
        name: "Chicken Noodles",
        price: 15.49,
        image:
          "https://www.allrecipes.com/thmb/q10RoiEe7UfjS6sBcjG3x7A8RPc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8693474_SpicySoyNoodlesWithChickenNicole2x1-482abbb365ca4fa0aa1d56da384c1b4b.jpg",
      },
    ],
  },
  {
    id: 1,
    name: "MumTaj Restaurant",
    image:
      "https://b.zmtcdn.com/data/pictures/6/20232566/8bac305e14dc0b94496725d076482e24.jpg?fit=around|960:500&crop=960:500;*,*", // Pasta dish
    menu: [
      {
        id: 101,
        name: "Chicken Breads",
        price: 12.99,
        image:
          "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 102,
        name: "Fettuccine Alfredo",
        price: 13.99,
        image:
          "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 103,
        name: "Biryani",
        price: 11.99,
        image:
          "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 104,
        name: "Fried rice",
        price: 14.99,
        image:
          "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 105,
        name: "Lolly Pop",
        price: 13.49,
        image:
          "https://media.istockphoto.com/id/1336732090/photo/chicken-lollipops.jpg?s=1024x1024&w=is&k=20&c=Vci1BnEPZDHdLr58iftmEgJCfYPl6frpivAkHnD3X3Q=",
      },
      {
        id: 106,
        name: "Deserts",
        price: 15.49,
        image:
          "https://images.unsplash.com/photo-1702742322469-36315505728f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 106,
        name: "Family Pack",
        price: 16.49,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJxOrQCxtqPbR1KHqtT2qmma4YFfaUdjv9rw&s",
      },
      {
        id: 106,
        name: "Mutton Biryani",
        price: 13.49,
        image:
          "https://www.awesomecuisine.com/wp-content/uploads/2012/11/Chettinad-Mutton-Biryani.jpg",
      },
    ],
  },
];

function Navbar({ onShow }) {
  return (
    <nav className="navbar">
      <h1 className="nav-logo">TastyTrack</h1>
      <div className="nav-links">
        <button onClick={() => onShow("home")}>Home</button>
        <button onClick={() => onShow("restaurants")}>Restaurants</button>
        <button onClick={() => onShow("cart")}>Cart</button>
      </div>
    </nav>
  );
}

function RestaurantList({ restaurants, onSelectRestaurant }) {
  return (
    <div>
      <h2>Restaurants</h2>
      <ul className="restaurant-list">
        {restaurants.map((r) => (
          <li
            key={r.id}
            onClick={() => onSelectRestaurant(r)}
            className="restaurant-item"
          >
            <img src={r.image} alt={r.name} className="restaurant-image" />
            <div>{r.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Menu({ restaurant, onAdd }) {
  return (
    <div>
      <h2>Menu - {restaurant.name}</h2>
      <ul className="menu-list">
        {restaurant.menu.map((item) => (
          <li key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-image" />
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
            <button onClick={() => onAdd(item)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
function Cart({ cartItems, onRemove }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              {item.name} x {item.quantity} = $
              {(item.price * item.quantity).toFixed(2)}
              <button onClick={() => onRemove(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

function App() {
  const [view, setView] = useState("home"); // 'home', 'restaurants', 'cart'
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [cart, setCart] = useState([]);

  function handleAddToCart(item) {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === item.id);
      if (exist) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  }

  function handleRemoveFromCart(item) {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === item.id);
      if (exist.quantity === 1) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
    });
  }
  function ReviewList({ reviews }) {
    return (
      <div className="reviews">
        <h4>Reviews:</h4>
        {reviews?.length ? (
          <ul>
            {reviews.map((rev, idx) => (
              <li key={idx}>
                <strong>{rev.user}</strong> ({rev.rating}/5): {rev.comment}
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    );
  }

  return (
    <>
      <Navbar onShow={setView} />
      <main className="main-content">
        {view === "home" && (
          <div className="homepage">
            <h2>Welcome to TastyTrack!</h2>
            <img
              src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Delicious food"
              className="homepage-image"
            />
            <p className="quote">
              "Good food is the foundation of genuine happiness."
            </p>
            <p>
              Select <strong>Restaurants</strong> from the menu above to start
              your delicious journey!
            </p>
          </div>
        )}

        {view === "restaurants" && (
          <>
            {!selectedRestaurant ? (
              <RestaurantList
                restaurants={restaurantsData}
                onSelectRestaurant={setSelectedRestaurant}
              />
            ) : (
              <>
                <button onClick={() => setSelectedRestaurant(null)}>
                  Back to Restaurants
                </button>
                <Menu restaurant={selectedRestaurant} onAdd={handleAddToCart} />
              </>
            )}
          </>
        )}
        {view === "cart" && (
          <Cart cartItems={cart} onRemove={handleRemoveFromCart} />
        )}
      </main>
    </>
  );
}

export default App;
