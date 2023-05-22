const { ProductModel } = require("../modules/product.model");

const authorization = async (req,res,next)=>{
    const userRole = req.role;
    const userId = req.userId;
    const {id} = req.params;
    if(userRole === "Sellor"){
        next();
    }else{
        const product = await ProductModel.findById(id);
        if(product.userId === userId){
            next();
        }else{
            return res.status(401).send({msg:"Unauthorized"})
        }
    }
}

module.exports = {
    authorization
}