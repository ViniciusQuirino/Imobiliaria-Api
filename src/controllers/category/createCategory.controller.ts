import { Request, Response } from "express";
import { ICategoryRequest } from "../../interfaces/categories";
import createCategoryService from "../../services/category/createCategory.service";

const createCategoryController = async (req: Request, res: Response) => {

    const category: ICategoryRequest = req.body

    const newCategory = await createCategoryService(category)

    return res.status(201).json(newCategory)
};

export default createCategoryController;
