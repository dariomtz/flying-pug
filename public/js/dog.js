function Dog(){
  this.x = 50;
  this.height = 150;
  this.y = 0;
  this.yspeed = 1;
  this.maxVelY = 10;
  this.jumping = false;
  this.frame = 0;

  this.update = function(gravity){
    this.y += this.yspeed;

    if (this.yspeed < this.maxVelY){
      this.yspeed += gravity;

    }else{
      this.yspeed = this.maxVelY;
    }

    if (this.y <= 0){
      this.y = 0;

      if(this.yspeed<0){
        this.yspeed = 0;
      }
    }

    else if (this.y +this.height >= height){
      this.y = height - this.height;

      if(this.yspeed>0){
        this.yspeed = 0;
      }
    }
  }

  this.jump = function(){
    this.yspeed -= 6;
    this.jumping = true;
  }

  this.show = function(frames, main){
    //rect(this.x, this.y, this.height, this.height)
    if (!(this.jumping)){
      image(main,this.x,this.y, this.height, this.height)
    }else{
      this.frame +=1
      image(frames[this.frame],this.x,this.y, this.height, this.height)
      if (this.frame === 12){
        this.jumping = false
        this.frame = 0
      }
    }
  }
}
