const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
// Middlewares

// import routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);



app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Connet to DB

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to DB!");
});

app.listen(3001, () => {
  console.log(`Example app listening on port ${3001}`);
});

// mongodb+srv://rest:Julshfr7Nm709Ab6@rest.gdxxw9b.mongodb.net/?retryWrites=true&w=majority
