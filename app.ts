import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { config } from './config/env';
import { requestLogger } from './middlewares/logger';
import { errorHandler } from './middlewares/errorHandler';
import routes from './routes';

const app = express();

// Middlewares
app.use(helmet());
app.use(cors({ origin: config.corsOrigin, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

// API Routes
app.use('/api', routes);

// 404 Handler
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint Not Found',
  });
});

// Central Error Handler
app.use(errorHandler);

export default app;
