import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const StoreSchema = new Schema({
  id: ObjectId,
  storeName: String,
  price: Number,
  image: String,
  ingredients: String,
  category: {
    type: ObjectId,
    ref: "StoreCategory",
  },
  createdAt: Date,
  updatedAt: Date,
});
export const StoreModel = mongoose.model("Store", StoreSchema);
