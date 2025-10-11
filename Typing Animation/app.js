var p = document.querySelector('.typing-wrapper p')
var originContent = p.innerHTML
var index = 0;
var isForward = true;
var time = 100
setInterval(function(){
    if(isForward){
        index++
        if(index >= originContent.length){
            isForward = false
        }
    }else{
        index--
        if(index <= 0){
            isForward = true
        }
    }
    p.innerHTML = originContent.substring(0, index)
}, time)
