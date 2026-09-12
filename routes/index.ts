import { Router } from 'express';
import healthRoutes from './health.routes';
import branchesRoutes from './branches.routes';

const router = Router();

router.use('/health', healthRoutes);
router.use('/branches', branchesRoutes);

export default router;
