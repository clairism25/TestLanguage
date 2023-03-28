let x1 = 0
let y1 = 0
let rainX = 0
let rainY = 10000

function setup() {
  createCanvas(1000, 1000);
  background(0,128,128);
}

function draw() {
  background(0,128,128);
  rainY = rainY + 20

  fill(175)
  ellipse(mouseX,mouseY,375,150)
  
  fill(0,0,255)
  circle(rainX,rainY, 20)
  
  fill(219,84,35)
  rect(0,700,1000,1000)
  
  fill(0,255,0)
  //rect(
  
  fill(255,0,255)
  circle(500,675,30)

}

function mouseClicked(){
  
  rainX = mouseX
  rainY = mouseY
}
