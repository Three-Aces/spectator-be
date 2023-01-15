import db from "../database/models"
import { User } from "../database/models"

const listAllUsers = async(req, res)=>{
    const users = await User.findAll()
    return res.status(200).json({
        count: users.length,
        users
    })
}
const listAllParentUsers = async(req, res)=>{
    const parents = await User.findAll({where: {role: 'parent'}})
    return res.status(200).json({
        count: parents.length,
        parents
    })
}
const listAllTeacherUsers = async(req, res)=>{
    const teachers = await User.findAll({where: {role: 'teacher'}, include: [
        {
            model: db.Profile,
            as: 'user'
        }
    ]})
    return res.status(200).json({
        count: teachers.length,
        teachers
    })
}
export {
    listAllUsers,
    listAllParentUsers,
    listAllTeacherUsers
}