import AppDataSource from "../../data-source";
import SchedulesUsersProperties from "../../entities/schedules_users_properties.entities";
import { AppError } from "../../errors/AppError";
import { IScheduleRequest } from "../../interfaces/schedules";
import Properties from "../../entities/properties.entites";

const createSchedulesService = async (data: IScheduleRequest) => {
  const schedulesRepository = AppDataSource.getRepository(SchedulesUsersProperties);
  const propertiesRepository = AppDataSource.getRepository(Properties);

  const date = new Date(data.date);
  const diaSem = date.getDay();

  if (Number.isNaN(date.valueOf())) {
    throw new AppError("Data incorreta", 400);
  }

  if (diaSem < 1 || diaSem > 5) {
    throw new AppError("Apenas de seg a sexta", 400);
  }

  const horas = data.hour.slice(0, 2);
  const minutos = data.hour.slice(3, 5);
  const all = +`${parseInt(horas)}${minutos}`;

  if (data.hour.length != 5) {
    throw new AppError("formato de horario errado", 400);
  }

  if (all <= 800 || all >= 1800) {
    throw new AppError("Esse horario está fechado", 400);
  }

  const propertyFind = await propertiesRepository
    .createQueryBuilder("properties")
    .where("properties.id = :id", { id: data.propertyId })
    .getOne();

  if (!propertyFind) {
    throw new AppError("Essa propriedade não existe", 404);
  }

  const find = await schedulesRepository
    .createQueryBuilder("schedules")
    .where("schedules.date = :date", { date: data.date })
    .where("schedules.hour = :hour", { hour: data.hour })
    .getOne();

  if (find) {
    throw new AppError("User schedule already exists", 409);
  }

  const newSchedules = schedulesRepository.create({
    ...data,
    property: data.propertyId,
    user: data.userId,
  });

  await schedulesRepository.save(newSchedules);

  return { message: "Schedule created" };
};

export default createSchedulesService;
