import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import Animal from "./models/animalModel.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

//! middle wares

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

//! Connecting Mongoose
mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((res) => {
    console.log(`Connected to mongodb`.cyan);
    //starting server
    app.listen(PORT, () => console.log(`server is running on ${PORT}`.rainbow));
  })
  .catch((err) => console.log(err));

//! routes
app.get("/", (req, res) => res.send(`API is running...`));

// GET all animals
app.get("/api/animals", (req, res) => {
  Animal.find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

//GET: get single animal based on id
app.get("/api/animals/:id", (req, res) => {
  const animalId = req.params.id;

  Animal.findById(animalId)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

//POST: add single animal to DB
app.post(`/api/animals`, (req, res) => {
  const animal = new Animal(req.body);
  console.log(animal);
  animal
    .save()
    .then((data) => res.json({ message: `New animal added` }))
    .catch((err) => console.log(err));
});
