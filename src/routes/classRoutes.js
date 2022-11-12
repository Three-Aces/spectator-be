const { application } = require("express");

import express from'express'
import { addClass,getClass } from '../controllers/classController';


const router = express.Router()

router.post('/addClass',  addClass)
router.get('/getClass',  getClass)





export default router