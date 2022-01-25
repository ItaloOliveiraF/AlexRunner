function grid() {
    var tam = 64;
    stroke(255);
    strokeWeight(1);
    
    for(let i= tam; i < height; i +=tam){
      line(0,i,width,i);
    }
    for(let i= tam; i < width; i +=tam){ 
      line(i,0,i,height);
    }
    
    fill(255);
    noStroke();
    textSize(8);
    for(let i= tam; i < height; i +=tam){
      text(i, 8, i);
    }
    for(let i= tam; i < width; i +=tam){ 
      text(i, i, 8);
    }
  
  }
  