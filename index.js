import connectToDatabase from "./config/db.js";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import todoRoute from "./routes/todoRoute.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/todo", todoRoute);

connectToDatabase()
  .then(() => {
    console.log("Connected to Mongodb compass");
  })
  .catch((error) => {
    console.error("Database Connection Failed", error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
