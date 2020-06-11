var heading = new Image();
var pacMan = "https://www.ericholscher.com/_images/pacman.png";
var closedPacMan = "http://gamemakerlab.com/images/image_892016_8553.png";
var food = new Image();
var currX = 12;
var currY = 500;
var cherryCurrX = 500;
var cherryCurrY = 500;
var currentImage = new Image();

// in the code above I am defining all of my varribals so that I could use them later. 

function init() {
  heading.src =
    "https://www.geeksaresexy.net/wp-content/uploads/2011/05/pac-man-logo-e1305962515934.gif";
  currentImage.src = pacMan;
  food.src =
    "https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/3068143/1360/906/m1/fpnw/wm1/d5arsu7vcoxtuv7rqlt5vu57dty2fy7k6m6cp4lvncpfnseld6cugqq0to1lhx58-.jpg?1501781106&s=b69c962bbace83c7cbde85340f254adc";

  window.requestAnimationFrame(draw);
}


//in the code above I am initiating the propcess of showing things on the screen. I am showing all of the nessasary images in the code above.


function draw() {
  var ctx = document.getElementById("myCanvas").getContext("2d");
ctx.clearRect(0, 0, 700, 700); 
  ctx.drawImage(heading, 40, 0);

  ctx.drawImage(currentImage, currX, currY, 150, 150);
  
// drawing the pac man

  
  if (currX < 600 && currX > 360 && currY < 600 && currY > 401) {
    ctx.fillRect(cerryCurrX, cherryCurrY, 150, 100);
} else {
   	ctx.drawImage(food, cherryCurrX, cherryCurrY, 100, 70);
   }
 
  window.requestAnimationFrame(draw);  //this code loops all of my functions so it continusly runs.
}


//in this code above i am establishing all of the nessasary code for my cherry/food for pac man. it is establishing a canvas.


function arrowKeys(event) {
  console.log("hi")
  if (event.key === "ArrowLeft") {  //using the event of the arrow key being clicked
    if (currentImage.src === pacMan){
      currentImage.src = closedPacMan;  //using conditionals to change the image.
  } else if (currentImage.src === closedPacMan) {
      currentImage.src = pacMan;
  }
      
    currX -= 5;  //changing the position of the pac man
  } else if (event.key === "ArrowRight") {
    if (currentImage.src === pacMan){
      currentImage.src = closedPacMan;
  } else if (currentImage.src === closedPacMan) {
      currentImage.src = pacMan;
  }
          
    currX += 5;
  } else if (event.key === "ArrowUp") {
    if (currentImage.src === pacMan){
      currentImage.src = closedPacMan;
  } else if (currentImage.src === closedPacMan) {
      currentImage.src = pacMan;
  }
      
    currY -= 5;
  } else if (event.key === "ArrowDown") {
    if (currentImage.src === pacMan){
      currentImage.src = closedPacMan;
  } else if (currentImage.src === closedPacMan) {
      currentImage.src = pacMan;
  }
      
    currY += 5;
  }
}



//in the code above i am establishing all of my code for my pac man. when the arrow keys are clicked,
//the pac man will change images to give the alusion of opening and closing its mouth. 





document.addEventListener("keydown", arrowKeys);
init();


// in this I am running all of my code. When I call the init function it loops all of my code where it then will continue to loop so that 
// the code runs smoothly.



















