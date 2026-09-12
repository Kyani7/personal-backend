import dotenv from "dotenv";
dotenv.config();

import ConnectDb from "./config/database";
import app from "./app";
import { config } from "./config/env";

const PORT = config.port;

const startServer = async (): Promise<void> => {
  try {
    await ConnectDb();

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server due to database connection error:", error);
    process.exit(1);
  }
};

void startServer();