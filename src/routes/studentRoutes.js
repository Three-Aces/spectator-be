import express from'express'
import {addStudent,getStudent,deleteStudent,updateStudent,
    findOneStudent, updateBehaviorMarks, recordBehaviorHistory, 
    listBehaviorHistory, printBehaviorMarksHistory} from'../controllers/studentControlers'
import verifyToken from '../helpers/verifyToken';
import isAuthenticated from '../middlewares/Authorization';
import isParent from '../middlewares/isParent';


const router = express.Router()

router.post('/addstudent',isAuthenticated, addStudent)
router.get('/getAllStudents',  getStudent)
router.delete('/deleteStudent/:id',  deleteStudent)
router.put('/updatestudent/:id',  updateStudent)
router.put('/update-behavior-marks/:id',  updateBehaviorMarks)
router.post('/:studentId/behavior',  recordBehaviorHistory)
router.get('/:studentId/behavior',  listBehaviorHistory)
// router.get('/:studentId/print', printBehaviorMarksHistory)
router.get('/findstudent/:id',  findOneStudent)

export default router
