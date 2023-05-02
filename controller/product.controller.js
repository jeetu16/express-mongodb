const { Product } = require('../model/product.schema');
const mongoose = require('mongoose');

const getAllProducts = async (req, res) => {
    try {
        // conditional filetering
        // const product = await Product.find({stock: {$lt:30}, price: {$gt:500}});
        const product = await Product.find()
        res.status(201).json(product);
    } catch(err){
        res.status(500).json(err);
    }
}

const getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        console.log(product);
        res.status(200).json(product);
    } catch(err){
        res.status(404).json({ "success": false,"message": `Not found product with id ${req.params.id}`});
    }  
}

const addProduct = async (req, res) => {
    try{
        const product = new Product(req.body);
        const doc = await  product.save()
        res.status(201).json({success: true, message:"Successfully Added",doc});
    }catch(err){
        res.status(400).json(err);
    }
}

const replaceProduct = async (req, res) => {
    const id = req.params.id;  
    try {
        const product = await Product.findOneAndReplace({ _id: id },req.body,{ new : true })
        res.status(200).json({ "message": "succussfully replaced Data", product})
    } catch(err) {
        res.status(400).json(err)
    }
}


const updateProduct = async (req, res) => {

    const id = req.params.id;
    try {
        // const product = await Product.findByIdAndUpdate({_id:id},req.body)
        // below query is same as above query so we can use both query for patch update
        const product = await Product.findOneAndUpdate({_id:id},req.body,{ new : true })
        res.status(200).json({ "message": "succussfully Updated Data", product })
    } catch(err) {
        res.status(400).json(err)
    }
}

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    // Similar works as below query work
    // const product = await Product.findByIdAndDelete(id);
    const product = await Product.findOneAndDelete({_id: id})
    res.status(200).json({"message":"Successfully Deleted",product})
}


module.exports = { 
    getAllProducts,
    getProduct,
    deleteProduct,
    updateProduct,
    replaceProduct,
    addProduct
}