import express from "express"

const router = express.Router()

import {
  getAllMeals,
  getMeal,
  addMeal,
  updateMeal,
  deleteMeal,
} from "../controllers/meals.js"

router.get("/", getAllMeals)
router.post("/", addMeal)
router.get("/:id", getMeal)
router.delete("/:id", deleteMeal)
router.patch("/:id", updateMeal)

export default router
