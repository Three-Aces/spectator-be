import express from 'express';
import testRoutes from './testRoutes';
import authRoutes from './authRoutes';
import profileRoutes from './profileRoutes'
import studentRoutes from './studentRoutes';
import classRoutes from './classRoutes';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/test', testRoutes);
router.use('/users/profile', profileRoutes);
router.use('/student',studentRoutes);
router.use('/class',classRoutes)

export default router;