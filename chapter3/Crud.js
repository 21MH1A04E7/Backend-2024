// const express=require('express')

// const fs=require('fs')
// const morgan = require('morgan')
// const app=express()

// //body parser
// //build in middleware
// app.use(express.json())
// //use to read the json data (in request body) 

// // app.use(express.urlencoded())

// //inbuild middleware
// app.use(morgan('default'))
// app.use(express.static('public'))

// const auth=(req,res,next)=>{
//     console.log(req.query)
//      if(req.body.password==123){
//          next()
//      }else{
//          res.sendStatus(401)
//      }
//  }
 
//  //router level meddleware
//  app.get('/',auth,(req,res)=>{
//      res.json({type:"Get"})
//  })
 
//  app.post('/',auth,(req,res)=>{
//      res.json({type:"Post"})
//  })
 
//  app.put('/',(req,res)=>{
//      res.json({type:"put"})
//  })
 
//  app.patch('/',(req,res)=>{
//      res.json({type:"patch"})
//  })
 
//  app.delete('/',(req,res)=>{
//      res.json({type:"delete"})
//  })

// app.listen(8080,()=>{
//     console.log("server is started")
// })


const express=require('express')
const fs=require('fs')
const morgan = require('morgan')

const app=express()
const data=JSON.parse(fs.readFileSync('./data.json','utf-8'))
app.use(express.json())

const products=data.products
//body parse
app.use(express.json())


//create /product C R U D
app.post('/products',(req,res)=>{
    // console.log(req.body)
    products.push(req.body)
     res.json(req.body)
 })
 
//products
//API Root, base 

//read get products
 app.get('/products',(req,res)=>{
     res.json(products)
 })
 
//  params is an object of the req object that contains route parameters. If the params are specified when a URL is built
///products/:id
 app.get('/products/:id',(req,res)=>{
    //:id -> it will return the id
    console.log(req.params.id)
    const id=+req.params.id
    const product=products.find(p=>p.id===id)
    // console.log(req.url)
    res.json(product)
 })

 //update
//over write
 app.put('/products/:id',(req,res)=>{
    const id=+req.params.id
    const productIndex=products.findIndex(p=>p.id===id)
    products.splice(productIndex,1,{...req.body,id:id})
    res.json({type:"put"})
 })
 
 //only update the new data
 app.patch('/products/:id',(req,res)=>{
    const id=+req.params.id
    const productIndex=products.findIndex(p=>p.id===id)
    const pre=products[productIndex]
    products.splice(productIndex,1,{...pre,...req.body})
    res.json({type:"patch"})
 })
 
 //delete 
app.delete('/products/:id',(req,res)=>{
    const id = + req.params.id;
    const product=products.find(p=>p.id===id)
    products.splice(products.indexOf(product),1)
    res.json({"type":"deleted"})
})

app.listen(8080,()=>{
    console.log("server is started")
})

//C R U D