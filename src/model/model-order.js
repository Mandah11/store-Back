import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const StoreServerOrderSchema = new Schema({
  id: ObjectId,
  user: { type: ObjectId, ref: "User" },
  totalPrice: Number,
  storeOrderItems: [
    {
      store: { type: ObjectId, ref: "Store" },
      quantity: Number,
    },
  ],
  status: {
    type: String,
    enum: ["PENDING", "CANCELED", "DELIVERED"],
  },
  deliveryaddress: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const StoreServerOrder = mongoose.model(
  "StoreOrder",
  StoreServerOrderSchema
);
