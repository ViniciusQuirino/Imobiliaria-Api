import AppDataSource from "../../data-source";
import Categories from "../../entities/categories.entities";
import { AppError } from "../../errors/AppError";

const listPropertiesOfOneCategoryService = async (idCategory) => {
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const find = await categoriesRepository.findOne({
    where: {
      id: idCategory,
    },
    relations: {
      properties: true,
    },
  });

  if (find) {
    return find;
  }

  throw new AppError("Category not found", 404);
};

export default listPropertiesOfOneCategoryService;
