const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu');
    const links = document.querySelectorAll ('.links li');
    
    burger.addEventListener('click',() => {
        nav.classList.toggle('menu-active');
        links.forEach((link, index) => {
            if (link.style.animaton) {
                link.style.animation = '';
            } else {
                link.style.animation = 'links-fade 0.5s ease forwards $(index / 7 +2}s'} 
        });
        burger.classList.toggle('toggle');
});
    }
navSlide();

function _class(name){
    return document.getElementsByClassName(name);
}
let tabPanes = _class("tab-header")[0].getElementsByTagName("div");

for(let i=0;i<tabPanes.length;i++){
    tabPanes[i].addEventListener("click", function(){
        _class("tab-header")[0].getElementsByClassName("active")
    [0].classList.remove("active");
    tabPanes[i].classList.add("active");

    _class("tab-indicator")[0].style.top = `calc(0px + ${i*50}px)`;

    _class("tab-content")[0].getElementsByClassName("active")
    [0].classList.remove("active");

    _class("tab-content")[0].getElementsByTagName("div")
    [i].classList.add("active");
});
}