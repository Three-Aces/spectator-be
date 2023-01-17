import db, {Notification, Students} from '../database/models'

export const ListAllNotifications = async(req, res)=>{
    try {
        const userId = req.user.id
        console.log('id', userId)
        const notifications = await Notification.findAll({where: {userId}})
        return res.status(200).json({
            notifications
        })
        
    } catch (error) {
        return res.send({
            error: error.message
        })
    }
    
} 

export const NotifyAboutAttendance = async (req, res)=>{
    const {studentId} = req.params
    const data = req.body
    const parent = await Students.findOne({where: {id: studentId}})
    const notification = await Notification.create({
        userId: parent.parentId,
        title: 'attendance',
        message: data.comment,
        course: data.courseId
    })
    return res.status(201).json({
        notification
    })
}


export const  MarkNotificationsAsRead = async(req, res) =>{
    const userId = req.user.id
    await Notification.update(
      { status: "read" },
      {
        where: { userId },
      }
    );
    return res.status(200).json({
        message: 'Notifications updated to read'
    })
}