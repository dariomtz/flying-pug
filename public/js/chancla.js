function Chancla(difficulty){
    this.x = width;
    this.height = 100;
    this.y = random(0,(height-this.height));
    this.xspeed = -5*difficulty
    this.frame = 0;

    this.update = function(){
      this.x += this.xspeed
    }

    this.show = function(img){
      image(img[this.frame] ,this.x,this.y, this.height, this.height)
      if (this.frame === 16){
        this.frame = 0
      }
      this.frame +=1;
    }
}