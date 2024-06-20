
let button = document.getElementById("button");
let audio = document.getElementById("audio");
let image = document.getElementById("guppy-image");
let flipInterval;
let flipped = false;
const interval = 375;
audio.volume = 0.4;

function flipImage() {
    flipped = !flipped;
    image.style.transform = flipped ? 'scaleX(-1)' : 'scaleX(1)';
}

function toggleFlipping() {
    if (flipInterval) {
        clearInterval(flipInterval);
        flipInterval = null;
    } else {
        flipInterval = setInterval(flipImage, interval);
    }
}

function resetAudio() {
    audio.currentTime = 0;
    audio.play();
}

button.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
    toggleFlipping();
});

audio.addEventListener("ended", () => {
    resetAudio();
});
