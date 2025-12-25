import { CreateStoreserverorder } from "../resolvers/storeOrder/create-storeOrd.js";
import { DeleteStoreserverorder } from "../resolvers/storeOrder/delete-storeOrd.js";
import { getStoreserverorder } from "../resolvers/storeOrder/get-storeOrd.js";
import { UpdateStoreserverorder } from "../resolvers/storeOrder/update-storeOrd.js";
import express from "express";

export const ordered = express.Router();

ordered.get("/", getStoreserverorder);
ordered.post("/", CreateStoreserverorder);
ordered.put("/", UpdateStoreserverorder);
ordered.delete("/", DeleteStoreserverorder);
