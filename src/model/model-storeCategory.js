import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const StoreCategorySchema = new Schema({
  id: ObjectId,
  categoryName: String,
});

export const StoreCategoryModel = mongoose.model(
  "StoreCategory",
  StoreCategorySchema
);
