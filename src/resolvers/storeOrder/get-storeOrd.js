import { StoreServerOrder } from "../../model/model-order.js";

export const getStoreserverorder = async (req, res) => {
  const dbStoreserverorder = await StoreServerOrder.find().populate([
    { path: "user" },
    { path: "storeOrderItems.store" },
  ]);

  res.status(200).json(dbStoreserverorder);
};
