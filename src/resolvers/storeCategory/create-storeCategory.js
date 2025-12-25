import { StoreCategoryModel } from "../../model/model-storeCategory.js";

export const CreatedbStoreCategory = async (req, res) => {
  const dbStoreCategory = await StoreCategoryModel.create({
    categoryName: req.body.categoryName,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
  });

  res.status(200).json(dbStoreCategory);
};
