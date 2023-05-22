const express = require("express")
const { addProduct, deleteProduct, products } = require("../control/product.control")
const { authorization } = require("../middlewares/authorization")

const productRouter = express.Router()

productRouter.post("/addproducts",authorization, addProduct)
productRouter.delete("/deleteproducts/:id",authorization,deleteProduct)
productRouter.get("/products",products)

module.exports = {
    productRouter
}