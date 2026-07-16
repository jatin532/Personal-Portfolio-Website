

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (menu.classList.contains("fa-bars")) {
        menu.classList.remove("fa-bars");
        menu.classList.add("fa-xmark");
    } else {
        menu.classList.remove("fa-xmark");
        menu.classList.add("fa-bars");
    }
});

// =========================
// Close Menu on Link Click
// =========================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menu.classList.remove("fa-xmark");
        menu.classList.add("fa-bars");

    });

});

// =========================
// Typing Animation
// =========================

const words = [
    "Frontend Developer",
    "Java Programmer",
    "React Developer",
    "Python Learner",
    "Full Stack Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();

// =========================
// Active Navbar on Scroll
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// =========================
// Fade In Animation on Scroll
// =========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".about-container, .skill-card, .project-card, .edu-card, .contact form"
).forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(60px)";
    item.style.transition = "all .8s ease";

    observer.observe(item);

});

// =========================
// Current Year in Footer
// =========================

const footer = document.querySelector("footer p");

footer.innerHTML =
    `© ${new Date().getFullYear()} Jatin Chaudhary | Designed with ❤️ using HTML, CSS & JavaScript.`;