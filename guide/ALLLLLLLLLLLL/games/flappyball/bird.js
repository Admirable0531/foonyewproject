function Bird(/*img*/) {
    this.y = height / 2;
    this.x = 64;

    this.gravity = 0.4;
    this.lift = -12;
    this.velocity = 0;
    this.percentage = width / 400;
    this.border = height * 4 / 5;


    this.show = function(){
        if (this.percentage > 1) this.percentage = 1;
        fill(255);
        circle(this.x, this.y, 38 * this.percentage);
        //image(img, this.x, this.y);
    }

    this.up = function () {
        this.velocity += this.lift;
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
        this.x = 64;
        this.velocity = 0;
    }

}