// var result = document.querySelector("#result");
//
//


let imgList = document.querySelectorAll('.zoomer img');
let mirror = document.querySelector('#mirror');
let scope = 4


imgList.forEach(function(img){
    img.addEventListener('mousemove', function(e) {
        mirror.classList.remove('hide')
        mirror.style.top = e.clientY + "px";
        mirror.style.left = e.clientX + "px";

        let w = this.offsetWidth
        let h = this.offsetHeight

        mirror.style.backgroundSize = `1000px 1000px`
        let mouseWithImgBorderX = e.offsetX
        let mouseWithImgBorderY = e.offsetY

        let percentMousebyW = (mouseWithImgBorderX / w) * 100;
        let percentMousebyH = (mouseWithImgBorderY / h) * 100;

        mirror.style.backgroundPosition = `${percentMousebyW}% ${percentMousebyH}%`;

        var imgSource = e.target.getAttribute('src')
        mirror.style.backgroundImage = `url(${imgSource})`
    })
    img.addEventListener('mouseleave', function(e){
        mirror.classList.add('hide')
    })
})
