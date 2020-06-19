var numSquares = 6;

var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay")
var squares = document.querySelectorAll(".square")
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")

for(var i=0; i<squares.length; i++){

	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click",function(){

      var clickedColor = this.style.backgroundColor
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!"
        resetButton.textContent = "Play Again?";
        for(var i=0; i<squares.length; i++){
        	squares[i].style.backgroundColor = pickedColor;
            h1.style.backgroundColor = pickedColor;
        }
              }
      else{
      	this.style.backgroundColor = "#232323"
      	messageDisplay.textContent = "Try Again!"

      }

	})
}



colorDisplay.textContent = pickedColor;



function pickColor(){
 var random = Math.floor(Math.random() * colors.length)
 return colors[random]
}



function generateRandomColors(num){
      
      var arr = []

      for(var i = 0; i < num; i++){

      	arr.push(randomColor())

      }	

      return arr;
}

function randomColor(){
   
   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);

   return "rgb(" + r + ", " + g + ", " + b + ")";
 }


resetButton.addEventListener("click", function(){

     colors = generateRandomColors(numSquares);

     pickedColor = pickColor();

     messageDisplay.textContent = "";

     colorDisplay.textContent = pickedColor;
     for(var i=0; i<squares.length; i++){

	squares[i].style.backgroundColor = colors[i];
	
	}

	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors"
 
})

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	 for(var i=0; i<squares.length; i++){

          if(colors[i]){
          	squares[i].style.backgroundColor = colors[i];
          }
          else{
          	squares[i].style.display = "none"
          }

	 }
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";

})

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	for(var i=0; i<squares.length; i++){
          	squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block"
          }
    resetButton.textContent = "New Colors" 
    messageDisplay.textContent = "";     
})







