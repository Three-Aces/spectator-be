import express from 'express';
import testRoutes from './testRoutes';
import authRoutes from './authRoutes';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/test', testRoutes);

export default router;