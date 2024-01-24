const fs=require('fs')
const data=JSON.parse(fs.readFileSync('./data.json','utf-8'))
const products=data.products


exports.createProduct=(req,res)=>{
    products.push(req.body)
     res.json(req.body)
 }
 exports.getAllProducts=(req,res)=>{
    res.json(products)
}
exports.getProduct=(req,res)=>{
    const id=+req.params.id
    const product=products.find(p=>p.id===id)
    res.json(product)
 }
 exports.replaceProduct=(req,res)=>{
    const id=+req.params.id
    const productIndex=products.findIndex(p=>p.id===id)
    products.splice(productIndex,1,{...req.body,id:id})
    res.json({type:"put"})
 }
 exports.updateProduct=(req,res)=>{
    const id=+req.params.id
    const productIndex=products.findIndex(p=>p.id===id)
    const pre=products[productIndex]
    products.splice(productIndex,1,{...pre,...req.body})
    res.json({type:"patch"})
 }
 exports.deleteProduct=(req,res)=>{
    const id = + req.params.id;
    const product=products.find(p=>p.id===id)
    products.splice(products.indexOf(product),1)
    res.json({"type":"deleted"})
}