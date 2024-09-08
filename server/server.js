const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect(
    "mongodb+srv://saijawadwar:jhRVAlvrpPFlZdqc@cluster0.edib5.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "https://localhost:5173/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "pragma",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
