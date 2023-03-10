import { Request, Response } from "express";
import { IScheduleRequest } from "../../interfaces/schedules";
import createSchedulesService from "../../services/schedules/createSchedules.service";

const createSchedulesController = async (req: Request, res: Response) => {
  
  const data: IScheduleRequest = {
    ...req.body,
    userId: req.user.id,
  };

  const newSchedules = await createSchedulesService(data);

  return res.status(201).json(newSchedules);
};

export default createSchedulesController;
