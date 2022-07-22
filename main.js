let aboutMe = document.getElementById("about-me");
let footer = document.getElementById("footer");

aboutMe.addEventListener("click", expand);

function expand() {
    footer.classList.toggle("expand");
}

