import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

const ensureDataIsValidMiddleware =
  (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = await schema.validate(req.body, {
        abortEarly: true,
        stripUnknown: true
      });

      req.body = validatedData;

      next();
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

const ensureDataUpdateIsValidMiddleware =
  (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown:false
      });

      req.body = validatedData;

      next();
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  };

export { ensureDataIsValidMiddleware, ensureDataUpdateIsValidMiddleware };
