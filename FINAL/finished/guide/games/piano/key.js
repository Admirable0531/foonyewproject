class Key {
  constructor() {

  }

  display(color) {
    fill(color)
    rect(this.x, this.y, this.width, this.length)
  }

  tint() {
    fill(150, 150, 255, 80)
    rect(this.x, this.y, this.width, this.length)
    if (mouseIsPressed) {
      fill(0, 0, 200, 50)
      rect(this.x, this.y, this.width, this.length)
    }
  }

}

class WhiteKey extends Key {

  constructor(n) {
    super()
    this.x = width/10*n + width/20
    this.y = height / 2
    this.length = height
    this.width = this.length / 4
  }

  onHover() {
    return abs(this.x - mouseX) <= this.width / 2 && mouseY < height
  }


}

class BlackKey extends Key {

  constructor(n) {
    super()
    this.x = n < 12 ? (n - 9) * width/10 : n < 15 ? (n - 12) * width/10 + width*0.4 : (n - 14) * width/10 + width*0.7
    this.y = height / 3
    this.width = width*0.06
    this.length = height / 3 * 2
  }

  onHover() {
    return abs(this.x - mouseX) <= this.width / 2 && mouseY <= height * 2 / 3
  }

}