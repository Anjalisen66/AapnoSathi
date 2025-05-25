const express = require("express");
const router = express.Router();
const Food = require("../models/food"); 

const foodData = [
  {
    name: "The Plant Story",
    location: "Pratap Nagar",
    type: "restaurant",
    cost: 700,
    cuisine: "Multicuisine",
    specialty: "Lasagna , Pizza",
    foodType: "veg",
    image: "plant.png",
    dineIn: true,
    dineOut: true,
    takeaway: true,
    link:"https://www.zomato.com/jodhpur/the-plant-story-sardarpura/order",
  },
  {
    name: "White Earth",
    location: "PWD Colony",
    type: "restaurant",
    cost: 600,
    cuisine: "Multicuisine",
    specialty: "Pizza,Malai Kofta",
    foodType: "veg and non-veg",
    image: "white.png",
    dineIn: false,
    dineOut: true,
    takeaway: true,
    link:"https://www.zomato.com/jodhpur/white-earth-a-rooftop-restaurant-cafe-ratanada/order",
  },
  {
    name: "Café Frespresso and 360 wood fire pizzeria",
    location: "Circuit House Rd",
    type: "cafe",
    cost: 300,
    cuisine: "Fast Food",
    specialty: "Coffee , Pizza",
    foodType: "veg",
    image: "frespresso.png",
    dineIn: true,
    dineOut: false,
    takeaway: true,
    link:"https://www.zomato.com/jodhpur/cafe-frespresso-ratanada/order",
  },
  {
    name: "Janta Sweet Home",
    location: "Nai Sarak",
    type: "local",
    cost: 100,
    cuisine: "Snacks",
    specialty: "Mawa Kachori",
    foodType: "veg",
    image: "janta.png",
    dineIn: true,
    dineOut: false,
    takeaway: true,
    link:"https://www.zomato.com/jodhpur/janta-sweet-home-3-rawaton-ka-bass/order",
  },
  {
    name: "Indique",
    location: "Clock Tower",
    type: "restaurant",
    cost: 600,
    cuisine: "Mughlai",
    specialty: "Biryani",
    foodType: "non-veg",
    image: "indique.png",
    dineIn: true,
    dineOut: true,
    takeaway: true,
    link:"https://www.zomato.com/jodhpur/indique-rawaton-ka-bass/order",
  },
  {
    name: "Shaandar Restaurant",
    location: "Jalori Gate",
    type: "restaurant",
    cost: 350,
    cuisine: "Rajasthani",
    specialty: "Gulab Jamun Sabji",
    foodType: "veg",
    image: "shaandar.png",
    dineIn: true,
    dineOut: false,
    takeaway: true,
    link:"https://www.zomato.com/jodhpur/shandar-sweet-home-rawaton-ka-bass",
  },
  {
    name: "Gypsy Restaurant",
    location: "Sardarpura",
    type: "restaurant",
    cost: 450,
    cuisine: "Thali",
    specialty: "Rajasthani Thali",
    foodType: "veg",
    image: "gypsy.png",
    dineIn: true,
    dineOut: false,
    takeaway: true,
    link:"https://www.zomato.com/jodhpur/gypsy-sardarpura/order",
  },
  {
    name: "On The Rocks",
    location: "Ajit Bhawan",
    type: "restaurant",
    cost: 700,
    cuisine: "Continental",
    specialty: "Grilled Chicken",
    foodType: "non-veg",
    image: "otr.png",
    dineIn: true,
    dineOut: true,
    takeaway: true,
    link:"https://www.zomato.com/jodhpur/on-the-rocks-cantt-area/order",
  },
  {
    name: "The Laughing B Café",
    location: "Panch Batti",
    type: "cafe",
    cost: 300,
    cuisine: "Italian",
    specialty: "Pasta Alfredo",
    foodType: "veg",
    image: "laughingb.jpg",
    dineIn: true,
    dineOut: false,
    takeaway: true,
    link:"https://www.zomato.com/jodhpur/the-laughing-b-ratanada",
  },
  {
    name: "Chaturbhuj Rameshchand",
    location: "Inside Jalori Gate",
    type: "local",
    cost: 80,
    cuisine: "Snacks",
    specialty: "Gulab Jamun",
    foodType: "veg",
    image: "chaturbhuj.jpg",
    dineIn: false,
    dineOut: true,
    takeaway: true,
    link:"https://www.zomato.com/jodhpur/chaturbhuj-rameshchandra-kabir-nagar",
  },
  {
    name: "Highway Delight",
    location: "Pal Bypass Road",
    type: "dhaba",
    cost: 200,
    cuisine: "North Indian",
    specialty: "Tandoori Roti & Mix Veg",
    foodType: "veg",
    image: "highway.jpg",
    dineIn: true,
    dineOut: true,
    takeaway: true,
    link:"https://www.zomato.com/jodhpur/highway-delight-basni",
  },
  {
    name: "Stepwell Café",
    location: "Toorji Ka Jhalra",
    type: "cafe",
    cost: 320,
    cuisine: "Continental",
    specialty: "Avocado Toast",
    foodType: "veg",
    image: "stepwell.jpg",
    dineIn: true,
    dineOut: true,
    takeaway: true,
    link:"https://www.zomato.com/jodhpur/stepwell-cafe-rawaton-ka-bass/order",
  },
  {
    name: "Pokar Sweet Home",
    location: "Sardarpura",
    type: "local",
    cost: 90,
    cuisine: "Snacks",
    specialty: "Pyaaz Kachori",
    foodType: "veg",
    image: "pokar.jpg",
    dineIn: false,
    dineOut: true,
    takeaway: true,
    link:"https://www.zomato.com/jodhpur/pokar-sweet-home-1-sardarpura/order",
  },
  {
    name: "Maharaja bhog kitchen",
    location: "Paota",
    type: "restaurant",
    cost: 200,
    cuisine: "Indian",
    specialty: "Thali",
    foodType: "veg",
    image: "maharaja.jpg",
    dineIn: true,
    dineOut: false,
    takeaway: true,
    link:"https://www.zomato.com/jodhpur/maharaja-bhog-kitchen-lawaran/order",
  },
  {
    name: "Sankalp Restaurant",
    location: "Residency Rd",
    type: "restaurant",
    cost: 380,
    cuisine: "South Indian",
    specialty: "Rava Dosa",
    foodType: "veg",
    image: "sankalp.jpg",
    dineIn: true,
    dineOut: false,
    takeaway: true,
    link:"https://www.zomato.com/jodhpur/sankalp-sardarpura",
  },
  {
    name: "Shri Mishrilal Hotel",
    location: "Clock Tower",
    type: "restaurant",
    cost: 200,
    cuisine: "Snacks",
    specialty: "Makhaniya Lassi",
    foodType: "veg",
    image: "mishrilal.jpg",
    dineIn: true,
    dineOut: false,
    takeaway: true,
    link:"https://www.zomato.com/jodhpur/shri-mishrilal-hotel-rawaton-ka-bass/order",
  },
  {
    name: "Choudhary Namkeen",
    location: "Sardarpura",
    type: "local",
    cost: 200,
    cuisine: "Snacks",
    specialty: "Mirchi Bada",
    foodType: "veg",
    image: "choudhary.jpg",
    dineIn: false,
    dineOut: false,
    takeaway: true,
    link:"https://www.zomato.com/jodhpur/choudhary-namkeen-1-sardarpura/order",
  },
  {
    name: "Jhankar Choti Haveli",
    location: "Makarana Mohalla",
    type: "restaurant",
    cost: 400,
    cuisine: "Multicuisine",
    specialty: "Rajasthani Thali",
    foodType: "veg",
    image: "jhankar.jpg",
    dineIn: true,
    dineOut: true,
    takeaway: false,
    link:"https://www.zomato.com/jodhpur/jhankar-choti-haveli-kabir-nagar",
  },
  {
    name: "Indigo Restaurant",
    location: "Gulab Sagar",
    type: "restaurant",
    cost: 400,
    cuisine: "North Indian",
    specialty: "Laal Mas",
    foodType: "veg and non-veg",
    image: "indigo.jpg",
    dineIn: true,
    dineOut: true,
    takeaway: false,
    link:"https://www.zomato.com/jodhpur/indigo-restaurant-rawaton-ka-bass/order",
  },
  {
    name: "The Curry's",
    location: "Makarana Mohalla",
    type: "restaurant",
    cost: 400,
    cuisine: "North Indian",
    specialty: "Laal Mas",
    foodType: "veg and non-veg",
    image: "curry.jpg",
    dineIn: true,
    dineOut: true,
    takeaway: false,
    link:"https://www.zomato.com/jodhpur/the-currys-kabir-nagar/order",
  },
];

// API to populate food data
router.post("/populate", async (req, res) => {
  try {
    let added = 0;
    for (const food of foodData) {
      const exists = await Food.findOne(food); // Avoid duplicates
      if (!exists) {
        await Food.create(food);
        added++;
      }
    }

    if (added === 0) {
      return res.status(400).json({ message: "All food entries already exist." });
    }

    res.status(201).json({ message: `${added} food places added successfully!` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/foods", async (req, res) => {
  try {
    let query = {};

    if (req.query.type) query.type = req.query.type;
    if (req.query.maxCost) query.cost = { $lte: Number(req.query.maxCost) };
    if (req.query.foodType) query.foodType = req.query.foodType;
    if (req.query.dineIn) query.dineIn = req.query.dineIn === "true";
    if (req.query.takeaway) query.takeaway = req.query.takeaway === "true";

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const totalCount = await Food.countDocuments(query);
    const foods = await Food.find(query).skip(skip).limit(limit);

    res.json({
      data: foods,
      currentPage: page,
      totalPages: Math.ceil(totalCount / limit),
      totalCount,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
