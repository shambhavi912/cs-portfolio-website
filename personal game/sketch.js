var height
var width
var floor
var center
var villain


function setup()
{
    height = 700;
    width = 1200;
    floor = 500;
    center = 600;
    createCanvas(width, height);
    villain = 
        {
            x:825,  y:325
        };
}

function draw()
{
    background(0, 191, 255); //sky, deep sky blue
    noStroke();
    fill(50, 205, 50); //ground, lime green
    rect(0, floor, width, 200);
    drawHouse();
    drawVillain();
    drawHero();
    
        fill(255, 0, 0);
        noStroke();
        beginShape();
        vertex(102, 85);
        vertex(104, 100);
        vertex(114, 112);
        vertex(102, 103);
        vertex(90, 112);
        vertex(100, 100);
        endShape(CLOSE);
}

function drawHouse()
{
    //house, rosy brown
    fill(188, 143, 143);
    rect(center-350, floor-250, 700, 250);
    
    //roof, maroon
    fill(128, 0, 0);
    triangle(170, floor-250, 1030, floor-250, center,50);
    
    //door, saddle brown
    fill(139, 69, 19);
    rect(center-30, floor-120, 60, 120);
    
    //windows
    fill(0, 0, 0);
    rect(325, floor-210, 100, 70);
    rect(550, floor-210, 100, 70);
    rect(775, floor-210, 100, 70);
    rect(325, floor-100, 100, 70);
    rect(775, floor-100, 100, 70);
}

function drawVillain()
{
    noStroke();
    fill(255, 0, 0);
    ellipse(villain.x, villain.y, 50, 50);
    
    fill(0, 0, 0);
    ellipse(villain.x-7,villain.y-7,5,5);
    ellipse(villain.x+7,villain.y-7,5,5);

    fill(255, 255, 255);
    triangle(villain.x-7, villain.y+10, villain.x+7, villain.y+10, villain.x, villain.y);
}

function drawHero()
{
    fill(0, 0, 0);
    triangle(110, 100, 150, 100, 130, 125);
    ellipse(120, 100, 20, 20);
    ellipse(140, 100, 20, 20);
    
}

    
function mousePressed()
{
    //windows
    fill(255, 255, 0);
    rect(325, floor-210, 100, 70);
    rect(550, floor-210, 100, 70);
    rect(775, floor-210, 100, 70);
    rect(325, floor-100, 100, 70);
    rect(775, floor-100, 100, 70);
}

