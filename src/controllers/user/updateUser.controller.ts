import { Request, Response } from "express";
import updateUserService from "../../services/user/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  const data = await updateUserService(req);

  return res.json(data);
};

export default updateUserController;
