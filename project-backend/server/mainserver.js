const express = require('express');
const axios = require('axios');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 5000;




const Query = require('./QueryModel')
// const Query = mongoose.model("Query", querySchema);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const allowedOrigins = ['http://localhost:3000',
                       'https://aapno-sathi.vercel.app' ]
// Enable CORS and JSON parsing middleware
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Define backend service URIs (which you can configure via environment variables)
const accomodationBackend = process.env.ACCOMODATION_BACKEND;
const foodBackend = process.env.FOOD_BACKEND;
const transportationBackend = process.env.TRANSPORTATION_BACKEND;
const touristBackend = process.env.TOURIST_BACKEND;

// Proxy Routes to individual backends

// Accomodation proxy
app.use('/api/pgs', (req, res) => {
  const path = req.path;
  const query = req.query;  // Capture query parameters (filters)

  axios({
    method: req.method,
    url: `${accomodationBackend}/api/pgs${path}`,
    data: req.body,
    params: query,  // Pass the query parameters (filters)
  })
  .then(response => res.json(response.data))
  .catch(error => {
    console.error("Accommodation Error:", error.message);
    res.status(500).send('Accommodation proxy error.');
  });
});



// Food proxy
app.use('/api/foods', (req, res) => {
  const path = req.originalUrl.replace('/api/foods', '');
  axios({
    method: req.method,
    url: `${foodBackend}/api/foods${path}`,
    data: req.body,
    params: req.query,
  })
  .then(response => res.json(response.data))
  .catch(error => {
    console.error("Food Error:");
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else if (error.request) {
      console.error("No response received from food backend.");
      res.status(500).send('Food backend did not respond.');
    } else {
      console.error("Axios error:", error.message);
      res.status(500).send('Food proxy error.');
    }
  });
});


// Transportation proxy
app.use('/api/buses', (req, res) => {
  const path = req.originalUrl.replace('/api/buses', '');
  axios({
    method: req.method,
    url: `${transportationBackend}/api/buses${path}`,
    data: req.body,
    params: req.query,
  })
  .then(response => res.json(response.data))
  .catch(error => {
    console.error("Bus Error:");
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else if (error.request) {
      console.error("No response received from bus backend.");
      res.status(500).send('Bus backend did not respond.');
    } else {
      console.error("Axios error:", error.message);
      res.status(500).send('Bus proxy error.');
    }
  });
});

// Tourist proxy
app.use('/api/places', (req, res) => {
  const path = req.originalUrl.replace('/api/places', '');  // Remove '/api/places' from the URL
  console.log(`Request URL: ${touristBackend}${path}`);  // Log the full request URL for debugging
  
  axios({
    method: req.method,
    url: `${touristBackend}${path}`, // Forward the request to places backend without the '/api/places'
    data: req.body,
    params: req.query,
  })
  .then(response => res.json(response.data))
  .catch(error => {
    console.error("Places Error:");
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else if (error.request) {
      console.error("No response received from places backend.");
      res.status(500).send('Places backend did not respond.');
    } else {
      console.error("Axios error:", error.message);
      res.status(500).send('Places proxy error.');
    }
  });
});

app.post("/api/query", async (req, res) => {
  const { firstname, lastname, email, message } = req.body;

  if (!firstname || !lastname || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const newQuery = new Query({ firstname, lastname, email, message });
    await newQuery.save();
    res.status(201).json({ message: "Query submitted successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save query." });
  }
});



app.listen(port, () => {
  console.log(`Backend API Gateway running on http://localhost:${port}`);
});
