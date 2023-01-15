import db, {Students} from "../database/models"
import {User,Class, BehaviorMarksHistory} from "../database/models"
import PDFDocument from 'pdfkit';
const pdf = require('pdf-puppeteer');
import fs from 'fs'
import path from "path";

const addStudent=async(req,res)=>{
    const{firstName,lastName,sex,school}=req.body
    const parentId = req.user.id
    console.log('ppppp', parentId)
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

const getStudent = async(req,res)=>{
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
    const id = req.user.id
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
    const{firstName,lastName,sex, marks}=req.body
    try{
        const students=await Students.findOne({where:{id}})
        students.firstName=firstName
        students.lastName=lastName
        students.sex=sex
        students.marks = marks
        await students.save()
        return res.json(students)
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:err.message})
    }
}
const updateBehaviorMarks=async(req,res)=>{
    const id=req.params.id
    const{marks}=req.body
    try{
        const student=await Students.findOne({where:{id}})
        // students.marks = marks
        // await students.save()
        await student.update({marks})
        return res.json(student)
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

const recordBehaviorHistory=async(req,res)=>{
    const {studentId}=req.params
    const{comment, reducedMarks}=req.body
    const data ={
        studentId,
        reducedMarks,
        comment
    }
    try{
        const behaviorHistory=await BehaviorMarksHistory.create(data)
        return res.status(201).json(behaviorHistory)
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:err.message})
    }
}

const listBehaviorHistory=async(req,res)=>{
    const {studentId}=req.params
    try{
        const behaviorMarksHistories=await BehaviorMarksHistory.findAll(
            {
                where: {studentId}
            }
        )
        return res.status(200).json({behaviorMarksHistories})
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:err.message})
    }
}


// const printBehaviorMarksHistory = async (req, res)=>{
//     const {studentId}=req.params
//     try{
//         const behaviorMarksHistories = await BehaviorMarksHistory.findAll(
//             {
//                 where: {studentId},
//                 include: [{
//                     model: db.Students,
//                     as:'behavior-history'
//                 }
//                 ]
//             },
//         )
//         const doc = new PDFDocument();
//         doc.text(JSON.stringify(behaviorMarksHistories));
//         doc.fontSize(25)
//         .text('Styled PDF!', {
//                 align: 'center',

//         });
//         const pd = doc.pipe(fs.createWriteStream(`reports/file.pdf`));
//         doc.end();
//         var file = path.join(__dirname, 'file.pdf');
//         console.log('file', file)
//         console.log('__dirname', `${__dirname}`)
//         console.log('__filename', __filename)
//     //     res.download(file, function (err) {
//     //         if (err) {
//     //             console.log("Error");
//     //             console.log(err);
//     //         } else {
//     //             console.log("Success");
//     //         }    
//     //  });
//         // const options = {
//         //     format: 'A4',
//         //     displayHeaderFooter: true,
//         //     headerTemplate: '<div></div>',
//         //     footerTemplate: '<div></div>',
//         //     printBackground: true,
//         //     margin: {
//         //       top: '10mm',
//         //       right: '10mm',
//         //       bottom: '10mm',
//         //       left: '10mm',
//         //     },
//         //     style: `
//         //       h1 {
//         //         color: blue;
//         //       }
//         //     `,
//         //     content: `
//         //       <h1>Hello World</h1>
//         //       <p>This is a PDF document created with pdf-puppeteer</p>
//         //     `,
//         //   };
//         //   const buffer = await pdf.create(options);
//         //   fs.writeFileSync(`output-${ Date.now()}.pdf`, buffer);      
            
//         // return res.status(200).json({message: 'PDF generated', behaviorMarksHistories})
//     }
//     catch(err){
//         console.log(err)
//         return res.status(500).json({error:err.message})
//     }
// }


export {
    addStudent,
    getStudent,
    deleteStudent,
    updateStudent,
    findOneStudent,
    getStudentByParent,
    updateBehaviorMarks,
    recordBehaviorHistory,
    listBehaviorHistory,
    // printBehaviorMarksHistory
}