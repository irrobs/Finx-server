import express from "express";
import mongoose from "mongoose";
import User from "../schemas/userSchema.js";

const app = express();
const port = 3000;
const DB_URL = "mongodb://127.0.0.1:27017/finx";

//conecxão com banco de dados
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Successfully connected to DB");
  })
  .catch((err) => {
    console.log("Failed to connect to DB:", err);
  });

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
