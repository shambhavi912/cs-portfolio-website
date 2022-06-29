//    COMMENT ON GAME PROJECT       
//
//    For the final submission of my game project, I have added two extensions - enemies and platforms. 

//  I felt like there was a huge jump in the level of difficulty in understanding the code tutorials after game project part 6. Initially, my factory pattern and constructor function did not work for the platform and enemies respectively. I had to spend a lot of time redoing them and filtering out the bugs. By working on these two for extended periods of time as compared to other sections of my project, I was able to work on my patience and determination. I have come to realise that coding is much more enjoyable when done with a clear mind. Usually, I am someone who does not stop working on a project until it is fully completed. But by working on this game, I was able to stop when required and come back to it at a later time and thus preventing burn out.



var gameChar_x;
var gameChar_y;
var gameChar_width;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight
var isFalling;
var isPlummeting;

var collectables;
var canyons;
var clouds;
var trees;
var blueMountains;
var purpleMountains;

var game_score;
var flagpole;
var lives;

var platforms;
var onPlatform;

var enemies;
var hitByEnemy;

function setup()
{
    createCanvas(1024, 576);
    floorPos_y = height * 3/4;
    
    lives = 3;
    startGame();
}

function startGame()
{
    gameChar_x = width/2;
    gameChar_y = floorPos_y;
    gameChar_width = 50;

    game_score = 0;
    
    isLeft = false;
    isRight = false;
    isPlummeting = false;
    isFalling = false;
    hitByEnemy = false;
    scrollPos = 0;

    gameChar_world_x = gameChar_x - scrollPos;
    
    ////--------////
    //// ARRAYS ////
    ////--------////
    flagpole = 
    {  
        x_pos: -1600, 
        pole_height:400, 
        flag_height:50, 
        flag_width:100, 
        isReached:false
    };
    
    canyons = 
    [
        //to the left of the frame
        {x_pos: -500, width : 80},
        {x_pos: -1400, width : 80},
        
        //in the frame
        {x_pos: 350, width : 80},
        {x_pos: 770, width : 80},
        
        //to the right of the frame
        {x_pos: 1300, width : 80},
        {x_pos: 1770, width : 80}
    ];
    
    collectables = 
    [
        //to the left of the frame
        {x_pos : -250, y_pos : 415, isFound : false, size : 30}, 
        {x_pos : -650, y_pos : 415, isFound : false, size : 30},
        {x_pos : -1000, y_pos : 315, isFound : false, size : 30}, 
        
        //in the frame
        {x_pos : 200, y_pos : 415, isFound : false, size : 30},
        {x_pos : 390, y_pos : 315, isFound : false, size : 30},
        {x_pos : 690, y_pos : 415, isFound : false, size : 30},
        {x_pos : 890, y_pos : 215, isFound : false, size : 30},

        //to the right of the frame
        {x_pos : 1200, y_pos : 415, isFound : false, size : 30},
        {x_pos : 1700, y_pos : 415, isFound : false, size : 30},
        {x_pos : 2200, y_pos : 415, isFound : false, size : 30}

    ];
                    
    clouds = 
    [
        //to the left of the frame
        {pos_x : -200, pos_y : 50, size : 20}, 
        {pos_x : -550, pos_y : 100, size : 25}, 
        {pos_x : -1000, pos_y : 150, size : 55}, 
        {pos_x : -1300, pos_y : 50, size : 25},
        
        //in the frame
        {pos_x : 100, pos_y : 100, size : 35}, 
        {pos_x : 500, pos_y : 200, size : 45}, 
        {pos_x : 800, pos_y : 150, size : 25},
        {pos_x : 1000, pos_y : 110, size : 35}, 
   
        // to the right of the frame
        {pos_x : 1300, pos_y : 50, size : 55}, 
        {pos_x : 1450, pos_y : 170, size : 45}, 
        {pos_x : 1700, pos_y : 50, size : 20} 
    ];
    
    trees = 
    [
        {x_pos : -1500, y_pos : floorPos_y-200, height : 200}, 
        {x_pos : -1300, y_pos : floorPos_y-100, height : 100}, 
        {x_pos : -1100, y_pos : floorPos_y-150, height : 150}, 
        {x_pos : -900, y_pos : floorPos_y-100, height : 100}, 
        {x_pos : -700, y_pos : floorPos_y-150, height : 150}, 
        {x_pos : -500, y_pos : floorPos_y-100, height : 100}, 
        {x_pos : -300, y_pos : floorPos_y-240, height : 240}, 
        {x_pos : -100, y_pos : floorPos_y-180, height : 180}, 
        
        {x_pos : 100, y_pos : floorPos_y-150, height : 150}, 
        {x_pos : 300, y_pos : floorPos_y-200, height : 200}, 
        {x_pos : 650, y_pos : floorPos_y-175, height : 175}, 
        {x_pos : 900, y_pos : floorPos_y-100, height : 100}, 
        
        {x_pos : 1100, y_pos : floorPos_y-125, height : 125}, 
        {x_pos : 1300, y_pos : floorPos_y-150, height : 150}, 
        {x_pos : 1500, y_pos : floorPos_y-250, height : 250},
        {x_pos : 1900, y_pos : floorPos_y-150, height : 150} 
    ];
    
    blueMountains = 
    [      
        //to the left of the frame
        {X : -500, Y : floorPos_y},
        
        //in the frame
        {X : 100, Y : floorPos_y}, 
        {X : 700, Y : floorPos_y},
        
        //to the right of the frame
        {X : 1800, Y : floorPos_y}
    ];
    
    purpleMountains = 
    [      
        //to the left of the frame
        {X : -200, Y : floorPos_y},
        {X : -1400, Y : floorPos_y},
        {X : -750, Y : floorPos_y},
        
        //in the frame
        {X : 300, Y : floorPos_y}, 
        
        //to the right of the frame
        {X : 1000, Y : floorPos_y}, 
        {X : 1500, Y : floorPos_y}
    ];
    
    
    platforms = [];
        var p1 = createPlatform(350, floorPos_y-100, 80);
        var p2 = createPlatform(770, floorPos_y-100, 80);
        var p3 = createPlatform(850, floorPos_y-200, 80);
        var p4 = createPlatform(1270, floorPos_y-100, 130);
        var p5 = createPlatform(-100, floorPos_y-100, 80);
        var p6 = createPlatform(-1040, floorPos_y-100, 80);

        platforms.push(p1);
        platforms.push(p2);
        platforms.push(p3);
        platforms.push(p4);
        platforms.push(p5);
        platforms.push(p6);
    
    enemies = [];
        var e1 = new Enemy(-50, floorPos_y, 100);
        var e2 = new Enemy(-150, floorPos_y, 100);
        var e3 = new Enemy(1900, floorPos_y, 100);
        var e4 = new Enemy(2000, floorPos_y, 100);
        var e5 = new Enemy(-950, floorPos_y, 100);
        var e6 = new Enemy(-1050, floorPos_y, 100);

        enemies.push(e1);
        enemies.push(e2);
        enemies.push(e3);
        enemies.push(e4);
        enemies.push(e5);
        enemies.push(e6);
}

function draw()
{
    ///////////DRAWING CODE//////////
    drawSky();
    drawGround();
   
    push();
    translate(scrollPos,0);
    
    drawClouds();
    drawBlueMountains();
    drawPurpleMountains();
    drawCanyons();
    drawTrees();
    drawCollectables();
    drawFlagpole();
    drawTurnAround();
    drawEnemies();
    drawPlatforms();
    collectCollectables();
    checkIfGameCharFallIntoCanyon();
    checkIfGameCharInContactWithEnemy();
    checkIfCharacterIsOverAnyPlatforms();
    checkFlagpole();
    
    pop();
    
    //draw score board
        noStroke();
        fill(199, 21, 133);
        rect(0, 5, 135, 50);
        //text
        fill(255, 255, 255);
        textSize(30);
        text("Score: "+ game_score, 10, 40);

    //draw rules
        noStroke();
        fill(255, 255, 255);
        textSize(25);
        text("Collect all 10 rings to win! Hint: Move to your right first.", 160, 40);
    
    //draw lives
        noStroke();
        fill(199, 21, 133);
        rect(775, 5, 249, 50);
        //text
        fill(255, 255, 255);
        textSize(30);
        text("Lives: ", 780, 40);
        drawLifeTokens();
        
    //the game character
    drawGameChar();
    
    ///////////INTERACTION CODE//////////
    //conditional statements to move the game character below here
    var isGameOver = checkIsGameOver();
    if(isGameOver==true)
        {
            drawGameOver();
            return;
        }
    
    if(hitByEnemy)
        {
            if(lives>0)
            {
                startGame();
            }
            return;
        }
    
    if(isPlummeting==true)
        {
            gameChar_y += 10;
            checkPlayerDie();
            return;
        }

    if(gameChar_y<floorPos_y)
        {
            //gameChar_y += 1;
            isFalling = true;
        }
   
    else
        {
            isFalling = false;
        }

    if(isLeft==true)
        {
            if(gameChar_x > width * 0.2)
            {
                gameChar_x -= 5;
            }
            else
            {
                scrollPos += 5;
            }
        }
   
    else if(isRight==true)
        {
            if(gameChar_x < width * 0.8)
            {
                gameChar_x  += 5;
            }
            else
            {   //negative for moving against the background
                scrollPos -= 5; 
            }
        }
    
    //Update real position of gameChar for collision detection.
    gameChar_world_x = gameChar_x - scrollPos;
}

///// Check If Character Touches Enemy /////
function checkIfGameCharInContactWithEnemy()
{
    if(checkIsGameOver())
        {
            return;
        }
    
    for(i in enemies)
        {
            var enemy = enemies[i];
            var isContact = enemy.checkContact(gameChar_world_x, gameChar_y);
            if(isContact)
                {
                    hitByEnemy = true;
                    lives--;
                    break;
                }
          
        }
    
}

///// Check If Character Is On Platform /////
function checkIfCharacterIsOverAnyPlatforms()
{
    if(isFalling)
        {
            var isContact = false;
            onPlatform = false;
            for(i in platforms)
                {
                    var platform = platforms[i];
                    isContact = 
                        platform.checkContact(gameChar_world_x, gameChar_y);
                    if(isContact)
                        {
                            onPlatform = true;
                            break;
                        }
                }
            if(isContact==false)
                {
                    gameChar_y+=1;
                }
        }
}

///// Draw game Char /////
function drawGameChar()
{
    if(onPlatform && isLeft)
        {
            drawWalkingLeft();
        }
    else if(isRight && onPlatform)
        {
            drawWalkingRight();
        }
    else if(isLeft && isFalling)
        {
            drawJumpingLeft();
        }
    else if(isRight && isFalling)
        {
            drawJumpingRight();
        }
    else if(isLeft)
        {
            drawWalkingLeft();
        }
    else if(isRight)
        {
            drawWalkingRight();
        }
    else if(onPlatform)
        {
            drawStandingFrontFacing();
        }
    else if(isFalling || isPlummeting)
        {
            drawJumpingFacingForwards();
        }
    else
        {
            drawStandingFrontFacing();
        }
}

///// Check If Game Is Over /////
function checkIsGameOver()
{
    var gameOver = false;
    
    if(flagpole.isReached || lives<1)
    {
        gameOver = true;   
    }
    return gameOver;
}

///// Check If Character Dies /////
function checkPlayerDie()
{
    if(gameChar_y > height || hitByEnemy)
    { 
        if(lives > 0)
        {
            startGame();
        }
    }
}

///// Check If Character Reaches Flagpole /////
function checkFlagpole()
{
    if(flagpole.isReached==false)
    {
        var d = dist(gameChar_world_x, gameChar_y, flagpole.x_pos, floorPos_y);
        if(d<10)
        {
            flagpole.isReached = true;   
        }
    }
}

///// Check If Character Collects Collectables /////
function collectCollectables()
{
    for(var i = 0; i < collectables.length; i++)
    {
        if(collectables[i].isFound==false)
        {
            //check if game character is in the range of the collectable
            if(dist(gameChar_world_x, gameChar_y, collectables[i].x_pos+15, collectables[i].y_pos) < 20)
            {
                collectables[i].isFound=true;
                game_score++;
                console.log("Game score:"+game_score);
            }
        }
    }
}

///// Turn Around Board /////
function drawTurnAround()
{
    //turn around symbol
    noStroke();
    fill(255, 255, 0);
    rect(2020, floorPos_y-150, 10, 150);
    fill(255, 0, 0);
    rect(2030, floorPos_y-150, 260, 50);
    fill(255, 255, 0);
    rect(2290, floorPos_y-150, 10, 150);
    fill(0);
    textSize(20);
    text("Turn around for the finish line", 2030, floorPos_y-120);
    
}

///// Check If Character Falls Into Canyon /////
function checkIfGameCharFallIntoCanyon()
{
    for(var i=0;i<canyons.length;i++)
    {
        var canyon = canyons[i];
        //check if game character is over the canyon
        if(     (gameChar_world_x>canyon.x_pos+gameChar_width/2 && gameChar_y== floorPos_y) 
                &&
                (gameChar_world_x<canyon.x_pos+canyon.width-gameChar_width/2 && gameChar_y== floorPos_y))
        {
            isPlummeting=true;
            lives--;
        } 
    }
}

///// Key Functions /////
function keyPressed()
{
    var isGameOver = checkIsGameOver();
    if(isGameOver==true)
        {
            drawGameOver();
            return;
        }
    
    //moving left, left arrow
    if(keyCode == 37)
        {
            isLeft = true;
        }

    //moving right, right arrow
    else if(keyCode == 39)
        {
            isRight = true;
        }

    //jumping, spacebar
    if(keyCode == 32)
        {
            //ensure that the character only jump when it is touching the ground
            if(gameChar_y>=floorPos_y || onPlatform)
            {
                gameChar_y -= 150;
            }
        }
}

function keyReleased()
{
    var isGameOver = checkIsGameOver();
    if(isGameOver==true)
        {
            return;
        }
    
    //stop moving left, left arrow
    if(keyCode == 37)
        {
            isLeft = false;
        }
 
    //stop moving right, right arrow
    else if(keyCode = 39)
        {
            isRight = false;
        }
}
