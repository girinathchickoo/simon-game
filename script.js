var array=["one","two","three","four"];
var gamePattern=[];
var buttonClicked=[];
var started=false;
var level=0;
function nextSequence(){
	buttonClicked=[];
	$("h1").text(`level ${level}`);
	var randomNumber=Math.floor(Math.random()*4);
	chosenColor=array[randomNumber];
	gamePattern.push(chosenColor);
	animation(chosenColor);
	


}
$("h1").on("click",function(){
	if(!started){
		
	nextSequence();
		started=true;}
});

$(".box").click(function (){
	var chosen=$(this).attr("id");
	buttonClicked.push(chosen);
	animatePress(chosen);
	checkArray(buttonClicked.length-1)})

function checkArray(check){
if(gamePattern[check]===buttonClicked[check]){
	if( buttonClicked.length===gamePattern.length ){
		level++;
		
		setTimeout(function(){nextSequence()},1000);
	}
	
}else{
		animation("wrong");
		startOver();
		
	}
}

function animation(color){
 $("#"+color).animate({opacity:0},10).animate({opacity:1},10);
 var a=new Audio(`sounds/${color}.mp3`);
 a.play();
}
function animatePress(c){
	$("#"+c).addClass("onpress");
	setTimeout(function(){$("#"+c).removeClass("onpress");},200);
	}
	




	function startOver(){
		gamePattern = [];
  started = false;
  $("h1").text("Game Over, Press reload to restart the game");

	};	

	














