document.getElementById("emoji").addEventListener("click", function () {
    const audio = document.getElementById("sound");
    audio.currentTime = 0;
    audio.play();
});