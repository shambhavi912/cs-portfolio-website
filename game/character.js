function drawJumpingLeft()
{
    noStroke();
    
    //shirt
    fill(255, 0, 0);
    rect(gameChar_x - 5, gameChar_y - 50, 10, 20);
   
    //head
    fill(255, 222, 173);
    ellipse(gameChar_x, gameChar_y - 57, 20, 20);
  
    //eye
    fill(0, 0, 0);
    ellipse(gameChar_x - 5, gameChar_y - 57, 3, 3);
    
    //legs
    stroke(0, 0, 0);
    line(gameChar_x - 2 , gameChar_y - 30, gameChar_x - 5, gameChar_y-23);
    line(gameChar_x + 2, gameChar_y - 30, gameChar_x + 5, gameChar_y-23);
    stroke(255, 222, 173);
    line(gameChar_x - 5, gameChar_y - 45, gameChar_x - 15, gameChar_y - 55);
}


function drawJumpingRight()
{  
    noStroke();
    
    //shirt
    fill(255, 69, 0);
    rect(gameChar_x - 5, gameChar_y - 50, 10, 20);
   
    //head
    fill(255, 222, 173);
    ellipse(gameChar_x, gameChar_y - 57, 20, 20);
    
    //eye
    fill(0, 0, 0);
    ellipse(gameChar_x + 5, gameChar_y - 57, 3, 3);
 
    //legs
    stroke(0, 0, 0);
    line(gameChar_x - 2 , gameChar_y - 30, gameChar_x - 5, gameChar_y-23);
    line(gameChar_x + 2, gameChar_y - 30, gameChar_x + 5, gameChar_y-23);
    stroke(255, 222, 173);
    line(gameChar_x + 5, gameChar_y - 45, gameChar_x + 15, gameChar_y - 55);
}


function drawWalkingLeft()
{
    noStroke();
    
    //shirt
    fill(255, 0, 0);
    rect(gameChar_x - 5, gameChar_y - 30, 10, 20);
   
    //head
    fill(255, 222, 173);
    ellipse(gameChar_x, gameChar_y - 37, 20, 20);
  
    //eye
    fill(0, 0, 0);
    ellipse(gameChar_x - 5, gameChar_y - 37, 3, 3);
 
    //legs
    stroke(0, 0, 0);
    line(gameChar_x - 2 , gameChar_y - 10, gameChar_x - 5, gameChar_y-3);
    line(gameChar_x + 2, gameChar_y - 10, gameChar_x + 5, gameChar_y-3);
    stroke(255, 222, 173);
    line(gameChar_x - 5, gameChar_y - 25, gameChar_x - 15, gameChar_y - 35);
}


function drawWalkingRight()
{
    noStroke();
    
    //shirt
    fill(255, 69, 0);
    rect(gameChar_x - 5, gameChar_y - 30, 10, 20);
   
    //head
    fill(255, 222, 173);
    ellipse(gameChar_x, gameChar_y - 37, 20, 20);
    
    //eye
    fill(0, 0, 0);
    ellipse(gameChar_x + 5, gameChar_y - 37, 3, 3);
 
    //legs
    stroke(0, 0, 0);
    line(gameChar_x - 2 , gameChar_y - 10, gameChar_x - 5, gameChar_y-3);
    line(gameChar_x + 2, gameChar_y - 10, gameChar_x + 5, gameChar_y-3);
    stroke(255, 222, 173);
    line(gameChar_x + 5, gameChar_y - 25, gameChar_x + 15, gameChar_y - 35);
}


function drawJumpingFacingForwards()
{
    noStroke();
    
    //shirt
    fill(255, 0, 0);
    rect(gameChar_x-10, gameChar_y-50, 20, 20);
    
    //head
    fill(255, 222, 173);
    ellipse(gameChar_x, gameChar_y - 57, 20, 20);
    
    //eyes
    fill(0, 0, 0);
    ellipse(gameChar_x - 5, gameChar_y - 57, 3, 3);
    ellipse(gameChar_x + 5, gameChar_y - 57, 3, 3);
    
    //legs
    fill(0, 0, 0);
    rect(gameChar_x-8, gameChar_y-30, 7, 10);
    rect(gameChar_x+1, gameChar_y-30, 7, 10);
    
    //arms
    fill(255, 222, 173);
    quad(gameChar_x-10, gameChar_y-48, gameChar_x-10, gameChar_y-43, 
         gameChar_x-17, gameChar_y-63, gameChar_x-17, gameChar_y-68);
    
    quad(gameChar_x+10, gameChar_y-48, gameChar_x+10, gameChar_y-43, 
         gameChar_x+17, gameChar_y-63, gameChar_x+17, gameChar_y-68);
}


function drawStandingFrontFacing()
{
    noStroke();

    //shirt
    fill(255, 0, 0);
    rect(gameChar_x-10, gameChar_y-30, 20, 20);
    
    //head
    fill(255, 222, 173);
    ellipse(gameChar_x, gameChar_y - 37, 20, 20);
    
    //eyes
    fill(0, 0, 0);
    ellipse(gameChar_x - 5, gameChar_y - 37, 3, 3);
    ellipse(gameChar_x + 5, gameChar_y - 37, 3, 3);

    //legs
    fill(0, 0, 0);
    rect(gameChar_x-8, gameChar_y-10, 7, 10);
    rect(gameChar_x+1, gameChar_y-10, 7, 10);
    
    //arms
    fill(255, 222, 173);
    quad(gameChar_x-10, gameChar_y-30, gameChar_x-10, gameChar_y-25, gameChar_x-17, gameChar_y-15, gameChar_x-17, gameChar_y-20);
    quad(gameChar_x+10, gameChar_y-30, gameChar_x+10, gameChar_y-25, gameChar_x+17, gameChar_y-15, gameChar_x+17, gameChar_y-20);
}
