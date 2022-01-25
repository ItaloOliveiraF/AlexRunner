var hero;

function createHero(x0,y0, state = 'stop'){
    let heroSprite;
    heroSprite = createSprite(x0,y0);
    heroSprite.addImage('stop', heroStop);
    heroSprite.addAnimation('run', heroRun);

    heroSprite.changeImage(state);
    return heroSprite;
}

function drawHero(){

}

// function changeHeroState(state){
//     this.hero.changeImage(state);
// }
// class Hero {
//     constructor(x,y, state = 'stop') {
//         this.state = state;
//         this.x = x;
//         this.y = y;
//         this.hero = createSprite(x,y);
//         this.hero.addImage('stop', heroStop);
//         this.hero.addAnimation('run', heroRun);
//         this.changeState(state);
//     }

//     draw(){
//         drawSprite(this.hero);
//     }


//     setPositionX(position){
//         this.hero.position.x = position
//     }

//     setPositionY(position) {  
//         this.hero.position.y = position
//     }

//     setVelocityX(velocity){
//         this.hero.velocity.x = velocity
//     }

//     setVelocityY(velocity) {  
//         this.hero.velocity.y = velocity
//     }

//     incrementVelocityX(increment){
//         this.hero.velocity.x += increment
//     }

//     incrementVelocityY(increment){
//         this.hero.velocity.y += increment
//     }

//     changeState(state){
//         this.hero.changeImage(state);
//     }
    
//     setCollision(group){
//         this.hero.collide(group); 
//     }
// }