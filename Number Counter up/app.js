var listCounter = document.querySelectorAll('.counter')

function counterUp(el) {
    var numberEl = el.querySelector('.number')
    var to = parseInt(el.querySelector('.number').innerText)
    var count = 0
    var time = 300;
    var step = to / time;
    let counting = setInterval(() => {
        count += step
        if(count > to){
            clearInterval(counting)
            numberEl.innerText = to
        }else{
            numberEl.innerText = Math.round(count)
        }
    }, 1);
}

listCounter.forEach((item) => {
    counterUp(item);
})
