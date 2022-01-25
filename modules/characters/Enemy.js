var enemiesGroup;
var enemy;

function createEnemy(x,y){
    let enemy = createSprite(x,y);

    const randomEnemyValue = random(0,1);
    if(randomEnemyValue < 0.3){
        enemy= createSprite(x, y-enemy1Img.height);
        enemy.setCollider('circle', 0, 0, 20);
        enemy.addImage(enemy1Img);
    } else if(randomEnemyValue < 0.65){
        enemy= createSprite(x,y-enemy2Img.height);
        enemy.setCollider('circle', 0, 0, 20);
        enemy.addImage(enemy2Img);
    } else {
        enemy= createSprite(x,y-enemy3Img.height);
        enemy.setCollider('circle', 0, 0, 20);
        enemy.addImage(enemy3Img);
    }
        
    return enemy;
}

function drawEnemies(){
    if(frameCount%60 == 0) {
        enemy = createEnemy(hero.position.x + width, 320);
        enemiesGroup.add(enemy);
    }

    drawSprites(enemiesGroup);
}