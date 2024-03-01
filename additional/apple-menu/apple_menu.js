/* @okimoon Copyright 2024 Fonticons, Inc. */
document.addEventListener('DOMContentLoaded', ()=>{
    var burger = document.querySelector('.apple-menu .mobile-container'),
    header = document.querySelector('.apple-menu');
    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
});