const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name:{type:String,required:true},
    details:{type:String,required:true},
    price:{type:Number,required:true},
    userId:{type:String,required:true}

},{
    timestamps:true
})

const ProductModel = mongoose.model("product",productSchema)

module.exports = {
    ProductModel
}