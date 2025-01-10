let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
let logoImg = document.getElementById("logo");


function toggleMenu() {
    let menuIcon = document.getElementById("menuIcon")  ;
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "400px";
        menuList.style.backgroundColor = "#FFFFFFD7";
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    } else {
        menuList.style.maxHeight = "0px";
        menuList.style.backgroundColor = "#FFFFFFD7";
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }
}


window.addEventListener('scroll', function() {
    let nav = document.querySelector('nav');
    nav.style.transition = 'all 0.3s';
    menuList.style.transition = 'all 0.3s';
    logoImg.style.transition = 'all 0.3s';
    if (window.scrollY > 10) {
        nav.style.height = '50px';
        nav.style.backgroundColor = "#FFFFFFd7";
        menuList.style.top = "50px";
        menuList.style.backgroundColor = "#FFFFFFd7";
        logoImg.style.height = "40px";
    } else {
        nav.style.height = '80px';
        nav.style.backgroundColor = "#FFF";
        menuList.style.top = "80px";
        menuList.style.backgroundColor = "#FFF";
        logoImg.style.height = "60px";
    }
});