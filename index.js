//model view controller
const express=require('express')
const app=express()
const morgan = require('morgan')
app.use(express.json())
const products=require('./Controller/product')
//creating routes
const productRouter=express.Router()

//attached to server
app.use('/api-mv',productRouter)
//create /product C R U D
productRouter
.post('/products',products.createProduct)
.get('/products',products.getAllProducts)
.get('/products/:id',products.getProduct)
.put('/products/:id',products.replaceProduct)
.patch('/products/:id',products.updateProduct)
.delete('/products/:id',products.deleteProduct)

app.listen(8080,()=>{
    console.log("server is started")
})