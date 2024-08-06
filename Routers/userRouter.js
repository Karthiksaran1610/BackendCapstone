import express from "express";
import {
  deleteUser,
  updateUser,
  getUserListings,
  getUser,
} from "../Controllers/userController.js";
import { verifyToken } from "../Middleware/verifyToken.js";

const router = express.Router();

router.put("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/listings/:id", verifyToken, getUserListings);
router.get("/:id", getUser);

export default router;
