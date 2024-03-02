import { Schema, model } from "mongoose"

const mealSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 25,
  },
  ingredients: String,
  cost: Boolean,
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const Meal = model("Meal", mealSchema)

export default Meal
