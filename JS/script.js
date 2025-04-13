
// Typing Effect
const words = ["a Web Developer", "a Designer", "a Problem Solver"];
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
