import AppDataSource from "../../data-source";
import Properties from "../../entities/properties.entites";

const listPropertiesService = async () => {
  const propertiesRepository = AppDataSource.getRepository(Properties);

  const find = await propertiesRepository.find({
    relations: {
      address: true,
      category:true
    },
  });

  return find;
};

export default listPropertiesService;
