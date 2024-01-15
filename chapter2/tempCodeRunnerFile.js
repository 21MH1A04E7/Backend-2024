const http=require('http')
//creating a server using node

const server=http.createServer((req,res)=>{
    console.log("server started");
})

server.Listen(8080)