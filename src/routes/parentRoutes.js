import express from'express'
import { getStudentByParent } from'../controllers/studentControlers'
import isParent from '../middlewares/isParent';

const router = express.Router()

router.get('/students', isParent, getStudentByParent)

export default router
