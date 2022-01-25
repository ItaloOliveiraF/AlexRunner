//Hero

var heroStop; //Imagem do herói parado
var heroRun; //Sprite do herói correndo

var groundImg;
var subgroundImg;

var enemy1Img;
var enemy2Img;
var enemy3Img;

var bg1;
var bg2;
var bg3;
var bg4;

// Ground

function loadGameSprites(){
    heroStop = loadImage('assets/hero_stop.png');
    heroRun = loadAnimation(
    'assets/hero_run_1.png',
    'assets/hero_run_2.png',
    'assets/hero_run_3.png',
    'assets/hero_run_4.png', 
    'assets/hero_run_5.png', 
    'assets/hero_run_6.png', 
    'assets/hero_run_7.png', 
    'assets/hero_run_8.png',
    'assets/hero_run_9.png',
    'assets/hero_run_10.png',
    'assets/hero_run_11.png',
    'assets/hero_run_12.png',
    'assets/hero_run_13.png',
    'assets/hero_run_14.png',
    'assets/hero_run_15.png',
    'assets/hero_run_16.png');

    groundImg = loadImage('assets/ground_1.png');
    subgroundImg = loadImage('assets/ground_2.png');

    enemy1Img = loadImage('assets/enemy_1.png');
    enemy2Img = loadImage('assets/enemy_2.png');
    enemy3Img = loadImage('assets/enemy_3.png');

    bg1 = loadImage('assets/bg_forest_1.png');
    bg2 = loadImage('assets/bg_forest_2.png');
    bg3 = loadImage('assets/bg_forest_3.png');
    bg4 = loadImage('assets/bg_forest_4.png');

}