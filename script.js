//initialise song variables

let songIndex = 0;

let audioElement = new Audio('song-list/FOD.mp3')

// audioElement.play()

let masterPlay = document.getElementById("masterPlay")

let myProgressBar = document.getElementById("myProgressBar")

let gif = document.getElementById("gif")

let songItems = Array.from(document.getElementsByClassName("songItem"))


let songs = [
    {songName : "Fear Of the Dark", songPath : "song-list/FOD.mp3", songCover : "covers/cover1.jpg"},
    {songName : "Wicker Man", songPath : "song-list/WM.mp3", songCover : "covers/cover2.jpg"},
    {songName : "Rime of the ancient miranor", songPath : "song-list/Rime.mp3", songCover : "covers/cover3.jpg"},
    {songName : "Phantom of Opera", songPath : "song-list/POO.mp3", songCover : "covers/cover4.jpg"},
    {songName : "Flight of Icarus", songPath : "song-list/FOI.mp3", songCover : "covers/cover5.jpg"},
]



songItems.forEach((element, i)=>{

    console.log(element, i)
    document.getElementsByClassName("cover")[i].src = songs[i].songCover
    
    document.getElementsByClassName("songName")[i].innerText = songs[i].songName
    })

    // for(var i=0 ; i<songs.length; i++){

    //     document.getElementsByClassName("cover")[i].src = songs[i].songCover
    
    // document.getElementsByClassName("songName")[i].innerText = songs[i].songName
    // }

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
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);

    myProgressBar.value = progress;


})



myProgressBar.addEventListener('change', ()=>{

    audioElement.currentTime = ((myProgressBar.value*audioElement.duration)/100)
})

