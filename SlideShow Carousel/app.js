var imgFeature = document.querySelector('.img-feature')
var listImg = document.querySelectorAll('.list-image img')
var prevBtn = document.querySelector('.prev')
var nextBtn = document.querySelector('.next')

var currentIndex = 0;

function updateImagebyIndex(index) {
    document.querySelectorAll('.list-image div').forEach(img => {
        img.classList.remove('active')
    })
    currentIndex = index
    imgFeature.src = listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('active')
}

listImg.forEach((item , index) => {
    item.addEventListener('click', (e) => {
        imgFeature.style.opacity = '0'

        setTimeout(()=>{
            updateImagebyIndex(index)
            imgFeature.style.opacity = '1'
        },200)
    })
})

prevBtn.addEventListener('click', (e) => {

    imgFeature.style.animation = ''

    if(currentIndex == 0){
        currentIndex = listImg.length - 1
    }else{
        currentIndex -= 1
    }
    setTimeout(()=>{
        updateImagebyIndex(currentIndex)
        imgFeature.style.animation = 'slideLeft 1s ease-in-out forwards'
    },200)
})
nextBtn.addEventListener('click', (e) => {
    if(currentIndex == listImg.length - 1){
        currentIndex = 0
    }else{
        currentIndex += 1
    }
    imgFeature.style.animation = ''
    setTimeout(()=>{
        updateImagebyIndex(currentIndex)
        imgFeature.style.animation = 'slideRight 1s ease-in-out forwards'
    },200)
})
updateImagebyIndex(0)