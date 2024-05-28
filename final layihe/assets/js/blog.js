let input=document.querySelector(".recent-post input");

input.addEventListener("click",function(){
  
    input.parentElement.style.border="1px solid blue "

})
input.addEventListener("blur",function(){
  
    input.parentElement.style.border="none"

})