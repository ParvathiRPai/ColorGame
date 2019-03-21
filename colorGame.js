//var colors=["rgb(255, 0, 0)","rgb(255, 0, 255)","rgb(255, 255, 0)","rgb(0, 255, 255)","rgb(255, 255, 255)","rgb(0, 255, 0)"];

var numberofsquares=6;
var colors=generarteRandomColors(numberofsquares);
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colordisplay");
var message=document.getElementById("message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var pickedColor=pickColor();
colorDisplay.textContent = pickedColor;
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click", function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numberofsquares=3;
	colors=generarteRandomColors(numberofsquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
});
hardbtn.addEventListener("click", function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numberofsquares=6;
	colors=generarteRandomColors(numberofsquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
});
resetButton.addEventListener("click", function()
{
//generate all new colors
colors=generarteRandomColors(numberofsquares);
//pick a random color from array
var pickedColor=pickColor();
colordisplay.textContent=pickedColor;
message.textContent="";
this.textContent="New Colors";
//change colors of squares
for(var i=0; i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
}
h1.style.backgroundColor="steelblue";
});
for(var i=0; i<squares.length;i++)
{
	// add initial colors to square
	squares[i].style.backgroundColor=colors[i];
  
    // grab color of clicked square 
     
     squares[i].addEventListener("click", function()
     {
     	var clickedColor=this.style.backgroundColor;
     	if(clickedColor===pickedColor)
     	{
     	message.textContent="Correct!";
     	resetButton.textContent="PlayAgain ?"
     	changeColor(clickedColor);
     	h1.style.backgroundColor=clickedColor;

          }
     	else
     	{
     		this.style.backgroundColor="#232323";
     	    message.textContent="Try Again";
     	}
     
     });

} 

function changeColor(color)
{
	for(var i=0; i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}
function pickColor()
{
	var random =Math.floor(Math.random()*colors.length);
	return colors[random];

}
function generarteRandomColors(num)
{
	var arr=[]
	for(var i=0;i<num;i++)
	{
      arr.push(randomColor())
	}
	return arr;
}
function randomColor()
{
var r=Math.floor(Math.random()*256);
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);
return "rgb("+r+", "+g+", "+b+")";
}
