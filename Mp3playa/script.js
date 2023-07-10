//initialise song variables

let songIndex = 0;

let audioElement = new Audio('song-list/0.mp3')

let songBanner = document.getElementById("songBanner")


// audioElement.play()

let masterPlay = document.getElementById("masterPlay")

let myProgressBar = document.getElementById("myProgressBar")

let gif = document.getElementById("gif")

let songItems = Array.from(document.getElementsByClassName("songItem"))


var songs = [
    {songName : "Fear Of the Dark", songPath : "song-list/0.mp3", songCover : "covers/cover1.jpg"},
    {songName : "Flight of Icarus", songPath : "song-list/1.mp3", songCover : "covers/cover2.jpg"},
    {songName : "Wicker Man", songPath : "song-list/2.mp3", songCover : "covers/cover3.jpg"},
    {songName : "Phantom of Opera", songPath : "song-list/3.mp3", songCover : "covers/cover4.jpg"},
    {songName : "Rime of the ancient miranor", songPath : "song-list/4.mp3", songCover : "covers/cover5.jpg"},
]



songItems.forEach((element, i)=>{

    // console.log(element, i)
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


const makeAllPlays =function(){ Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    
                    
    element.classList.add('fa-play-circle')

    element.classList.remove('fa-pause-circle')
    console.log(element)

})

}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{

    element.addEventListener('click', (e)=>{

        // console.log(e)
        makeAllPlays()
  
        

    // var mode = function(){   for(var i =0 ; i< document.querySelector("i .songItemPlay "); i++){

    //             document.querySelector(".songItemPlay #"+i)

    //    }
    // }

    
    // var index = document.getElementsByClassName("songItemPlay")[e].src

    
    var songIndex = parseInt(e.target.id)

    
        e.target.classList.remove('fa-play-circle')
        
        e.target.classList.add('fa-pause-circle')

        audioElement.src = "song-list/"+songIndex+".mp3"
        audioElement.currentTime = 0;

        audioElement.play()

        masterPlay.classList.remove('fa-play-circle')
        
        masterPlay.classList.add('fa-pause-circle')
  
    })



      
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>= 4){

        songIndex = 0
    }

    else{
        songIndex = songIndex+1
    }

    
    audioElement.src = "song-list/"+songIndex+".mp3"

    audioElement.currentTime = 0;

    audioElement.play()

    masterPlay.classList.remove('fa-play-circle')
    
    masterPlay.classList.add('fa-pause-circle')

    songBanner.innerText = songs[songIndex].songName



})





document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<= 0){

        songIndex =0
    }

    else{
        songIndex -=1
    }

    
    audioElement.src = "song-list/"+songIndex+".mp3"

    audioElement.currentTime = 0;

    audioElement.play()

    masterPlay.classList.remove('fa-play-circle')
    
    masterPlay.classList.add('fa-pause-circle')

    
    songBanner.innerText = songs[songIndex].songName
})

