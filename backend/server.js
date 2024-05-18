const express = require("express");

const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const Routes = require("./routes/workouts");
//middleware
app.use(express.json());

app.use("/api/workouts", Routes);

//connect to db
mongoose
  .connect(process.env.MONGO_URL)
  .then((data) => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to DB and listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// set up routes
//set up route handlers
