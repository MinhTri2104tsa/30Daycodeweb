var color = document.querySelector('#color');
var eraser = document.querySelector('#eraser');
var decrease = document.querySelector('#decrease');
var increase = document.querySelector('#increase');
var size = document.querySelector('#size');
var save = document.querySelector('#save');
var clear = document.querySelector('#clear');
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');


var currentPos = {
    x: 0,
    y: 0
}
var currentPosAfter = {
    x: 0,
    y: 0
}
var isDrawing = false;
var colorPaint = '#000000';

var sizePaint = 5
size.innerText = sizePaint

document.addEventListener('mousedown', function(e){
    currentPos = {
        x: e.offsetX,
        y: e.offsetY
    }
    isDrawing = true;
})
document.addEventListener('mousemove', function(e){
    if(isDrawing){
        currentPosAfter = {
            x: e.offsetX,
            y: e.offsetY
        }

        // fill net ve
        ctx.beginPath();
        ctx.arc(currentPos.x,currentPos.y,sizePaint,0,2*Math.PI);
        ctx.fillStyle = colorPaint
        ctx.fill();

        //ve outline
        ctx.beginPath();
        ctx.moveTo(currentPos.x, currentPos.y);
        ctx.lineTo(currentPosAfter.x,currentPosAfter.y);
        ctx.strokeStyle = colorPaint;
        ctx.lineWidth = sizePaint *2;
        ctx.stroke()



        currentPos.x = currentPosAfter.x;
        currentPos.y = currentPosAfter.y;
    }
})

document.addEventListener('mouseup', function(e){
    isDrawing = false;
})

color.addEventListener('change', function(e){
    colorPaint = e.target.value;
})

eraser.addEventListener('click', function(e){
    colorPaint = '#ffffff'
})

decrease.addEventListener('click', function(e){
    sizePaint -= 5
    sizePaint = sizePaint > 5 ? sizePaint : 5
    size.innerText = sizePaint
})
increase.addEventListener('click', function(e){
    sizePaint += 5
    sizePaint = sizePaint < 30 ? sizePaint : 30
    size.innerText = sizePaint
})

clear.addEventListener('click', function(e){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

save.addEventListener('click', function(e){
    var output = canvas.toDataURL('image/png');
    save.setAttribute('href', output);
    save.click()
})