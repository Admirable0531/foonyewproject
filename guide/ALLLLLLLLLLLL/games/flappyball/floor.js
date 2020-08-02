function Floor() {
  this.x = 0;
  this.y = height * 4 / 5;
  this.w = width;
  this.h = height - this.y;
  
  this.show = function () {
    fill(127);
    rect(this.x, this.y, this.w, this.h);
  }

  this.hit = function(bird) {
  	if (bird.y >= this.y) {
  	  return true;
  	}
  	return false;
  }
}