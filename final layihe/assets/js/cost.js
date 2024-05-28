
let products = [
    {
        name: 'aloe vera',
        price: 200,
        inCart:0,
    },
    {
        name: 'tulpan',
        price: 500,
        inCart:0,
    },
    {
        name: 'qizilgul',
        price: 150,
        inCart:0,
    },
    {
        name: 'salam',
        price: 1000,
        inCart:0,
    },
]




let cart = document.querySelectorAll(".addToCart")
console.log(cart);
for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click',() => {
        totalCost(products[i])
        cartNumbers(products[i])

    })            
}

function cartNumbers (product){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers=parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers',productNumbers+1);
        document.querySelector('.countItem').textContent=productNumbers+1
    }
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.countItem').textContent=1;
    }
}

function totalCost (product) {
    let cartCost = localStorage.getItem('totalCost')

    if(cartCost !=null) {
        cartCost = parseInt(cartCost)
        localStorage.setItem('totalCost', cartCost+product.price)
    }
    else {
        
        localStorage.setItem('totalCost', product.price)
    }
    // document.querySelector('.totals').innerHTML = localStorage.getItem('totalCost', cartCost+product.price);
    document.querySelector('.salam').innerHTML = cartCost
}







// const addToCart = document.getElementsByClassName('addToCart');
// console.log(addToCart);
// for (let i=0; i < addToCart.length; i++) {
//     addToCart[i].addEventListener('click', function (e){
//         console.log(e.target);
//     })
// }
// if (typeof(Storage) !=='undefined'){

// }
// else{
//     console.log('salam');
// }































