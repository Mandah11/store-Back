import { StoreServerOrder } from "../../model/model-order.js";
import { UserModel } from "../../model/model-user.js";

export const CreateStoreserverorder = async (req, res) => {
  const dbStoreserverorder = await StoreServerOrder.create({
    user: req.body.user,
    totalPrice: req.body.totalPrice,
    storeOrderItems: req.body.storeOrderItems,
    status: req.body.status,
    deliveryaddress: req.body.deliveryaddress,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
  });

  await UserModel.findByIdAndUpdate(req.body.id, {
    orderedStores: [dbStoreserverorder._id],
  });

  res.status(200).json(dbStoreserverorder);
};
