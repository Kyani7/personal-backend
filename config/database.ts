import mongoose from "mongoose";
import { config } from "./env";

const ConnectDb = async (): Promise<void> => {
  try {
    if (!config.mongoUri) {
      throw new Error("MONGO_URI is not defined in environment variables.");
    }
    if (config.mongoUri.includes("<YOUR_PASSWORD_HERE>")) {
      throw new Error("Please replace '<YOUR_PASSWORD_HERE>' in backend/.env with your actual MongoDB Atlas password.");
    }
    await mongoose.connect(config.mongoUri);
    console.log("Database connected successfully");
  } catch (ex: any) {
    console.error("Database connection failure:", ex.message || ex);
    if (ex.code === 8000 || ex.message?.includes("bad auth")) {
      console.error(
        "-> Please verify your MongoDB Atlas username/password in backend/.env"
      );
    }
    throw ex;
  }
};

export default ConnectDb;