import { Request, Response } from "express";
import listuserService from "../../services/user/listUser.service";

const listUserController = async (req: Request, res: Response) => {
 
  const users = await listuserService();
  return res.status(200).json(users);
};

export default listUserController;
