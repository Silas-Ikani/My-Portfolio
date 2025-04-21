// Navbar Scroll Effect
window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});



// Navbar responsiveness
function toggleMenu() {
    const links = document.getElementById("navLinks");
    links.classList.toggle("active");
}


// Typing Effect
const words = ["a Web Developer", "Tech Enthusiast", "a Problem Solver"];
let wordIndex = 0;
let charIndex = 0;
let typingText = document.querySelector(".typing-text");

const typeEffect = () => {
    if (charIndex < words[wordIndex].length) {
        typingText.innerHTML = words[wordIndex].substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 2000);
    }
};

const eraseEffect = () => {
    if (charIndex > 0) {
        typingText.innerHTML = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000);
});

// reveal effect
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
  
    reveals.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
  
      if (elementTop < windowHeight - 100) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

//   Reveal zoom effect
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
  
    reveals.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
  
      if (elementTop < windowHeight - 100) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); 



  let year = new Date().getFullYear().toString();
  document.getElementById("year").innerHTML = year;
  
