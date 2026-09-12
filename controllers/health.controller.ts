import { Request, Response } from 'express';

export const getHealthStatus = (_req: Request, res: Response): void => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: 'himaaus-backend',
  });
};
