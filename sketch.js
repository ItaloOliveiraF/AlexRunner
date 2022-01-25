//var hero;
var heroX, heroY;
var sizePx, halfPx;
var tela;
var ground;
var gameOver;
var pontuation, record;

const GRAVITY = 0.8;

function preload(){
  loadGameSprites();
  soundFormats('mp3', 'ogg');
  loadSounds();
  record = window.localStorage.getItem('my-record') || 0;
  //loadGameFonts();
};

function setup() {
  createCanvas(448, 448);

  sizePx = 64;
  halfPx = int(sizePx/2);

  heroX = 64 + halfPx;
  heroY = 256 + halfPx / 2;

  hero = createHero(heroX, heroY);
  ground = new Ground(320);
  enemiesGroup = new Group();
  tela = 'menu';

  pontuation = 0;
}

function draw() {
  background(0);

  image(bg1, camera.position.x - width/2, 0);
  image(bg2, camera.position.x - width/2, 0);
  image(bg3, camera.position.x - width/2, 0);
  image(bg3, camera.position.x - width/2, 0);

  if(tela ==  'menu'){
    drawMenu();
  } else if (tela == 'play'){
    playGame(); 
  }
}

function playGame(){
    
    camera.position.x = hero.position.x + width/4 + 16
    
    fill(255);
    textSize(18);
    text(pontuation, camera.position.x - 3*sizePx , 32);
    text(`Recorde: ${record}`, camera.position.x + sizePx , 32);
      
    if(!gameOver){
      if(frameCount % 10 == 0){
        pontuation ++;
      }

      changeSound('play', true);
      hero.changeAnimation('run');
      hero.velocity.y += GRAVITY;

      if(hero.position.y >= heroY){
        hero.velocity.y = 0;
        hero.position.y = heroY;
      };

      hero.velocity.x = 5;

      if(hero.collide(enemiesGroup)){
        die();
      }
    }
    
    if(gameOver){
      changeSound('gameOver', false);

      fill('#A31A15');
      textSize(36);
      text("Game Over", camera.position.x - 100, 128);

      textSize(18);
      text("Jogue novamente [SPACE]", camera.position.x - 120, 128 + sizePx);
    }

    ground.draw()
    drawEnemies();
    drawSprite(hero);

}

function newGame(){
  hero = createHero(heroX, heroY);
  ground.restart();
  enemiesGroup.removeSprites();
  pontuation = 0;
  
  gameOver = false;
}

function die(){
  hero.velocity.y = 0;
  hero.velocity.x = 0;
  hero.changeImage('stop');
  gameOver = true;

  if(pontuation > record){
    record = pontuation;
    window.localStorage.setItem('my-record', record);
  }
}