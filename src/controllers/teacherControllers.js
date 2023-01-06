import db, {StudentReport} from "../database/models"
import models from '../database/models'

const makeStudentAttendance = async(req, res)=>{
    const teacherId = req.teacher.id
    const {studentId} = req.params
    const {comment} = req.body
    try{
        const attended = await StudentReport.create({
            studentId,
            teacherId,
            attend: true,
            comment,
            date: Date.now()
        })
        return res.status(201).json({
            response: attended
        })
        
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:err.message})
    }
    
}

const saveAttendance = async(req, res)=>{
    // data must be an array of objects
    const data = req.body
    const saved = await StudentReport.bulkCreate(data)

    return res.status(201).json({
        response: saved,
        message: 'Attendance saved successfully'
    })


    // const saved = await StudentReport.bulkCreate(
    //     {
    //         teacherId: "9cc42407-7542-47c8-b511-fe042cd7b149",
    //         studentId: 1,
    //         attend: true,
    //         date: Date.now(),
    //         comment: "She attended"
    //     },
    //     {
    //         teacherId: "9cc42407-7542-47c8-b511-fe042cd7b149",
    //         studentId: 2,
    //         date: Date.now(),
    //         comment: "absent"
    //     },
    // )

    // return res.status(201).json({
    //     saved
    // })
}

export {
    makeStudentAttendance,
    saveAttendance
}
