import { Router } from "express";
import createUserController from "../controllers/user/createUser.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import listUserController from "../controllers/user/listUser.controller";
import updateUserController from "../controllers/user/updateUser.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middlewares";

import {
  ensureDataUpdateIsValidMiddleware,
  ensureDataIsValidMiddleware,
} from "../middlewares/ensureDataIsValid.middlewares";
import isAdminValidMiddlewares from "../middlewares/isAdminValid.maddlewares";

import { userSchema, updateUserSchema } from "../schemas/user.schemas";

const userRoutes = Router();

userRoutes.post("", ensureDataIsValidMiddleware(userSchema), createUserController);
userRoutes.get("", ensureAuthMiddleware, isAdminValidMiddlewares, listUserController);
userRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureDataUpdateIsValidMiddleware(updateUserSchema),
  updateUserController
);
userRoutes.delete("/:id", ensureAuthMiddleware, isAdminValidMiddlewares, deleteUserController);

export default userRoutes;
