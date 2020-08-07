function Pipe(forwardSpeed) {
    this.widthRatio = width / 400;
    this.heightRatio = height / 600;
    this.top = random(height * 0.6);
    this.bottom = height - (this.top + 120 * this.heightRatio);
    this.x = width;
    this.w = 34 * this.widthRatio;
    this.speed = forwardSpeed;

    this.highlight = false;

    this.hits = function(bird) {
        collide1 = collision(bird.x, bird.y, bird.diameter / 2, this.x, 0, this.w, this.top)
        collide2 = collision(bird.x, bird.y, bird.diameter / 2, this.x, height - this.bottom, this.w, this.bottom)
        if (collide1 || collide2) {
            this.highlight = true;
            return true;
        }
        this.highlight = false;
        return false;
    }

    this.show = function () {
        fill(255);
        if (this.highlight) {
            fill(255, 0, 0);
        }

        if(this.widthRatio > 1) this.w = 34;
        if(this.heightRatio > 1) this.bottom = height - (this.top + 110);
        fill("brown");
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height - this.bottom, this.w, this.bottom);
    }

    this.update = function () {
        this.x -= this.speed;
    }

    this.offscreen = function () {
        if (this.x < -this.w) {
            return true;
        } else {
            return false;
        }
    }

    function collision(cx, cy, rad, rx, ry, rw, rh) {
        let testX = cx;
        let testY = cy;

        if (cx < rx)         testX = rx;      // test left edge
        else if (cx > rx+rw) testX = rx+rw;   // right edge
        if (cy < ry)         testY = ry;      // top edge
        else if (cy > ry+rh) testY = ry+rh;   // bottom edge
  
        let d = dist(cx, cy, testX, testY);
  
        if (d <= rad) {
            return true;
        }
        return false;

    }
}