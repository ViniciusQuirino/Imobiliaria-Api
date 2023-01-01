import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const userFind = await userRepository.findOneBy({
    id: id,
  });

  if (!userFind) {
    throw new AppError("Esse usuario não existe", 404);
  }
  if (userFind.isActive === false) {
    throw new AppError("Esse usuario não esta ativo", 400);
  }

  const userDelete = await userRepository.save({ ...userFind, isActive: false });

  return {};
};

export default deleteUserService;
