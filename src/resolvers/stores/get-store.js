import { StoreModel } from "../../model/model-store.js";

export const getStore = async (req, res) => {
  const dbStore = await StoreModel.find().populate("category");

  res.status(200).json(dbStore);
};
