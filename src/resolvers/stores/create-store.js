import { StoreModel } from "../../model/model-store.js";

export const CreateStore = async (req, res) => {
  const dbStore = await StoreModel.create({
    storeName: req.body.storeName,
    price: req.body.price,
    image: req.body.image,
    ingredients: req.body.ingredients,
    category: req.body.category,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
  });

  res.status(200).json(dbStore);
};
