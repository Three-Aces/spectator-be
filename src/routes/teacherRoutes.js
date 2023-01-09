import express from'express'
import { makeStudentAttendance, saveAttendance, bulkAttendance } from'../controllers/teacherControllers'
import isTeacher from '../middlewares/isTeacher';

const router = express.Router()

router.post('/:studentId/attend', isTeacher, makeStudentAttendance)
router.post('/save-attendance',  bulkAttendance)
router.post('/:studentId/save-attendance',  isTeacher, makeStudentAttendance)

export default router
