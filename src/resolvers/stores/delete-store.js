import { StoreModel } from "../../model/model-store.js";

export const DeleteStore = async (req, res) => {
  const dbFood = await StoreModel.findByIdAndDelete(req.body.id, {
    storeName: req.body.storeName,
    price: req.body.price,
    image: req.body.image,
    ingredients: req.body.ingredients,
    category: req.body.category,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
  });
  res.status(200).json(dbFood);
};
