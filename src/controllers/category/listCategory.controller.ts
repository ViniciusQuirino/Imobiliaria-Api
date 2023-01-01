import { Request, Response } from "express";
import listCategoriesService from "../../services/category/listCategories.service";

const listCategoryController = async (req: Request, res: Response) => {
    const categories = await listCategoriesService()

    return res.json(categories)
};

export default listCategoryController;
