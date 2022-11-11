import express from 'express';
import testRoutes from './testRoutes';
import authRoutes from './authRoutes';
import profileRoutes from './profileRoutes'

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/test', testRoutes);
router.use('/users/profile', profileRoutes);

export default router;