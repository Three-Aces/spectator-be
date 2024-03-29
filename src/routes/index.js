import express from 'express';
import testRoutes from './testRoutes';
import authRoutes from './authRoutes';
import profileRoutes from './profileRoutes'
import roleRoutes from './roleRoutes'
import studentRoutes from './studentRoutes';
import classRoutes from './classRoutes';
import parentRoutes from './parentRoutes';
import chatRoutes from './chatRoutes'
import teacherRoutes from './teacherRoutes'
import courseRoutes from './courseRoutes'
import usersRoutes from './userRoutes'
import notificationRoutes from './notificationRoutes'

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/test', testRoutes);
router.use('/users/profile', profileRoutes);
router.use('/role', roleRoutes);
router.use('/student',studentRoutes);
router.use('/class',classRoutes);
router.use('/parent', parentRoutes);
router.use('/chats', chatRoutes);
router.use('/students', teacherRoutes)
router.use('/courses', courseRoutes)
router.use('/users', usersRoutes)
router.use('/notifications', notificationRoutes)

export default router;
