
//////////      PLATFORMS       //////////
function createPlatform(x, y, length)
{
    var p = 
        {
            x: x,
            y: y,
            length: length,
            draw: function()
            {
                fill(0,155,0);
                rect(this.x, this.y, this.length, 20);
                fill(184, 134, 11);
                rect(this.x, this.y+20, this.length, 20);
            },
            checkContact: function(gc_x, gc_y)
            {
                var c1 = gc_x + 20 > this.x;
                var c2 = gc_x < this.x + 20 + this.length;
                //check for x axis
                if(c1 && c2)
                    {
                        //check for y-axis
                        var d = this.y - gc_y;
                        if(d >= 0 && d < 1)
                            {
                                return true;
                            }
                    }
                return false;
            }
        }
    return p;
}
function drawPlatforms()
{
    for(i in platforms)
        {
            var platform = platforms[i];
            platform.draw();
        }
}



//////////      GAME OVER       //////////
function drawGameOver(){
    fill(0);
    textSize(100);
    
    if(lives>0)
    {
        fill(255, 255, 0);
        rect(300, 200, 380, 100);
        fill(0, 0, 0);
        text("You win!",300,height/2);   
    }else
    {
        fill(255, 255, 0);
        rect(250, 150, 520, 200);
        fill(0, 0, 0);
        text("Game over!",250,230);
        text("You lose!",300,330); 
    }
}



//////////      ENEMIES       //////////
function Enemy(x, y, range)
{
    this.x = x;
    this.y = y;
    this.range = range;
    
    this.currentX = x;
    this.inc = 1;
    
    this.draw = function()
    {
        this.update();
        fill(255, 0, 0);
        noStroke();
        beginShape();
        vertex(this.currentX, this.y-50);
        vertex(this.currentX-5, this.y-30);
        vertex(this.currentX-25, this.y-25);
        vertex(this.currentX-5, this.y-20);
        vertex(this.currentX, this.y);
        vertex(this.currentX+5, this.y-20);
        vertex(this.currentX+25, this.y-25);
        vertex(this.currentX+5, this.y-30);
        endShape(CLOSE);
    }
    
    this.update = function()
    {
        this.currentX += this.inc;
        if(this.currentX > this.x + this.range)
            {
                this.inc = -1;
            }
        else if(this.currentX < this.x)
            {
                this.inc = 1;
            }
    }
    
    this.checkContact = function(gc_x, gc_y)
    {
        var d = dist(gc_x, gc_y, this.currentX, this.y);
        if(d < 20)
            {
                return true;
            }
        return false;
    }
}
function drawEnemies()
{
    for(i in enemies)
        {
            var enemy = enemies[i];
            enemy.draw();
        }
}



//////////      LIFE TOKENS       //////////
function drawLifeTokens()
{
    strokeWeight(2);
    stroke(255, 255, 0);
    fill(255, 0, 0);
    for(var i=0;i<lives;i++)
    {        
        beginShape();
        vertex(890+(50*i), 30);
        vertex(880+(50*i), 20);
        vertex(870+(50*i), 30);
        vertex(890+(50*i), 45);
        vertex(910+(50*i), 30);
        vertex(900+(50*i), 20);
        endShape(CLOSE);

    }
}



//////////      FLAGPOLE       //////////
function drawFlagpole()
{
    strokeWeight(5);
    stroke(255, 255, 0);
    line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y-200);
    
    noStroke();
    fill(255, 0, 0);
    if(flagpole.isReached)
        {
            triangle(
            flagpole.x_pos, floorPos_y-200,
            flagpole.x_pos, floorPos_y-150,
            flagpole.x_pos+50, floorPos_y-175);
        }
    else
        {
            triangle(
            flagpole.x_pos, floorPos_y-50,
            flagpole.x_pos, floorPos_y,
            flagpole.x_pos+50, floorPos_y-25);
        }
}



//////////      CLOUDS       //////////
function drawClouds()
{
    for(var i in clouds)
    {
        drawCloud(clouds[i]);
    }
}

function drawCloud(t_cloud)
{
    fill(255, 255, 255);
    ellipse(t_cloud.pos_x, t_cloud.pos_y, t_cloud.size, t_cloud.size); //anchoring
    ellipse(t_cloud.pos_x+25, t_cloud.pos_y, t_cloud.size+15, t_cloud.size+15);
    ellipse(t_cloud.pos_x+50, t_cloud.pos_y, t_cloud.size+15, t_cloud.size+15);
    ellipse(t_cloud.pos_x+75, t_cloud.pos_y, t_cloud.size+15, t_cloud.size+15);
    ellipse(t_cloud.pos_x+100, t_cloud.pos_y, t_cloud.size, t_cloud.size);
}



//////////      TREES       //////////
function drawTrees()
{
    for(var i = 0; i < trees.length; i++)
    {
        //tree trunk
        noStroke();
        fill(139, 69, 19);
        rect
        rect(trees[i].x_pos, trees[i].y_pos, 25, trees[i].height); //anchoring
        
        //tree leaves
        fill(34, 139, 34);
        ellipse(trees[i].x_pos-10, trees[i].y_pos-10, 20, 20);
        ellipse(trees[i].x_pos, trees[i].y_pos-20, 20, 20);
        ellipse(trees[i].x_pos, trees[i].y_pos-15, 20, 20);
        ellipse(trees[i].x_pos, trees[i].y_pos, 20, 20);
        ellipse(trees[i].x_pos+13, trees[i].y_pos-25, 20, 20);
        ellipse(trees[i].x_pos+13, trees[i].y_pos-5, 20, 20);
        ellipse(trees[i].x_pos+15, trees[i].y_pos-10, 20, 20);
        ellipse(trees[i].x_pos+25, trees[i].y_pos-20, 20, 20);
        ellipse(trees[i].x_pos+25, trees[i].y_pos, 20, 20);
        ellipse(trees[i].x_pos+35, trees[i].y_pos-10, 20, 20);
    }
}



//////////      MOUNTAINS       //////////
function drawBlueMountains()
{
    for(var i = 0; i < blueMountains.length; i++)
        {
            //front of the mountain
            noStroke();
            fill(135, 206, 250);
            triangle(blueMountains[i].X, blueMountains[i].Y, blueMountains[i].X+100, 200, blueMountains[i].X+200, blueMountains[i].Y); //anchoring
         
            //side of the mountain
            fill(70, 130, 180);
            triangle(blueMountains[i].X+100, blueMountains[i].Y-233, blueMountains[i].X+200, blueMountains[i].Y, blueMountains[i].X+275, blueMountains[i].Y);        
        }
}
function drawPurpleMountains()
{
    for(var i = 0; i < purpleMountains.length; i++)
        {
            noStroke();
            //front of the mountain
            fill(216, 191, 250);
            triangle(purpleMountains[i].X, purpleMountains[i].Y, purpleMountains[i].X+100, 200, purpleMountains[i].X+200, purpleMountains[i].Y); //anchoring
         
            //side of the mountain
            fill(147, 112, 219);
            triangle(purpleMountains[i].X+100, purpleMountains[i].Y-233, purpleMountains[i].X+200, purpleMountains[i].Y, purpleMountains[i].X+275, purpleMountains[i].Y);
        }
}



//////////      CANYONS       //////////
function drawCanyons()
{
    for(var i=0;i<canyons.length;i++)
    {
        var canyon = canyons[i];
        drawCanyon(canyon);
    }
}
function drawCanyon(t_Canyon)
{
    //sides of the canyon
    fill(222, 184, 135);
    rect(t_Canyon.x_pos, floorPos_y, t_Canyon.width, 500); //anchoring
    //middle of the canyon
    fill(65, 105, 225);
    rect(t_Canyon.x_pos+15, floorPos_y, t_Canyon.width-30, 500);
}



//////////      COLLECTABLES       //////////
function drawCollectables()
{
    for(var i=0;i<collectables.length;i++)
    {
        if(collectables[i].isFound==false)
        {
            drawCollectable(collectables[i]);
        }
    }
}
function drawCollectable(t_Collectable)
{
    //the ring
    strokeWeight(3);
    stroke(255, 255, 0);
    noFill();
    ellipse(t_Collectable.x_pos, t_Collectable.y_pos, t_Collectable.size, t_Collectable.size);
}



//////////      GROUND       //////////
function drawGround()
{
	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); 
    fill(184, 134, 11);
    rect(0, floorPos_y+20, width, 144);
}



//////////      SKY       //////////
function drawSky()
{
    background(25, 25, 112); //fill the sky MidnightBlue  
}