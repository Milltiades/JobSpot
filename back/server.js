require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const jobsRoutes = require("./routes/jobsRoutes");
const userRoutes = require("./routes/userRoute");

// express app
const app = express();

// middleware
app.use(express.json());
// Enable CORS middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/jobs", jobsRoutes);
app.use("/api/user", userRoutes);

// connect to mongoDb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to mongoDb & listen to port:", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
