import { Router } from "express";
import listSchedulesOfOnePropertyController from "../controllers/properties/listSchedulesOfOneProperty.controller";
import createSchedulesController from "../controllers/schedules/createSchedules.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middlewares";
import isAdminValidMiddlewares from "../middlewares/isAdminValid.maddlewares";
const scheduleRoutes = Router();

scheduleRoutes.post("", ensureAuthMiddleware, createSchedulesController);
scheduleRoutes.get(
  "/properties/:id",
  ensureAuthMiddleware,
  isAdminValidMiddlewares,
  listSchedulesOfOnePropertyController
);

export default scheduleRoutes;
