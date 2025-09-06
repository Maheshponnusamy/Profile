// Main Hero Background
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() },
    shape: { type: "circle" },
    opacity: { value: 0.6 },
    size: { value: 3 },
    line_linked: { enable: true, color: getComputedStyle(document.documentElement).getPropertyValue('--accent').trim(), opacity: 0.3 },
    move: { speed: 1.5 }
  }
});


// Projects Section Background
particlesJS("projects-bg", {
  particles: {
    number: { value: 50 },
    color: { value: getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() },
    shape: { type: "circle" },
    opacity: { value: 0.4 }, // slightly lighter than hero
    size: { value: 2 },
    line_linked: { enable: true, color: getComputedStyle(document.documentElement).getPropertyValue('--accent').trim(), opacity: 0.25 },
    move: { speed: 1 }
  }
});


// Typed.js Effect
new Typed('#typed', {
    strings: ["Technical Support Engineer","Product Support", "Client Service",],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
});

// Fade-in on Scroll
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });
    elements.forEach(el => observer.observe(el));
});

// Navbar Active Link Highlight
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 70;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
