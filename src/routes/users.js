import { CreateUser } from "../resolvers/users/create-user.js";
import { DeleteUser } from "../resolvers/users/delete-user.js";
import { getUser } from "../resolvers/users/get-user.js";
import { getUsers } from "../resolvers/users/get-users.js";
import { UpdateUser } from "../resolvers/users/update-user.js";
import express from "express";
export const router = express.Router();

router.get("/", getUsers);
router.post("/", CreateUser);
router.put("/", UpdateUser);
router.delete("/", DeleteUser);
router.get("/me", getUser);
