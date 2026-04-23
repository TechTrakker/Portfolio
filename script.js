 // Typed text
const typed = new Typed('#typed-text', {
    strings: [
        'Full-Stack Developer',
        'Laravel Developer',
        'Frontend Developer'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Mobile Menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu on click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});

// Scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if(window.scrollY > 50){
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "none";
    }
});
