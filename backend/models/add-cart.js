import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  product: {
    type: String,
    // required: true,
  },
  quantity: {
    type: String, 
    // required: true,
  },
  // image: {
  //   type: String,
  //   required: true,
  // },
  price: {
    type: Number,
    // required: true,
  },
  
});

export const Addcart = mongoose.model("AddCart", productSchema);
