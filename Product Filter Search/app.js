var mockData = [{
    name: 'SP1',
    price: 100,
    pictureImg: 'pict1.jpg',
},
    {
        name: 'SP2',
        price: 100,
        pictureImg: 'pict2.jpg',
    },
    {
        name: 'SP3',
        price: 100,
        pictureImg: 'pict3.jpg',
    },
    {
        name: 'SP4',
        price: 100,
        pictureImg: 'pict4.jpg',
    },
    {
        name: 'SP5',
        price: 100,
        pictureImg: 'pict5.jpg',
    },
    {
        name: 'SP6',
        price: 100,
        pictureImg: 'pict6.jpg',
    }]

var products = document.querySelector('.products')

mockData.forEach((item) => {
    var newProduct =  document.createElement('div')
    newProduct.classList.add('product')
    newProduct.innerHTML = `<img src=${item.pictureImg} alt=""/>
                            <div class="info">
                                <div class="name">${item.name}</div>
                                <div class="price">${item.price}</div>
                            </div>`

    products.appendChild(newProduct)
})

var searchInput = document.querySelector('.search input')
searchInput.addEventListener('input', (e) => {
    let txtSearch = e.target.value.trim().toLowerCase()
    let listProductDOM = document.querySelectorAll('.product')
    listProductDOM.forEach(element => {
        if(element.innerText.toLowerCase().includes(txtSearch)){
            element.classList.remove('hide')
        }else{
            element.classList.add('hide')
        }
    })
})
