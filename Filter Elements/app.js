var imgList  = document.querySelectorAll('img');
var foodContainer = document.querySelector('.food-container');
var btnList = document.querySelectorAll('button');


//Cách 2
var arr = []
imgList.forEach(function(item){
    arr.push({
        src: item.src,
        type: item.getAttribute('type')
    })
})

function  activeBtn(btn){
    btnList.forEach(btn =>{
        btn.classList.remove('active')
    })
    btn.classList.add('active')
}

btnList.forEach(btn =>{
    btn.addEventListener('click', function(e){

        //active button
        activeBtn(e.currentTarget)


        //filter data
        let type = e.currentTarget.getAttribute('type')
        if(type == 'all'){
            render(arr)
            return
        }
        let filterList = arr.filter(food =>{
            return food.type == type
        })
        render(filterList)
    })
})

function  render(list){
    foodContainer.innerHTML = ''
    list.forEach(item=>{
        let imgElement = document.createElement('img')
        imgElement.src = item.src
        imgElement.setAttribute('type', item.type)
        let divElement = document.createElement('div')
        divElement.classList.add('food')
        divElement.append(imgElement)
        foodContainer.append(divElement)
        }
    )
}




//Cách 1

// btnList.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         let type =  e.currentTarget.getAttribute("type")
//
//         imgList.forEach(function(img){
//             let foodType = img.getAttribute('type')
//             if(type == 'all' || foodType == type){
//                 img.classList.remove('hide')
//             }else{
//                 img.classList.add('hide')
//             }
//         })
//     })
// })