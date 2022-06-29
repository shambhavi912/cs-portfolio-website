var groundHeight;
var mountain1;
var mountain2;

var tree;

var moon;
var sun;
var darkness;
var brightness;
var star;

function setup()
{
	createCanvas(800, 600);
	//set the groundHeight proportional to the canvas size
	groundHeight = (height / 3) * 2;

	//initalise the mountain objects with properties to help draw them to the canvas
	mountain1 = {
		x: 400,
		y: groundHeight,
		height: 320,
		width: 230
	};
	mountain2 = {
		x: 550,
		y: groundHeight,
		height: 200,
		width: 130
	};

	//initalise the tree object
	tree = {
		x: 150,
		y: groundHeight + 20,
		trunkWidth: 40,
		trunkHeight: 150,
		canopyWidth: 120,
		canopyHeight: 100
	};

    //initalise the sun 
	sun = {
		x: 150,
		y: 70,
		diameter: 80,
	};
    
  //initialise moon
    moon = {
        x: 150,
        y: 440,
        diameter: 80,
    }


	//set the initial darkness
	darkness = {
        x: 0,
        y: 800,
        width: 800,
        height: 0,
    }
    
    star = {
        x: 250,
        y: -200,
    }
}



function draw()
{
	//TASK: update the values for the moons brightness, the sun's position and the darkness.
	//You can either map this to the mouse's location (i.e. the futher left the mouse is the more daylight) or you can just change the values gradually over time.


	//draw the sky
	background(150, 200, 255);
	noStroke();

	//draw the sun setting
	fill(255, 255, 0);
	ellipse(sun.x, sun.y, sun.diameter);
    sun.y = sun.y + 1;

	//draw the ground and make it green
	fill(70, 200, 0);
	rect(0, groundHeight, width, height - groundHeight);

	//draw the mountains
	fill(120);
	triangle(mountain1.x, mountain1.y,
		mountain1.x + mountain1.width, mountain1.y,
		mountain1.x + (mountain1.width / 2), mountain1.y - mountain1.height);

	triangle(mountain2.x, mountain2.y,
		mountain2.x + mountain2.width, mountain2.y,
		mountain2.x + (mountain2.width / 2), mountain2.y - mountain2.height);
    
    //draw house
    fill(245, 245, 245);
    rect(340, 350, 50, 50);
    
    fill(139, 0, 0);
    triangle(320, 350, 410, 350, 365, 320);
    
    fill(0, 0, 0);
    ellipse(365, 375, 20, 20);
    rect(355, 375, 20, 25);
    
      //draw rectangle to make scene darker
    fill(25, 25, 112, 150);
    rect(darkness.x ,darkness.y, darkness.width, darkness.height);
    darkness.height = darkness.height - 2.1;
    
    //draw the moon rising
    fill(211, 211, 211);
    ellipse(moon.x, moon.y, moon.diameter);
    moon.y = moon.y - 1;
    moon.y = max(moon.y, 70);
    
    
    //draw the stars dropping
      fill(255, 255, 0);
    ellipse(star.x, star.y, 10, 10);    
    ellipse(star.x + 50, star.y - 50, 10, 10);
    ellipse(star.x +92, star.y + 117, 10, 10);
    ellipse(star.x - 150, star.y + 117, 10, 10);
    ellipse(star.x +500, star.y - 60, 10, 10);
    ellipse(star.x +385, star.y + 68, 10, 10);
    ellipse(star.x +300, star.y + 20, 10, 10);
    ellipse(star.x +224, star.y - 35, 10, 10);
      star.y = star.y + 0.75;
      star.y = min(star.y, 100);

  
    //TASK: You can draw the tree yourself
    

	//TASK: make the scene dark by drawing a rectangle that covers the whole canvas.
	//Use the alpha value of fill to determine how dark to make it



}