import { CreatedbStoreCategory } from "../resolvers/storeCategory/create-storeCategory.js";
import { DeletedbStoreCategory } from "../resolvers/storeCategory/delete-storeCategory.js";
import { getdbStoreCategory } from "../resolvers/storeCategory/get-storeCategory.js";
import { UpdateStoreCategory } from "../resolvers/storeCategory/update-storeCategory.js";
import express from "express";

export const storescategory = express.Router();

storescategory.get("/", getdbStoreCategory);
storescategory.post("/", CreatedbStoreCategory);
storescategory.put("/", UpdateStoreCategory);
storescategory.delete("/", DeletedbStoreCategory);
