const { application } = require("express");

import express from'express'
import {addStudent,getStudent,deleteStudent,updateStudent,findOneStudent} from'../controllers/studentControlers'


const router = express.Router()

router.post('/addstudent',  addStudent)
router.get('/getSudents',  getStudent)
router.delete('/deleteStudent/:id',  deleteStudent)
router.put('/updatestudent/:id',  updateStudent)
router.get('/findstudent/:id',  findOneStudent)





export default router