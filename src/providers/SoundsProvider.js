
var menuSong, playSong, gameOverSong;
var soundPlaying, soundPlayingType;

function loadSounds(){
    menuSong = loadSound('assets/mushroom dance_0.ogg');
    gameOverSong = loadSound('assets/qubodup-crash.ogg');
    playSong = loadSound('assets/sky run.mp3');
  
}

function changeSound(sound, loop = false){
    if(soundPlayingType != sound){

        if(soundPlaying){
            if(soundPlaying.isPlaying()){
                soundPlaying.stop();
            }
        }

        if(sound == 'menu'){
            soundPlaying = menuSong;
        } else if(sound == 'play'){
            soundPlaying = playSong;
        } else if(sound == 'gameOver'){
            soundPlaying = gameOverSong;
        }

        soundPlaying.play();
        soundPlaying.setLoop(loop);
        
        if(sound == 'play'){
            soundPlaying.jump(10)
        }

        soundPlayingType = sound;
    }
}
