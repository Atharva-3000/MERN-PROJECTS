// const express = require("express");  can use this as well

//newer notation have to put "type":"module" in package.json to use this
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {} from "dotenv/config";
import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";
const app = express();

app.use(express.json()); //automatically converts the data received from the frontend into json
app.use(cors()); //Cross origin resource sharing
app.use("/auth",userRouter);
app.use("/recipes",recipesRouter);
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3001, () => console.log("Server has started"));
