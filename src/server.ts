import * as dotenv from "dotenv";
/* NODE MODULES IMPORTS */
import express from "express";
import mongoose from "mongoose";

/* PROJECT IMPORTS */
import { route } from "./routes";

/** .env variables */
dotenv.config();

const mongoConnectionURL = process.env.MONGOCONNECTION;

const app = express();

mongoose
  .connect(mongoConnectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.emit("DatabaseReady");
  })
  .catch((e) => console.log(e));

app.use(express.json());
app.use(route);

app.on("DatabaseReady", () => {
  app.listen(3333, () => console.log("server is running on port 3333!"));
});
