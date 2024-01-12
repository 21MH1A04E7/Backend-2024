//filesystem module
const fs=require('fs')
// Synchronously read the contents of 'demo.txt'
//blocking code
// console.log('hello')

// syntax
// fs.readFileSync('file_path','coding')
const data=fs.readFileSync('./data.txt','utf-8')

console.log(data);
console.log('File reading operation completed synchronously.');

//---//


// Asynchronous Code //
//nonblocking code
// console.log('hello')

//**syntax
//fs.readFile('file_path','coding',call_back_fun(err,res))
// fs.readFile('./data.txt','utf-8',(err,res)=>{
//     console.log(res)
// })

// console.log('File reading operation completed synchronously.');