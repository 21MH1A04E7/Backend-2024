// const http=require('http')

//importing file system module
// const fs=require('fs')
// //reading the file (static file)
// const indexhtml=fs.readFileSync('./index.html','utf-8')

// // creating server
// const server=http.createServer((req,res)=>{
//     console.log('hariom')
//     res.setHeader('Content-type','text.html')
//     //sending the file
//     res.end(indexhtml)
// })

// //port no
// server.listen(8080)

//json

// const http=require('http')

// const fs=require('fs')

// //reading index.html file
// const index=fs.readFileSync('./index.html','utf-8')

// //data.json file
// const data=fs.readFileSync('./data.json','utf-8')//blocking 
// // console.log(data)


// const server=http.createServer((req,res)=>{

//     res.setHeader('Content-type','text/html')
//     res.setHeader('Content-type','application.json')
//    res.end(data)
// })

// server.listen(8080)

//==============

//web server using node js
const http=require('http')

const fs=require('fs')
const index=fs.readFileSync('./index.html','utf-8')
const data=fs.readFileSync('./data.json','utf-8')

const server=http.createServer((req,res)=>{
    console.log(req.url)
    switch(req.url){
        case '/':
            res.setHeader('Content-type','text/html')
            res.end(index)
            break;
        case '/api':
            res.setHeader('Content-type','application.json')
            res.end(data)
            break;
        default:
            res.writeHead(404,'Not found')
            res.end()
            break;
    }
    //here u wii get error (because u have sended response two time)
    // res.end(index)
})

server.listen(8080)