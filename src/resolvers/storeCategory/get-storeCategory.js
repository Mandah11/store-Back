import { StoreModel } from "../../model/model-store.js";
import { StoreCategoryModel } from "../../model/model-storeCategory.js";

export const getdbStoreCategory = async (req, res) => {
  const dbStoreCategory = await StoreCategoryModel.find();

  const categories = await Promise.all(
    dbStoreCategory.map(async (cur) => {
      const stores = await StoreModel.find({ category: cur._id });
      return {
        _id: cur._id,
        categoryName: cur.categoryName,
        store: stores.length,
      };
    })
  );
  res.status(200).json(categories);
};
