import {Course} from "../database/models"


const addCourse = async(req,res)=>{
    const{ name, level }=req.body
    const {teacherId} = req.params
    try{
        const course= await Course.create({
            name,
            level,
            teacherId
    })
        return res.status(201).json({course, message: 'new course added'})   
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:err.message})
    }  
}

const getCourses = async(req,res)=>{
    try{
        const courses = await Course.findAll()
            return res.status(200).json(courses)
        }
        catch(err){
            console.log(err)
            return res.status(500).json({error:err.message})
        }
    }

export {
    addCourse,
    getCourses
    
}