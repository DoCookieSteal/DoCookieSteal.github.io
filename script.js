// songs
const songs = ['music.mp3', 'music1.mp3', ' music2.mp3']; // Add your song files here
let currentSongIndex = 0; // Index of the current song

function playNextSong() {
    // new audio element
    var audio = new Audio(songs[currentSongIndex]);
    
    // audio player
    audio.loop = false; // Don't loop the song itself
    audio.volume = 0.4;

    // When song ends, play the next song
    audio.addEventListener('ended', () => {
        // next song in the array
        currentSongIndex = (currentSongIndex + 1) % songs.length; // Loops back to the first song when reaching the end
        playNextSong(); //play next song
    });

    audio.play(); // Start playing song
}

function userHasClicked() {
    document.getElementById("flexboxcontainer").style.display = "none";
    document.getElementById("flexboxcontainer").style.width = 0;
    document.getElementById("flexboxcontainer").style.height = 0;

    const hiddenContainer = document.getElementById("hiddencontainer");

    hiddenContainer.style.display = "flex";

    playNextSong(); // Start autoplay when click

    setTimeout(() => {
        hiddenContainer.style.opacity = 1;
    }, 50);
}

function updateFlicker() {
    const randomOpacity = Math.random() * 0.75 + 0.75;

    const flickerTexts = document.querySelectorAll('.flickertext').forEach(element => {
        element.style.setProperty('--rand', randomOpacity);
    });
}

setInterval(updateFlicker, 500);
