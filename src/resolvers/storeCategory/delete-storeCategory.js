import { StoreCategoryModel } from "../../model/model-storeCategory.js";

export const DeletedbStoreCategory = async (req, res) => {
  const dbStoreCategory = await StoreCategoryModel.findByIdAndDelete(
    req.body.id,
    {
      categoryName: req.body.categoryName,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    }
  );
  res.status(200).json(dbStoreCategory);
};
