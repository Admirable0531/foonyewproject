function Pipe(forwardSpeed) {
    this.widthRatio = width / 400;
    this.heightRatio = height / 600;
    this.top = random(height * 0.6);
    this.bottom = height - (this.top + 110 * this.heightRatio);
    this.x = width;
    this.w = 34 * this.widthRatio;
    this.speed = forwardSpeed;

    this.highlight = false;

    this.hits = function(bird) {
        if (bird.y < this.top || bird.y > height - this.bottom) {
            if (bird.x > this.x && bird.x < this.x + this.w) {
                this.highlight = true;
                return true;
            }
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
}