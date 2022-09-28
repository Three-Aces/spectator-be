
//importing modules
import express from"express";
// import db from "..database/models";
import {User} from '../database/models/index';
//Assigning db.users to User variable
//  const User = db.users;

//Function to check if username or email already exist in the database
//this is to avoid having two users with the same username and email
 const saveUser = async (req, res, next) => {
 //search the database to see if user exist
 try {
   const username = await User.findOne({
     where: {
       userName: req.body.userName,
     },
   });
   //if username exist in the database respond with a status of 409
   if (username) {
     return res.json(409).send("username already taken");
   }
  //  student
  
  // phone
  const telnumber = await User.findOne({
    where: {
      phone: req.body.phone,
    },
  });
  //if username exist in the database respond with a status of 409
  if (telnumber) {
    return res.json(409).send("phone already exist");
  }

   //checking if email already exist
   const emailcheck = await User.findOne({
     where: {
       email: req.body.email,
     },
   });

   //if email exist in the database respond with a status of 409
   if (emailcheck) {
     return res.json(409).send("Authentication failed");
   }

   next();
 } catch (error) {
   console.log(error);
 }
};

//exporting module
 export {
 saveUser
};