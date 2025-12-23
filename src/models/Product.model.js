import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: number,
});

export default mongoose.model("Product",productSchema);