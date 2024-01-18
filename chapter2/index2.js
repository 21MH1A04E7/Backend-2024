// const http=require('http')
// const fs=require('fs')

// const index=fs.readFileSync('./index.html','utf-8')
// const data=JSON.parse(fs.readFileSync('./data.json','utf-8'))

// const product=data.products[0]
// const server=http.createServer((req,res)=>{
//     console.log(req.url)
//     switch(req.url){
//         case '/':
//             res.setHeader('Content-type','text/html')
//             res.end(index)
//             break;
//         case '/api':
//             res.setHeader('Content-type','application.json')
//             //server allways deals in string
//             res.end(JSON.stringify(data))
//             break;
//         case '/product':
//             res.setHeader('Content-type','text/html')
//             let modifeIndex=index.replace('**name**',product.title)
//                             .replace('**price**',`$${product.price}`)
//                             .replace("**img**",product.images[0])
//                             .replace('**discount**',`Save ${product.discountPercentage} with code DISCOUNT10`)
//             res.end(modifeIndex)
//             break;    
//         default:
//             res.writeHead(404,'Not found')
//             res.end()
//             break;
//     }
// })

// server.listen(8080)//port number


const http=require('http')

const fs=require('fs')

const index=fs.readFileSync('./index.html','utf-8')
const data=JSON.parse(fs.readFileSync('./data.json','utf-8'))

const product=data.products

const server=http.createServer((req,res)=>{
    if(req.url.startsWith('/product')){
        const id=req.url.split('/')[2]//second index
        console.log(id,req.method)
        //(+id) convering into number
        const prd=product.find(p=>p.id==(+id))
        // console.log(prd)
        // console.log(arr)
        // console.log(req.url)
             res.setHeader('Content-type','text/html')
            let modifeIndex=index.replace('**name**',prd.title)
                            .replace('**price**',`$${prd.price}`)
                            .replace("**img**",prd.images[0])
                            .replace('**discount**',`Save ${prd.discountPercentage} with code DISCOUNT10`)
            res.end(modifeIndex)  
        // res.end(JSON.stringify(prd))  
    }
    // switch(req.url){
    //     case '/':
    //         res.setHeader('Content-type','text/html')
    //         res.end(index)
    //         break;
    //     case '/api':
    //          res.setHeader('Content-type','application.json')
    //         //server allways deals in string
    //         res.end(JSON.stringify(data))
    //         break;
    //     default:
    //         res.setHeader('Content-type','text/html')
    //         res.end(index)
    //         break;
    // }
})

server.listen(8080)