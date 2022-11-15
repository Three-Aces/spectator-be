import express from'express'
import {addStudent,getStudent,deleteStudent,updateStudent,findOneStudent} from'../controllers/studentControlers'
import isParent from '../middlewares/isParent';


const router = express.Router()

router.post('/addstudent', isParent, addStudent)
router.get('/getAllStudents',  getStudent)
router.delete('/deleteStudent/:id',  deleteStudent)
router.put('/updatestudent/:id',  updateStudent)
router.get('/findstudent/:id',  findOneStudent)





export default router