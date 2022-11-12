import {Students} from "../database/models"
// import user from "../database/models/user"
import {User,Class} from "../database/models"

const addStudent=async(req,res)=>{
    const{classId,parentId,firstName,lastName,sex,school}=req.body
    try{
        const parent=await User.findOne({where:{id:parentId, role: 'parent'}})
        const classe=await Class.findOne({where:{id:classId}})
        
        const checkExist = await Students.findOne({where: {
            firstName,
            lastName,
            parentId
        }})
        if (checkExist){
            return res.json({message:'student already exist'})
        }
        if(parent && classe){
        
            const student= await Students.create({firstName,lastName,sex,school,parentId : parent.id,classId : classe.id})
            
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
        let parentName;
        const students=await Students.findAll()
            
            students.forEach(parent => {
                parentName = parent.email
            });
             
            return res.json({students})
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
    findOneStudent
}