import {User} from '../database/models/index';
import { phoneExist, userExist, createUser } from '../services/userServices';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import assignToken from '../helpers/assignToken';
import sendVerificationEmail from '../helpers/sendEmail/sendVerificationEmail';
const env = process.env.NODE_ENV || 'development';


  const signup = async(req, res)=>{
    try {
    const{ email, phone} = req.body;

    const exist = await userExist(email)
    if(exist){
      return res.json({success: false, statusCode: 409, message: 'email already exists'})
    }

    const puser= await phoneExist(phone)
    if(puser){
      return res.json({success: false, statusCode: 409, message: 'phone already exist'})
    }
    const newUser = await createUser(req.body)

    if(newUser){
      const userToken = assignToken(newUser)
      sendVerificationEmail(userToken, newUser)
      return res.status(201).json({success: true, statusCode: 201, regToken: userToken, data: newUser})
    }

    } catch (error) {
      return res.json({success: false, statusCode: 500, error: error.message, message:'Internal server error'})
    }
    
  }

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) {
      return res.status(401).send({
        message: "Invalid Password!",
      });
    }
    const loginToken = assignToken(user)
    return res.status(200).json({
      loginToken
    }); 
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({
      message: "You've been signed out!"
    });
  } catch (err) {
    this.next(err);
  }
};


export {
 signup
}

