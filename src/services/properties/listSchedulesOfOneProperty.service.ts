import AppDataSource from "../../data-source";
import Properties from "../../entities/properties.entites";
import SchedulesUsersProperties from "../../entities/schedules_users_properties.entities";
import { AppError } from "../../errors/AppError";

const listSchedulesOfOnePropertyService = async (propertyId) => {
  const schedulesRepository = AppDataSource.getRepository(SchedulesUsersProperties);
  const propertiesRepository = AppDataSource.getRepository(Properties);

  const schedules = await schedulesRepository
    .createQueryBuilder("schedules")
    .where("schedules.property = :id", { id: propertyId })
    .getOne();

  if (!schedules) {
    throw new AppError("Propriedade não existe", 404);
  }

  const all = await propertiesRepository
    .createQueryBuilder("properties")
    .innerJoinAndSelect("properties.schedules", "schedules_users_properties")
    .innerJoinAndSelect("schedules_users_properties.user", "user")
    .innerJoinAndSelect("properties.address", "address")
    .innerJoinAndSelect("properties.category", "category")
    .where("properties.id = :id", { id: propertyId })
    .getOne();

  return all;
};

export default listSchedulesOfOnePropertyService;
