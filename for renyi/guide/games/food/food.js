class Food {
  constructor() {
    this.sprite = random(sprites)
    this.size = width*0.1
    this.x = random(this.size / 2, width - this.size / 2 + 1)
    this.y = -this.size
    this.v = height/100
  }
  
  resize() {
    this.size = width*0.1
    this.v = height/100
  }

  fall() {
    this.y += this.v
  }

  display() {
    image(this.sprite, this.x, this.y, this.size, this.size)
  }

  catched() {
    if (this.y >= height - 30 - this.size / 2 && abs(x - this.x) <= width*0.1) {
      return true
    } else return false
  }

  miss() {
    if (this.y + this.size / 2 > height) {
      return true
    } else return false

  }
}