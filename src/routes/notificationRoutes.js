import express from'express'
import { ListAllNotifications, NotifyAboutAttendance, MarkNotificationsAsRead } from '../controllers/notificationController';
import verifyToken from '../helpers/verifyToken';
import isAuthenticated from '../middlewares/Authorization';
import isParent from '../middlewares/isParent';


const router = express.Router()

router.post('/parents/:studentId/attendance-notify', NotifyAboutAttendance )
router.get('/', isAuthenticated,  ListAllNotifications)
router.put('/', isAuthenticated,  MarkNotificationsAsRead)

export default router
