import { Request, Response } from "express";
import listPropertiesOfOneCategoryService from "../../services/category/listPropertiesOfOneCategory.service";

const listPropertiesOfOneCategoryController = async (req: Request, res: Response) => {
  const idCategory: string = req.params.id;

  const list = await listPropertiesOfOneCategoryService(idCategory);

  return res.status(200).json(list);
};

export default listPropertiesOfOneCategoryController;
