const clock = document.querySelector('.time-box')
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
    
},1000)