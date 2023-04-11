let x1 = 0
let y1 = 0
let rainX = 0
let rainY = 10000
let grow = 0
let grow2 = 0

function setup() {
	createCanvas(1000, 1000);
	background(0,128,128);
}

function draw() {
	background(0,128,128);
	rainY = rainY + 20
	
	//sun
	fill(255,255,0)
	circle(0,0,500)
	
  //cloud
	fill(175)
	ellipse(mouseX,mouseY,375,150)
	
	//raindrops
	fill(0,0,255)
	circle(rainX,rainY, 20)
	
	fill(0,0,255)
	circle(rainX-100,rainY, 20)
	
	fill(0,0,255)
	circle(rainX+100,rainY, 20)
	
	fill(0,0,255)
	circle(rainX-50,rainY, 20)
	
	fill(0,0,255)
	circle(rainX+50,rainY, 20)
	
	//ground
	fill(219,84,35)
	rect(0,700,1000,1000)
	
	//stem flower 1 (middle)
	fill(0,255,0)
	rect(495,675-grow,10,150+grow)
	
	//petal flower 1 
	fill(255,0,255)
	circle(500,675-grow,30+grow2)
	
	//stem flower 2 (left)
	fill(0,255,0)
	rect(195,800-grow,10,150+grow)
	
	//petal flower 2
	fill(255,0,0)
	circle(200,800-grow,30+grow2)
	
	//stem flower 3 (right)
	fill(0,255,0)
	rect(795,800-grow,10,150+grow)
	
	//petal flower 3 (right)
	fill(0,0,255)
	circle(800,800-grow,30+grow2)

}

function mouseClicked(){
	grow2 = grow2 + 1
	grow = grow + 5
	rainX = mouseX
	rainY = mouseY
}
//to reset growth
function keyPressed(){
	if (key = "spacebar"){
		grow = 0
		grow2 = 0
	}
}
