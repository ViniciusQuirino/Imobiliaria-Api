import { Request } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";
import { IUser, IUserUpdate } from "../../interfaces/users";


const updateUserService = async (req: Request): Promise<IUser[]> => {
  const { id } = req.params;
  const userData: IUserUpdate = req.body;

  const userRepo = AppDataSource.getRepository(User);

  const userFind = await userRepo.findOneBy({
    id: id,
  });

  if (!userFind) {
    throw new AppError("User not found", 404);
  }

  if (userFind.id !== req.user.id && req.user.isAdm === false) {
    throw new AppError("Do you not have permission", 401);
  }

  const updatedUser = await userRepo.save({
    ...userFind,
    ...userData,
  });

  const returnUser = await userRepo.find({
    select: ["name", "email", "updatedAt", "createdAt", "isAdm", "isActive", "id"],
    where: { id: updatedUser.id },
  });

  return returnUser
};

export default updateUserService;
