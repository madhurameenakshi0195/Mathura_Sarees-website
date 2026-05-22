require('dotenv').config();

const express = require("express");
const cors = require("cors");
 
const db = require("./db");

const app = express();
 

 
 
 

app.use(cors());
app.use(express.json());
 
 

// PUT THE AI ROUTE HERE
 
// ROUTES
const productRoutes = require("./routes/products");
app.use("/api/products", productRoutes);

const paymentRoutes = require("./routes/payment");
app.use("/api/payment", paymentRoutes);
 
 
// START SERVER
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
  console.log(process.env.GEMINI_API_KEY);
  

});