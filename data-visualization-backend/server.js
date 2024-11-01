const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/DataVisualizationDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 20000, // 20 seconds
});
mongoose.set("debug", true);
// Define a schema for your data
const dataSchema = new mongoose.Schema({
  end_year: String,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number,
});

const DataInsights = mongoose.model("DataInsights", dataSchema);

// API endpoint to fetch data
app.get("/data", async (req, res) => {
  try {
    const data = await DataInsights.find();
    console.log("Fetched data:", data); // Log the fetched data
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/data/test", async (req, res) => {
  try {
    const data = await DataInsights.findOne(); // Get just one document
    console.log("Fetched single data:", data);
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Basic endpoint for testing
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
