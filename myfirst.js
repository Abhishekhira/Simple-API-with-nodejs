const fs=require('fs')
const data=require('./data')
const http=require('http')
const { json } = require('stream/consumers')
http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-type':'application/json'})
    resp.write(JSON.stringify(data))
    resp.end()
}).listen(5000)
console.log('hii file is attached')


