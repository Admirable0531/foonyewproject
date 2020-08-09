class Tail {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show(n) {
        fill(139*pow(0.8,n+1),82*pow(0.8,n+1),46*pow(0.8,n+1))
    rect(this.x,this.y,gap,gap,width/30)
    }
}