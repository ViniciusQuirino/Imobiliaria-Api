import { Request, Response } from "express";
import { IPropertyRequest } from "../../interfaces/properties";
import createPropertiesService from "../../services/properties/createProperties.service";

const createPropertiesController = async (req: Request, res: Response) => {
  const dataProperties: IPropertyRequest = req.body;


  const newProperties = await createPropertiesService(dataProperties);

  return res.status(201).json(newProperties);
};

export default createPropertiesController;
