let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
let logoImg = document.getElementById("logo");


function toggleMenu() {
    let menuIcon = document.getElementById("menuIcon")  ;
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "400px";
        menuList.style.backgroundColor = "#FFFFFF";
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    } else {
        menuList.style.maxHeight = "0px";
        menuList.style.backgroundColor = "#FFFFFF";
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }
}


window.addEventListener('scroll', function() {
    let nav = document.querySelector('nav');
    let backToTop = document.getElementById('backToTop');
    nav.style.transition = 'all 0.3s';
    menuList.style.transition = 'all 0.3s';
    logoImg.style.transition = 'all 0.3s';
    if (window.scrollY > 10) {
        nav.style.height = '50px';
        nav.style.backgroundColor = "#FFFFFFd7";
        menuList.style.top = "50px";
        menuList.style.backgroundColor = "#FFFFFF";
        logoImg.style.height = "40px";
        backToTop.style.display = 'block';
    } else {
        nav.style.height = '80px';
        nav.style.backgroundColor = "#FFF";
        menuList.style.top = "80px";
        menuList.style.backgroundColor = "#FFF";
        logoImg.style.height = "60px";
        backToTop.style.display = 'none';
    }

    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercent = (scrollTop / scrollHeight) * 100;
    backToTop.style.background = `conic-gradient(#1b75bb ${scrollPercent}%, #e0e0e0 ${scrollPercent}%)`;
});

document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

