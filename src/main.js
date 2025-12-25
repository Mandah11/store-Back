import "module-alias/register.js";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { router } from "./routes/users.js";
import { stores } from "./routes/stores.js";
import { storescategory } from "./routes/storesCategory.js";
import { ordered } from "./routes/storesOrder.js";

const app = express();
const port = 8000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/users", router);
app.use("/store", stores);
app.use("/storecategory", storescategory);
app.use("/order", ordered);

mongoose
  .connect(
    "mongodb+srv://otgonbayrenhmandah31_db_user:NNOgPbOTnTf6415V@cluster.cx01h2e.mongodb.net/"
  )
  .then(() => console.log("connected"));
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/users`);
});
