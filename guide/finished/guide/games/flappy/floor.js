function Floor() {
  this.x = 0;
  this.y = height * 0.8;
  this.w = width;
  this.h = height - this.y;
  
  this.show = function () {
    rect(this.x, this.y, this.w, this.h);
  }

  this.hit = function(bird) {
  	if (bird.y >= this.y) {
  	  return true;
  	}
  	return false;
  }
}