import { phoneExist, userExist, createUser, verifyUserAccount } from '../services/userServices';
import bcrypt from 'bcrypt';
import assignToken from '../helpers/assignToken';
import verifyToken from '../helpers/verifyToken';
import sendVerificationEmail from '../helpers/sendEmail/sendVerificationEmail';


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

const login = async (req, res) => {
  const {email} = req.body
  try {
    const user = await userExist(email)
    if (!user) {
      return res.status(404).json({ message: "User Not found." });
    }
    if (!user.isVerified) {
      return res.status(400).json({ message: "User needs to be verified" });
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
    return res.status(500).json({ message: error.message });
  }
};

// exports.signout = async (req, res) => {
//   try {
//     req.session = null;
//     return res.status(200).send({
//       message: "You've been signed out!"
//     });
//   } catch (err) {
//     this.next(err);
//   }
// };

const verifyUser = async(req, res)=> {
  let data = {};
  try {
    data = await verifyToken(req.params.token);
    
  } catch (err) {
    return res.status(400).json({ message: `Invalid or expired Token.`});
  }
  try {
    const exists = await userExist(data.user.email);
    
    if (!exists) {
      return res.status(404).json({message: `Ooops! User does not exist!`});
    }
    const verified = await verifyUserAccount(data.user.email);

    return res.status(200).json({message: "User verified successfully", data: verified});
  } catch (error) {
    return res.status(500).json({message: `Ooops! Unable to verify User ${error.message}`});
  }
}

export {
 signup, verifyUser, login
}

