let button = document.querySelector('.reviews__button');
let block = document.querySelector('.reviews__main');  
let cross = document.querySelector('.reviews__close');
 
button.onclick = function() {
    if (block.classList.contains("show")){
        block.classList.remove("show");
    } else {
        block.classList.add("show");
    }
}
    

cross.onclick = function() {
    block.classList.remove("show");
}

window.onclick = function(event) {
    if (event.target == block) {
        block.classList.remove("show");
    }
}