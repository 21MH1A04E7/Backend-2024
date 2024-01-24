// const express=require('express')
// const fs=require('fs')

// const data=JSON.parse(fs.readFileSync('./data.json','utf-8'))

// const product=data.products

// //creating a server
// const server=express();

// //get method use to fetch the data
// server.get('/demo',(req,res)=>{
//     //sending the data
//     // res.send("<h1>hariom</h1>")
//     //we can send the file//path must be absolute
//     // res.sendFile('E:\BACKEND@2024\index.html')


//     //sending json data
//     res.json(product)
    
//     //we can send the sataus
//     // res.sendStatus(200)

//     //we can send the error
//     // res.sendStatus(404)
// })


// //we can write the call back
// server.listen(8080,()=>{
//     console.log("server started")
// })

// const express=require('express')
// const fs=require('fs')

// const data=JSON.parse(fs.readFileSync('./data.json','utf-8'))
// const product=data.products

// //creating a server
// const app=express()

// //middleware
// //application leve middleware
// //use the meddleware
// app.use((req,res,next)=>{

//     //logger
//     //request method
//     console.log(req.method ,req.ip,req.hostname,new Date(),req.get('User-agent'))
    
//     //calling next
//     next()
// })

// //api -- endpoint
// //this is not rest api
// app.get('/',(req,res)=>{
//     res.json({type:'Get'})
// })

// app.post('/',(req,res)=>{
//     res.json({type:'Post'})
// })

// app.put('/',(req,res)=>{
//     res.json({type:'Put'})
// })

// app.patch('/',(req,res)=>{
//     res.json({type:'Patch'})
// })

// app.delete('/',(req,res)=>{
//     res.json({type:'delete'})
// })

// app.listen(8080,()=>{
//     console.log("server started")
// })

// const express=require('express')

// const fs=require('fs')

// const data=JSON.parse(fs.readFileSync('./data.json','utf-8'))

// const product=data.products

// //creating server
// const app=express()

// const auth=(req,res,next)=>{
//    console.log(req.query)
//     if(req.query.password==123){
//         next()
//     }else{
//         res.sendStatus(401)
//     }
// }

// //middleware
// app.use(auth)

// app.get('/',(req,res)=>{
//     res.json({type:"Get"})
// })

// app.post('/',(req,res)=>{
//     res.json({type:"Post"})
// })

// app.put('/',(req,res)=>{
//     res.json({type:"put"})
// })

// app.patch('/',(req,res)=>{
//     res.json({type:"patch"})
// })

// app.delete('/',(req,res)=>{
//     res.json({type:"delete"})
// })
// app.listen(8080,()=>{
//     console.log("server is started")
// })

const express=require('express')

const fs=require('fs')

const data=JSON.parse(fs.readFileSync('./data.json','utf-8'))

const product=data.products

//creating server
const app=express()

const auth=(req,res,next)=>{
   console.log(req.query)
    if(req.query.password==123){
        next()
    }else{
        res.sendStatus(401)
    }
}

//middleware
// app.use(auth)

//router level meddleware
app.get('/',auth,(req,res)=>{
    res.json({type:"Get"})
})

app.post('/',auth,(req,res)=>{
    res.json({type:"Post"})
})

app.put('/',(req,res)=>{
    res.json({type:"put"})
})

app.patch('/',(req,res)=>{
    res.json({type:"patch"})
})

app.delete('/',(req,res)=>{
    res.json({type:"delete"})
})
app.listen(8080,()=>{
    console.log("server is started")
})

/*
Middleware functions are functions that have access to the request object (req),
the response object (res), and the next function in the application’s request-response cycle
//use of middleware
Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware in the stack.

type of meddleware
1 application level meddleware
2 router level middleware
3 error handing middleware
4 built in middleware
5 third party middleware
*/