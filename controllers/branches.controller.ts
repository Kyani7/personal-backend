import { Request, Response } from 'express';
import { Branch } from '../types';

const mockBranches: Branch[] = [
  {
    id: '1',
    name: 'Kathmandu Main Branch',
    location: 'Kathmandu',
    address: 'Putalisadak, Kathmandu',
    phone: '+977-1-4XXXXXX',
    email: 'ktm@himaaus.com',
    coordinates: { lat: 27.7172, lng: 85.3240 },
  },
  {
    id: '2',
    name: 'Pokhara Regional Branch',
    location: 'Pokhara',
    address: 'New Road, Pokhara',
    phone: '+977-61-5XXXXX',
    email: 'pkr@himaaus.com',
    coordinates: { lat: 28.2096, lng: 83.9856 },
  },
];

export const getBranches = (_req: Request, res: Response): void => {
  res.json({
    success: true,
    data: mockBranches,
  });
};

export const getBranchById = (req: Request, res: Response): void => {
  const { id } = req.params;
  const branch = mockBranches.find((b) => b.id === id);

  if (!branch) {
    res.status(404).json({
      success: false,
      error: 'Branch not found',
    });
    return;
  }

  res.json({
    success: true,
    data: branch,
  });
};
