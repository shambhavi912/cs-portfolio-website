var numbers;
var symbols; 
var numbersandsymbols;

function setup()
{
    createCanvas(330, 450);
    background(100, 100, 100);
}

numbers = 
    [
        {x: 50, y: 190, width: 50, height: 50},
        {x: 110, y: 190, width: 50, height: 50},
        {x: 170, y: 190, width: 50, height: 50},
    
        {x: 50, y: 250,  width: 50, height: 50},
        {x: 110, y: 250,  width: 50, height: 50},
        {x: 170, y: 250,  width: 50, height: 50},
    
        {x: 50, y: 310,  width: 50, height: 50},
        {x: 110, y: 310,  width: 50, height: 50},
        {x: 170, y: 310,  width: 50, height: 50},
    
        {x: 50, y: 370,  width: 50, height: 50},
        {x: 110, y: 370,  width: 50, height: 50},
        {x: 170, y: 370,  width: 50, height: 50}

];
symbols = 
    [
        {x: 50, y: 130, width: 50, height: 50},
        {x: 110, y: 130,  width: 50, height: 50},
        {x: 170, y: 130,  width: 50, height: 50},        
        {x: 230, y: 130,  width: 50, height: 50},
        {x: 230, y: 190,  width: 50, height: 230}

];
numbersandsymbols = 
    [
        {text:"+", x: 65, y: 165},
        {text:"-", x: 130, y: 165},
        {text:"x", x: 187, y: 165},
        {text:"÷", x: 245, y: 165},
        {text:"=", x: 245, y: 305},

        {text:"7", x: 65, y: 227},
        {text:"8", x: 125, y: 227},
        {text:"9", x: 185, y: 227},
    
        {text:"6", x: 65, y: 287},
        {text:"5", x: 125, y: 287},  
        {text:"4", x: 185, y: 287},
    
        {text:"3", x: 65, y: 347},
        {text:"2", x: 125, y: 347}, 
        {text:"1", x: 185, y: 347},
    
        {text:"0", x: 65, y: 407},
        {text:".", x: 130, y: 407},
        {text:"C", x: 185, y: 407} 

];  
    
function draw()
{
    drawKeypad();
    drawNumbersAndSymbols();
    
    //calc name
    textSize(22);
    fill(0, 0, 0);
    text("Shambhavi's Calculator", 50, 50);
    
    //screen
    fill(200, 100, 100);
    rect(50, 70, 230, 50);
    //calculation output
    fill(0, 0, 0);
    text("key", 125, 100);
}

function drawKeypad()
{
    for(var i = 0; i < numbers.length; i++)
         {
            fill(255, 255, 255);
            rect(numbers[i].x, numbers[i].y, numbers[i].width, numbers[i].height);
         }
    for(var i = 0; i < symbols.length; i++)
         {
            fill(255, 255, 0);
            rect(symbols[i].x, symbols[i].y, symbols[i].width, symbols[i].height);
         }
}

function drawNumbersAndSymbols()
{
    textSize(32);
    fill(0, 102, 153);
    for(var i = 0; i < numbersandsymbols.length; i++)
        {
            text(numbersandsymbols[i].text, numbersandsymbols[i].x, numbersandsymbols[i].y);

        }
}