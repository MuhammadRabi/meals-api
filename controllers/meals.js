import Meal from "../models/meal.js"

export const getAllMeals = async (req, res) => {
  try {
    const meals = await Meal.find({})
    // if (!meals) {
    //   return res.status(404).json({ msg: "there is no meals yet!" })
    // }
    res.status(200).json({ meals })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export const getMeal = async (req, res) => {
  try {
    const { id: mealID } = req.params
    const meal = await Meal.findOne({ _id: mealID })
    if (!meal) {
      return res.status(404).json(`Meal with this id: ${mealID} is not found!`)
    }
    res.status(201).json({ meal })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export const addMeal = async (req, res) => {
  try {
    const addedMeal = await Meal.create(req.body)

    res.status(201).json({ addedMeal })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
export const deleteMeal = async (req, res) => {
  try {
    const { id: mealID } = req.params
    const meal = await Meal.findOneAndDelete({ _id: mealID })
    if (!meal) {
      return res.status(404).json(`Meal with this id: ${mealID} is not found!`)
    }
    res.status(200).json({ meal })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
export const updateMeal = async (req, res) => {
  try {
    const { id: mealID } = req.params
    const meal = await Meal.findOneAndUpdate({ _id: mealID }, req.body)
    if (!meal) {
      return res.status(404).json(`Meal with this id: ${mealID} is not found!`)
    }
    res.status(200).json({ meal })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
