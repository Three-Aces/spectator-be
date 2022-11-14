import { User,  } from "../database/models";
import verifyToken from "../helpers/verifyToken";
import { getUserSessions } from "../services/userServices";

const isParent = async (req, res, next) => {
  try {
    const token =
      req.headers &&
      req.headers.authorization &&
      req.headers.authorization.split(" ")[1];
    if (!token)
      return res.status(401).json({message:"Access denied. No token provided!"});
      
    const decoded = await verifyToken(token);

    const parent = await User.findOne({ where: { id: decoded.user.id, role: 'parent' } });
    
    if (!parent) return res.status(401).json({message: "Access denied. You are not a parent"});

    const session = await getUserSessions(token);
    if (!session.length == 1)
      return res.status(401).json({ message: "Access denied. Invalid session!"});

    
    req.parent = parent;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Access denied. Invalid token", error: error.message});
  }
};

export default isParent;
