import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbUrl = process.env.DB_URL;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected to MongoDB with Mongoose");
  } catch (error) {
    console.error("Mongoose Connection error:", error);
  }
};

export default connectToDatabase;
