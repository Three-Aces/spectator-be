import db, {StudentReport} from "../database/models"
import models from '../database/models'

const makeStudentAttendance = async(req, res)=>{
    const teacherId = req.teacher.id
    const {studentId} = req.params
    const {comment, attend, courseId} = req.body
    try{
        const attended = await StudentReport.create({
            studentId,
            teacherId,
            attend,
            comment,
            courseId,
            date: Date.now()
        })
        console.log('vvvvv', attended)
        return res.status(201).json({
            response: attended,
            message: 'Successfully recorded!'
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:err.message})
    }
    
}

const saveAttendance = async(req, res)=>{
    const data = req.body
    // data.teacherId = req.user.id
    // const saved = await StudentReport.Create(data)

    return res.status(201).json({
        response: data,
        student: req.params.studentId,
        message: 'Attendance saved successfully'
    })
}

const bulkAttendance = async(req, res)=>{
    // data must be an array of objects when you want to save multiple student
    const data = req.body
    const saved = await StudentReport.bulkCreate(data)

    return res.status(201).json({
        response: saved,
        message: 'Attendance saved successfully'
    })
}

export {
    makeStudentAttendance,
    saveAttendance,
    bulkAttendance
}
