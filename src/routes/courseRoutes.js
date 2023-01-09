import express from'express'
import { addCourse,getCourses } from '../controllers/courseController';


const router = express.Router()

router.post('/:teacherId/add-course',  addCourse)
router.get('/',  getCourses)





export default router