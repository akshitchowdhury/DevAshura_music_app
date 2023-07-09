//initialise song variables

let songIndex = 0;

let audioElement = new Audio('song-list/FOD.mp3')

// audioElement.play()

let masterPlay = document.getElementById("masterPlay")

let myProgressBar = document.getElementById("myProgressBar")

let gif = document.getElementById("gif")


let songs = [
    {songName : "Fear Of the Dark", songPath : "FOD.mp3", songCover : "cover1.jpg"},
    {songName : "Fear Of the Dark", songPath : "FOD.mp3", songCover : "cover1.jpg"},
    {songName : "Fear Of the Dark", songPath : "FOD.mp3", songCover : "cover1.jpg"},
    {songName : "Fear Of the Dark", songPath : "FOD.mp3", songCover : "cover1.jpg"},
    {songName : "Fear Of the Dark", songPath : "FOD.mp3", songCover : "cover1.jpg"}
]

//handle play/pause button

masterPlay.addEventListener('click', ()=>{

    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }

    else{
        audioElement.pause()

        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//Listen to events

audioElement.addEventListener("timeupdate", ()=>{

    //logic to calculate progress% and update the progress bar
   var progress = parseInt((audioElement.currentTime/audioElement.duration)*100);

    myProgressBar.value = progress;


})