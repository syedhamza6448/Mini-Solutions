document.querySelectorAll('.card').forEach(serviceCard => {
    let liquid = serviceCard.querySelector('.liquid');

    serviceCard.addEventListener('mouseover', function() {
        liquid.classList.add('hovered');
        serviceCard.style.border = "none";
        serviceCard.style.backgroundColor = "#1b76bb3d";
    });

    serviceCard.addEventListener('mouseout', function() {
        liquid.classList.remove('hovered');
        serviceCard.style.border = "2px solid #1b75bb";
        serviceCard.style.backgroundColor = "transparent";
    });
});

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelectorAll("ul.marquee-content");

marqueeContent.forEach(content => {
    root.style.setProperty("--marquee-elements", content.children.length);

    for(let i=0; i<marqueeElementsDisplayed; i++) {
        content.appendChild(content.children[i].cloneNode(true));
    }
});

function showIcons(category) {
    document.querySelectorAll('.icon-category').forEach(iconCategory => {
        iconCategory.classList.remove('active');
    });
    document.getElementById(category).classList.add('active');

    document.querySelectorAll('.tech-categories li').forEach(li => {
        li.classList.remove('active');
    });
    document.querySelector(`.tech-categories li[onclick="showIcons('${category}')"]`).classList.add('active');

    document.querySelector('.tech-icons').classList.add('active');
}

// Set default category to display
document.addEventListener('DOMContentLoaded', () => {
    showIcons('languages');
});
