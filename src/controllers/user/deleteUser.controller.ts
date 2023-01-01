import { Request, Response } from "express";
import deleteUserService from "../../services/user/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  const deleteUser = await deleteUserService(req.params.id);

  return res.status(204).json({message: 'deleted user'});
};

export default deleteUserController;
