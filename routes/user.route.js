const express= require('express')
const Product =require('../models/user.model.js');


const app = express();

//middle ware of server 
app.use(express.json());
app.use(express.urlencoded({extended :false}));


//route to /
app.get('/',(req,res)=>{
    res.send('everything is fine in this program');
})

app.get('/about',(req,res)=>{
    res.send('This is about page');
})


//take single product from database 
app.get('/product/:name',async(req,res)=>{
    try{
        const {name}=req.params;
        const product=await Product.find({name});
        res.status(200).json(product);
        
    }catch(err){
        console.log("Error :",err.message);
        throw err;
    }
})
// get all product of data from database 
app.get('/products',async(req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
// create data in database and store product value 
app.post('/product',async(req,res)=>{
    try{
        const product=await Product.create(req.body);
        res.status(200).json(product);
        
    }catch(err){
        console.log("Error :",err.message);
        throw err;
    }
})

// update or edit data from databases
app.put('/product/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findByIdAndUpdate(id,req.body);

        if(!product){
            res.status(404).json({message:`product not found of  id : ${id}`});
        }
        const updateProduct= product;
        res.status(200).json(updateProduct);
        
    }catch(err){
        console.log("Error :",err.message);
        throw err;
    }
})

// delete data form database 
app.delete('/product/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findByIdAndDelete(id);

        if(!product){
            return res.status(404).json({message:`product not found of  id : ${id}`});
        }
        const deleteProduct= product;
        res.status(200).json({message:`product delete successfully ${deleteProduct}`});
        
    }catch(err){
        console.log("Error :",err.message);
        throw err;
    }
})
module.exports = app;