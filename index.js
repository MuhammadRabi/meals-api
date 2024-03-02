import express from "express"
import connectDB from "./db/connect.js"
import meals from "./routes/meals.js"
import "dotenv/config"
import notFound from "./middleware/not-found.js"

const source = process.env.MONGO_URI
const app = express()

app.use(express.json())

//main route
app.use("/api/v1/meals", meals)

// not found route
app.use(notFound)

const startApp = async () => {
  try {
    await connectDB(source)
    app.listen(5000, () => {
      console.log("app is listening at port 5000...")
    })
  } catch (error) {
    console.log(error)
  }
}

startApp()
