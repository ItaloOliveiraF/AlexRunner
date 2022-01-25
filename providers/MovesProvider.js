function keyPressed(){
    const SPACE = 32
    if(keyCode == SPACE && tela == 'play' && !gameOver) {
        if(hero.velocity.y == 0){
            hero.velocity.y =  -15;
        }
    }
    if(gameOver && keyCode == SPACE) {
        newGame();
    }
}

function mouseClicked(){
    if(tela=='menu'){
        const playButtonAreaX = mouseX > 192-16 && mouseX < 256;
        const playButtonAreaY = mouseY < 256 + 16 && mouseY > 256-32;
      
        if(playButtonAreaX && playButtonAreaY){
            tela = 'play'
            gameOver = false
        }

        const helpButtonAreaX = mouseX > 170-16 && mouseX < 256+32;
        const helpButtonAreaY = mouseY < 320 + 16 && mouseY > 320-32;
        const helpButtonArea = helpButtonAreaY && helpButtonAreaX;
        
        if(helpButtonArea){
            tela = 'help'
        }
    }
}