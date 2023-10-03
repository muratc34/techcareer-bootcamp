const navMenuBtn = document.querySelector(".nav-menu-btn");
const navMenu = document.querySelector(".nav-menu");

function trackSection() {
    var sections = document.querySelectorAll("section");

    sections.forEach(function (section) {
        var rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
            var sectionId = section.getAttribute("id");
            
            var links = document.querySelectorAll(".nav-link");
            links.forEach(function (link) {
                link.classList.remove("active");
            });

            var activeLink = document.querySelector('a[href="#' + sectionId + '"]');
            if (activeLink) {
                activeLink.classList.add("active");
                navMenu.classList.remove("show");
            }
        }
    });
}

window.addEventListener("load", trackSection);
window.addEventListener("scroll", trackSection);

navMenuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});