"use strict"

let categories=document.querySelectorAll(".categoryname li a")
let product=document.querySelectorAll(".category-card .product")

const filterproduct=e=>{
    document.querySelector(".active").classList.remove("active")
    e.target.classList.add("active")
    product.forEach(card=>{
       card.classList.add("hide")
       if(card.dataset.name===e.target.dataset.name||e.target.dataset.name==="all"){
        card.classList.remove("hide")
       }
    })
}

categories.forEach(button=>button.addEventListener("click",filterproduct))

// categories.forEach(element => {
//     element.addEventListener("click",function(){
        
//         document.querySelector(".active").classList.remove("active")
//        // element.classList.add("active")
//         //element.classList.Add("active")

//     })
// });