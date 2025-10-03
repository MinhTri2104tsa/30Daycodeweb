var upload = document.querySelector('#mypicture')
var preview = document.querySelector('.preview')
var error = document.querySelector('.error')

upload.addEventListener('change', (e) => {


    var file = upload.files[0]

    if(!file){
        return
    }
    if(!file.name.endsWith('.jpg')){
        error.innerHTML = `Hình ảnh phải thuộc định dạng jpg`
        return
    }else{
        error.innerHTML = ``
    }

    if(!file.size / (1024 * 1024) > 5){
        error.innerHTML = `Chỉ được upload ảnh < 5MB`
        return
    }else{
        error.innerHTML = ``
    }
    var fileReader = new FileReader()
    var img = document.createElement('img')

    fileReader.readAsDataURL(file)

    fileReader.onloadend = function (e) {
        img.src = e.target.result
    }

    // img.src = URL.createObjectURL(file)
    preview.appendChild(img)

})