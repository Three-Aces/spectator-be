import db, {Students} from "../database/models"
import {User,Class} from "../database/models"

const addStudent=async(req,res)=>{
    const{firstName,lastName,sex,school}=req.body
    const parentId = req.user.id
    try{
        const parent=await User.findOne({where:{id:parentId}})
        
        const checkExist = await Students.findOne({where: {
            firstName,
            lastName,
            parentId
        }})
        if (checkExist){
            return res.json({message:'student already exist'})
        }
        if(parent){
        
            const student= await Students.create({firstName,lastName,sex,school,parentId})
            
            return res.json(student)
        }
        return res.json({message:'Parent doesn\'t exist'})
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:err.message})
    }
    
}

const getStudent=async(req,res)=>{
    try{
        const students=await Students.findAll({
            include: [
                {
                    model: db.Class,
                    as: 'class',
                    attributes: {exclude: ['createdAt', 'updatedAt']}
                }
            ]
        })
            return res.json({students})
        }

        catch(err){
            console.log(err)
            return res.status(500).json({error:err.message})
        }
}

const getStudentByParent = async(req, res)=>{
    const id = req.parent.id
    try{
        const students=await Students.findAll({
            where: {parentId: id},
            include: [
                {
                    model: db.Class,
                    as: 'class',
                    attributes: {exclude: ['createdAt', 'updatedAt']}
                }
            ]
        })
            return res.status(200).json({students})
        }

        catch(err){
            console.log(err)
            return res.status(500).json({error:err.message})
        }
}

const deleteStudent=async(req,res)=>{
    const id=req.params.id
    try{
        const students=await Students.findOne({where:{id}})
        if(students){
        await students.destroy()
        return res.json({message:'student deleted!'})
        }
        else{
            return res.json({message:'student doesn\'t exist'})

        }
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:err.message})
    }
}

const updateStudent=async(req,res)=>{
    const id=req.params.id
    const{firstName,lastName,sex,school}=req.body
    try{
        const students=await Students.findOne({where:{id}})
        students.firstName=firstName
        students.lastName=lastName
        students.sex=sex
        students.school=school
        await students.save()
        return res.json(students)
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:err.message})
    }
}
const findOneStudent=async(req,res)=>{
    const id=req.params.id
    try{
        const students=await Students.findOne({where:{id}})
        if(students){
        return res.json(students)
        }
        else{
            return res.json({message:'no student with that id'})

        }
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:err.message})
    }
}


export {
    addStudent,
    getStudent,
    deleteStudent,
    updateStudent,
    findOneStudent,
    getStudentByParent
}