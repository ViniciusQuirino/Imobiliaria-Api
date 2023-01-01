import { Router } from "express";
import createPropertiesController from "../controllers/properties/createProperties.controller";
import isAdminValidMiddlewares from "../middlewares/isAdminValid.maddlewares";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middlewares";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middlewares";
import { propertiesSchemas } from "../schemas/properties.schemas";
import listPropertiesController from "../controllers/properties/listProperties.controller";
const propertiesRoutes = Router();

propertiesRoutes.post(
  "",
  ensureAuthMiddleware,
  isAdminValidMiddlewares,
  ensureDataIsValidMiddleware(propertiesSchemas),
  createPropertiesController
);
propertiesRoutes.get('',listPropertiesController)


export default propertiesRoutes;
