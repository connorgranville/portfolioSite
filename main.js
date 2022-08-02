let footerTitle = document.getElementById("footer-title");
let aboutMeText = "ABOUT ME && CONTACT";
let footerText = "website created && maintained by Connor Granville";
let footer = document.getElementById("footer");
let widthText = document.getElementById("width");

const expand = () => {
    footer.classList.toggle("expand");
}

const resize = () => {
    widthText.innerHTML = window.innerWidth;

    if (window.innerWidth > 550) {
        footerTitle.removeEventListener("click", expand);
    } else {
        footerTitle.addEventListener("click", expand);
    }

    if (window.innerWidth > 550) {
        footerTitle.innerHTML = footerText;
    } else {
        footerTitle.innerHTML = aboutMeText;
    }
};

if (window.innerWidth > 550) {
    footerTitle.innerHTML = footerText;
} else {
    footerTitle.innerHTML = aboutMeText;
};

widthText.innerHTML = window.innerWidth;
footerTitle.addEventListener("click", expand);
window.addEventListener("resize", resize);