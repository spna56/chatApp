var express=require('express')
var app=express()
var socket=require('socket.io')

 var server=app.listen(4000,()=>{
     console.log('server has started')
 })


 //static file
 app.use(express.static('public'))

 //socket setup

 var io=socket(server)  

 io.on("connection",(socket)=>{   
    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data)
    })

    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data)
    })

 })