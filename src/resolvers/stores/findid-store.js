import { StoreModel } from "../../model/model-store.js";

export const findIdStore = async (req, res) => {
  console.log(req.params.id);

  const dbFindId = await StoreModel.find({
    category: req.params.id,
  });

  res.status(200).json(dbFindId);
};
