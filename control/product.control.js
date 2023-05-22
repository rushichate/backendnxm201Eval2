const { ProductModel } = require("../modules/product.model");


const addProduct = async (req,res)=>{
    try{
        const data = req.body;
        const newProduct = new ProductModel({...data,userId:userId})
        await newProduct.save()
        res.status(200).send({msg:"New Product is added"})
    }catch(err){
        res.status(400).send({msg:err.message})
    }
}

const deleteProduct = async (req,res)=>{
    try{
        const {id} = req.params
        const deleted = await ProductModel.findByIdAndDelete(id);
        res.send({msg:"Poduct deleted",deleted})
    }catch(err){
        res.status(400).send({msg:err.message})
    }
}

const products = async (req,res)=>{
    try{
        const products = await ProductModel.find()
        res.status(200).send({products})
    }catch(err){
        res.status(400).send({msg:err.message})
    }
}



module.exports = {
    addProduct,
    deleteProduct,
    products
}