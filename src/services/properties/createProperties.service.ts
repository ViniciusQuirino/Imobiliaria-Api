import AppDataSource from "../../data-source";
import Properties from "../../entities/properties.entites";
import Categories from "../../entities/categories.entities";
import Addres from "../../entities/addresses.entites";
import { AppError } from "../../errors/AppError";

const createPropertiesService = async (body) => {
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const categoriesRepository = AppDataSource.getRepository(Categories);
  const addressRepository = AppDataSource.getRepository(Addres);

  const find = await addressRepository.findOneBy(body.address);

  if (find) {
    throw new AppError("Address already exists", 409);
  }

  const newAddress = await addressRepository.create(body.address);
  await addressRepository.save(newAddress);

  const category = await categoriesRepository.findOneBy({
    id: body.categoryId,
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  const newProperties = propertiesRepository.create({
    ...body,
    category,
    address: newAddress,
  });

  await propertiesRepository.save(newProperties);

  return newProperties;
};

export default createPropertiesService;
