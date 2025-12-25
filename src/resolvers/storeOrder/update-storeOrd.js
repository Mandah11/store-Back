import { StoreServerOrder } from "../../model/model-order.js";

export const UpdateStoreserverorder = async (req, res) => {
  const dbStoreserverorder = await StoreServerOrder.findByIdAndUpdate(
    req.body.id,
    {
      user: req.body.user,
      totalPrice: req.body.totalPrice,
      storeOrderItems: req.body.storeOrderItems,
      status: req.body.status,
      deliveryaddress: req.body.deliveryaddress,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    }
  );
  res.status(200).json(dbStoreserverorder);
};
