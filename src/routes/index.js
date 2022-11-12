import express from 'express';
import testRoutes from './testRoutes';
import authRoutes from './authRoutes';
import profileRoutes from './profileRoutes'
import roleRoutes from './roleRoutes'

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/test', testRoutes);
router.use('/users/profile', profileRoutes);
router.use('/role', roleRoutes)

export default router;