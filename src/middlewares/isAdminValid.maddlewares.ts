import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

const isAdminValidMiddlewares = async (req: Request, res: Response, next: NextFunction) => {
  
  const {user} = req
  if (user.isAdm === false) {
    
    throw new AppError("User is not admin", 403);
  }

  return next();
};

export default isAdminValidMiddlewares;
