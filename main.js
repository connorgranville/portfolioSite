let aboutMe = document.getElementById("about-me-mobile");
let aboutMeText = "ABOUT ME && CONTACT";
let footer = document.getElementById("footer");

aboutMe.innerHTML = aboutMeText;
aboutMe.addEventListener("click", expand);

function expand() {
    footer.classList.toggle("expand");

    //doesn't work yet -- changes text
    if(aboutMe.innerHTML === aboutMeText) {
        aboutMe.innerHTML = "VV CLOSE ME VV";
    } else {
        aboutMe.innerHTML = aboutMeText;
    }
}

