function drawMenu(){

    changeSound('menu', true);
    
    cursor(ARROW);

    fill('#A31A15');
    textSize(36);
    text("ALEX RUNNER", 96, 128);

    textSize(18);
    text("Jogar", 192, 256);

    textSize(18);
    text("Instruções", 170, 320);

    const playButtonAreaX = mouseX > 192-16 && mouseX < 256;
    const playButtonAreaY = mouseY < 256 + 16 && mouseY > 256-32;
    const playButtonArea = playButtonAreaY && playButtonAreaX;
    
    if(playButtonArea){
        cursor(HAND);
        fill('#e9e95b');
        text("Jogar", 192, 256);
    }

    const helpButtonAreaX = mouseX > 170-16 && mouseX < 256+32;
    const helpButtonAreaY = mouseY < 320 + 16 && mouseY > 320-32;
    const helpButtonArea = helpButtonAreaY && helpButtonAreaX;
    
    if(helpButtonArea){
        cursor(HAND);
        fill('#e9e95b');
        text("Instruções", 170, 320);
    }
}