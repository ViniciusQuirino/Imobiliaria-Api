import { IUser, IUserRequest } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";
import { userWithoutPasswordSchema } from "../../schemas/user.schemas";

const createUserService = async (user: IUserRequest): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const findOne = await userRepository.findOneBy({
    email: user.email,
  });

  if (findOne) {
    throw new AppError("User already exists", 409);
  }

  const createUser = userRepository.create(user);

  await userRepository.save(createUser);

  const userWithoutPassword = await userWithoutPasswordSchema.validate(createUser, {
    stripUnknown: true,
  });

  return userWithoutPassword;
};

export default createUserService;
