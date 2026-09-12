import mongoose from "mongoose"

const ConnectDb = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Database connected successfully");

  } catch (ex) {
    console.log(ex)
    throw ex;
  }
}
export default ConnectDb;