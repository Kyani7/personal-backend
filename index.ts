import ConnectDb from "./config/database";
import app from "./app"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT

const startServer = async (): Promise<void> => {
  try {
    await ConnectDb();

    app.listen(PORT, () => {
      console.log(`Server Start:${PORT}`)
    })
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
};

void startServer();