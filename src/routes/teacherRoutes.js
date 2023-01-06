import express from'express'
import { makeStudentAttendance, saveAttendance } from'../controllers/teacherControllers'
import isTeacher from '../middlewares/isTeacher';

const router = express.Router()

router.post('/:studentId/attend', isTeacher, makeStudentAttendance)
router.post('/save-attendance',  saveAttendance)

export default router
