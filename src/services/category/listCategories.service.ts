import AppDataSource from "../../data-source";
import Categories from "../../entities/categories.entities";

const listCategoriesService = async () => {
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const find = categoriesRepository.find();

  return find;
};

export default listCategoriesService;

// {
//   relations:{
//     propeties:true
//   }
// }