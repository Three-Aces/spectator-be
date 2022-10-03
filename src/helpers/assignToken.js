import jwt from 'jsonwebtoken';

const assignToken = (user) =>{
    const token=jwt.sign({user}, process.env.SECRETKEY, {
        expiresIn: 1 * 24 * 60 * 60 * 1000,
      });
      return token;

}

export default assignToken