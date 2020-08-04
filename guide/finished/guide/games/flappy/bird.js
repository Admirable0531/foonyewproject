function Bird(magnification) {
    this.gravity = 0.25 * magnification;
    this.lift = 4.6 * magnification;
    this.velocity = 0;
    this.percentage = width / 400;
    this.border = height * 4 / 5;
    this.diameter;
    this.radius;
    this.extend;
    this.imgSize;

    this.y = height / 2;
    this.x = 64 * magnification;


    this.show = function(){
        if (this.percentage > 1) this.percentage = 1;
        this.diameter = 32 * this.percentage;
        this.radius = this.diameter / 2;
        this.extend = 4 * this.percentage;
        this.imgSize = this.diameter + this.extend;
        noFill();
        noStroke();
        circle(this.x, this.y, this.diameter);
    }

    this.up = function () {
        this.velocity = -this.lift;
    }

    this.update = function () {
        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.y > this.border) {
            this.y = this.border;
            this.velocity = 0;
        }
        else if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }

    this.reset = function() {
        this.y = height / 2;
        this.x = 64 * magnification;
        this.velocity = 0;
    }

}