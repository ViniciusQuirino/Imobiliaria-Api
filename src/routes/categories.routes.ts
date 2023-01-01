import { Router } from "express";
import createCategoryController from "../controllers/category/createCategory.controller";
import listCategoryController from "../controllers/category/listCategory.controller";
import listPropertiesOfOneCategoryController from "../controllers/category/listPropertiesOfOneCategory.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middlewares";
import isAdminValidMiddlewares from "../middlewares/isAdminValid.maddlewares";

const categoriesRoutes = Router();

categoriesRoutes.post("", ensureAuthMiddleware, isAdminValidMiddlewares, createCategoryController);
categoriesRoutes.get("", listCategoryController);
categoriesRoutes.get('/:id/properties',listPropertiesOfOneCategoryController)

export default categoriesRoutes;
