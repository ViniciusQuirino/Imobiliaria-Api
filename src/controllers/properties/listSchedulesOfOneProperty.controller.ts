import { Request, Response } from "express";
import listSchedulesOfOnePropertyService from "../../services/properties/listSchedulesOfOneProperty.service";

const listSchedulesOfOnePropertyController = async (req: Request, res: Response) => {
  const propertyId: string = req.params.id;

  const hours = await listSchedulesOfOnePropertyService(propertyId);

  return res.json(hours);
};

export default listSchedulesOfOnePropertyController;
