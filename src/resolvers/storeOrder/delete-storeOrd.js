import { StoreServerOrder } from "../../model/model-order.js";

export const DeleteStoreserverorder = async (req, res) => {
  const dbStoreserverorder = await StoreServerOrder.findByIdAndDelete(
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
