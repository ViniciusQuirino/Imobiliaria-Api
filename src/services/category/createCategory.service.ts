import AppDataSource from "../../data-source";
import Categories from "../../entities/categories.entities";
import { AppError } from "../../errors/AppError";

const createCategoryService = async (category): Promise<Categories[]> => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const find = await categoryRepository.findOneBy({
    name: category.name,
  });

  if (find) {
    throw new AppError("Category already exists", 409);
  }

  const newCategory = categoryRepository.create(category);

  await categoryRepository.save(newCategory);

  return newCategory;
};

export default createCategoryService;
