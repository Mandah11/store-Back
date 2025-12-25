import { CreateStore } from "../resolvers/stores/create-store.js";
import { DeleteStore } from "../resolvers/stores/delete-store.js";
import { findIdStore } from "../resolvers/stores/findid-store.js";
import { getStore } from "../resolvers/stores/get-store.js";
import express from "express";
import { UpdateStore } from "../resolvers/stores/update-store.js";

export const stores = express.Router();

stores.get("/", getStore);
stores.get("/findId/:id", findIdStore);
stores.post("/", CreateStore);
stores.put("/", UpdateStore);
stores.delete("/", DeleteStore);
