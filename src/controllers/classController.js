import {Class} from "../database/models"


const addClass=async(req,res)=>{
    const{ name}=req.body
    try{
        
            const classes= await Class.create({name})
            return res.json(classes)
        
        
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:err.message})
    }
    
}
const getClass=async(req,res)=>{
    try{
        const classe=await Class.findAll()
            return res.json(classe)
        }
        catch(err){
            console.log(err)
            return res.status(500).json({error:err.message})
        }
         }
const deleteStudent=async(req,res)=>{
    
}


export {
    addClass,
    getClass,
    deleteStudent
}