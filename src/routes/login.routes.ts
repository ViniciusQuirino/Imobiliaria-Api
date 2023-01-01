import { Router } from "express";
import loginUserController from "../controllers/user/loginUser.controller";

const loginRoutes = Router();

loginRoutes.post("", loginUserController);

export default loginRoutes;
