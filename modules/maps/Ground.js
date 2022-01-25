
class Ground {
    constructor(groundHeight) {
        this.groups = [new Group(), new Group(), new Group()];
        
        this.groundHeight = groundHeight;
        console.log(groundHeight)

        this.groups.map((group, index) => {
            this.mountGroup(group, index*width, (index+1)*(width))
        })

        
    }

    draw(){
        //const beginGroup1 = this.groups[1].get(0).position.x
        const endGroup0 = this.groups[0].get(this.groups[0].size()-1).position.x
        const endGroup1 = this.groups[1].get(this.groups[1].size()-1).position.x
        const endGroup2 = this.groups[2].get(this.groups[2].size()-1).position.x
        
        if(camera.position.x > endGroup0 + (endGroup1 - endGroup0)/2 ){
            this.mountGroup(this.groups[0], endGroup0, endGroup0 + width)
            this.mountGroup(this.groups[1], endGroup1, endGroup1 + width)
            this.mountGroup(this.groups[2], endGroup2, endGroup2 + width)
            //this.groups[2] = mountGroup()
        }
        drawSprites(this.groups[0]);
        drawSprites(this.groups[1]);
        drawSprites(this.groups[2]);
    }

    mountGroup(group, x0,x1){
        group.removeSprites();

        const numTilesX = (x1-x0)/64;
        const numTilesY = (height - this.groundHeight)/64;

        for(let i = 0; i < numTilesX; i ++){
            //console.log(i*64)
            let groundSprite = createSprite(x0 + i*64, this.groundHeight);
            groundSprite.addImage(groundImg);
            group.add(groundSprite);

            for(let j = 1; j < numTilesY +1; j ++){
                const subgroundSprite = createSprite(x0 + i*64, this.groundHeight +j*64);
                subgroundSprite.addImage(subgroundImg);
                group.add(subgroundSprite);
                //console.log(this.group1)
            }
        }
    }

    restart(){
        this.groups.map((group, index) => {
            this.mountGroup(group, index*width, (index+1)*(width))
        })
    }
}