import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  singleController,
  updateCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

// Routes

// category Route
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// update Routes
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// getall Category
router.get("/get-category", categoryController);

// single Category
router.get("/single-category/:slug", singleController);

// delete Category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
