var socket=io.connect('http://localhost:4000')

//dom query
var message=document.getElementById("message")
var handle=document.getElementById("handle")
var btn=document.getElementById("send")
var output=document.getElementById("output")
var feedback=document.getElementById("feedback")

//handle event
btn.addEventListener('click',()=>{
    
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    })
    
   
    
})




message.addEventListener('keypress',()=>{
    socket.emit('typing',handle.value)
})

socket.on('typing',(data)=>{
    feedback.innerHTML='<p><em>'+data+ ' is typing </em> </p>'
})
 

    socket.on('chat',(data)=>{
        message.value=''
        feedback.innerHTML=""
        output.innerHTML+='<p><strong>'+data.handle+': </strong>'+data.message+'</p>'

  
})