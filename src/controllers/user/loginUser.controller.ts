import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/users";
import loginUserService from "../../services/user/loginUser.service";

const loginUserController = async (req: Request, res: Response) => {
  const loginUser: IUserLogin = req.body;

  const token = await loginUserService(loginUser);

  return res.json({token})
};

export default loginUserController;
