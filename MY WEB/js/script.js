// LOADING SCREEN
window.onload = function () {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("enable-sound-btn").style.display = "block";
    }, 2000);
};

// TYPING EFFECT
const text = "Hello, I'm JNR TECH!";
let index = 0;
function typeEffect() {
    document.querySelector(".typing").textContent = text.slice(0,index);
    index++;
    if(index<=text.length) setTimeout(typeEffect,80);
}
typeEffect();

// MUSIC ENABLE
const music = document.getElementById("bg-music");
document.getElementById("enable-sound-btn").onclick = () => {
    music.play();
    document.getElementById("enable-sound-btn").style.display = "none";
};

// DARK MODE TOGGLE
document.querySelector(".theme-toggle").onclick = () => {
    document.body.classList.toggle("dark");
};
