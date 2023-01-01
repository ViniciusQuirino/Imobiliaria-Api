import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import { IUser } from "../../interfaces/users";
import { userArrayWithoutPasswordSchema } from "../../schemas/user.schemas";

const listuserService = async (): Promise<IUser[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const listWithoutPassword = await userArrayWithoutPasswordSchema.validate(users, {
    stripUnknown: true,
  });

  return listWithoutPassword;
};

export default listuserService;
