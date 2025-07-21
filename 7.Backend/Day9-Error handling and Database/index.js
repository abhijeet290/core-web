const express = require("express");
const app = express();
const { Auth } = require("./middleware/auth");

// CRUD: Create, Read, Update, Delete

app.use(express.json());

// Database Array

const foodMenu = [
  { id: 1, food: "Margherita Pizza", category: "Italian", price: 250 },
  { id: 2, food: "Paneer Tikka", category: "Indian", price: 180 },
  { id: 3, food: "Sushi Roll", category: "Japanese", price: 350 },
  { id: 4, food: "Tacos", category: "Mexican", price: 220 },
  { id: 5, food: "Cheeseburger", category: "American", price: 200 },
  { id: 6, food: "Pad Thai", category: "Thai", price: 270 },
  { id: 7, food: "Falafel Wrap", category: "Middle Eastern", price: 190 },
  { id: 8, food: "Butter Chicken", category: "Indian", price: 300 },
  { id: 9, food: "Spaghetti Carbonara", category: "Italian", price: 280 },
  { id: 10, food: "Dim Sum", category: "Chinese", price: 240 },
  { id: 11, food: "Veggie Burrito", category: "Mexican", price: 210 },
  { id: 12, food: "Chicken Teriyaki", category: "Japanese", price: 310 },
  { id: 13, food: "Grilled Cheese", category: "American", price: 150 },
  { id: 14, food: "Tom Yum Soup", category: "Thai", price: 180 },
  { id: 15, food: "Shawarma Plate", category: "Middle Eastern", price: 260 },
  { id: 16, food: "Chole Bhature", category: "Indian", price: 160 },
  { id: 17, food: "Lasagna", category: "Italian", price: 290 },
  { id: 18, food: "Spring Rolls", category: "Chinese", price: 140 },
  { id: 19, food: "Quesadilla", category: "Mexican", price: 230 },
  { id: 20, food: "Miso Ramen", category: "Japanese", price: 330 },
];

// user food cart

const addToCart = [];

app.get("/food", (req, res) => {
  res.send(foodMenu);
});

// app.use("/admin", Auth);

app.post("/admin", Auth, (req, res) => {
  foodMenu.push(req.body);
  res.send("Item added successfully");
});

app.delete("/admin/:id", Auth, (req, res) => {
  const id = +req.params.id;
  const index = foodMenu.findIndex((item) => item.id === id);

  if (index === -1) {
    res.send("Item does not exist");
  } else {
    foodMenu.splice(index, 1);
    res.send("Item deleted successfully");
  }
});

app.patch("/admin", Auth, (req, res) => {
  const id = +req.body.id;

  const fooddata = foodMenu.find((item) => item.id === id);

  if (fooddata) {
    if (req.body.food) fooddata.food = req.body.food;
    if (req.body.category) fooddata.category = req.body.category;
    if (req.body.price) fooddata.price = req.body.price;
    res.send("Item updated successfully");
  } else {
    res.send("Iten does not exist");
  }
});

// cart

app.post("/user/:id", (req, res) => {
  const id = +req.params.id;
  const foodItem = foodMenu.find((item) => item.id === id);

  if (foodItem) {
    addToCart.push(foodItem);
    res.status(200).send("Item added successfully");
  } else {
    res.send("Item not available");
  }
});

app.delete("/user/:id", (req, res) => {
  try {
    const id = +req.params.id;

    const index = addToCart.findIndex((item) => item.id === id);

    if (index != -1) {
      addToCart.splice(index, 1);
      res.send("Item removed successfully");
    } else {
      res.send("Item is not in the cart");
    }
  } catch (err) {
    res.send(err);
  }
});

app.get("/user", (req, res) => {
  if (addToCart.length !== 0) {
    res.send(addToCart);
  } else {
    res.send("Cart is empty");
  }
});

// app.get('/dummy',(req,res)=>{

//   try {

//     JSON.parse('{"name":"Mohan"}')
//     res.send('hello')
//   } catch (error) {
//     throw new Error('Error')
//     res.send('error occured')
//   }
// })

app.listen(4000, () => {
  console.log(`Listening on port 4000`);
});
