let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
    let menuIcon = document.getElementById("menuIcon").children[0];
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "400px";
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
    } else {
        menuList.style.maxHeight = "0px";
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    }
}


window.addEventListener('scroll', function() {
    let nav = document.querySelector('nav');
    nav.style.transition = 'height 0.3s';
    if (window.scrollY > 10) {
        nav.style.height = '70px';
        nav.style.backgroundColor = "#1d1d1fd7"
    } else {
        nav.style.height = '80px';
        nav.style.backgroundColor = "#1d1d1f"
    }
});