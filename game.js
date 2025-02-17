alert("hello");
var gamePattern = [];
var colour = ["green","red","yellow","blue"];
function nextSequence(){
    var randomnumber = Math.floor(Math.random()*4);
    var choosenColor = colour[randomnumber];
    gamePattern.push(choosenColor);
    return choosenColor;
}
 $(".red").on("click",function(event){
    $(".red").addClass("pressed");
    var choosenColor = nextSequence();
    if(choosenColor === "red"){
        var audio = new Audio('sounds/wrong.mp3');
        $("body").css("background-color","red");
        setTimeout(function(){
            $("body").css("background-color","#011F3F");
        },200);
        $("h1").text("YOUR SCORE:"+ (gamePattern.length - 1 )+". Game ended. Press a key to 'Restart'");
        gamePattern = []; 
    }else{
        var audio = new Audio('sounds/red.mp3');
        $("h1").text("SCORE : "+gamePattern.length);
    }
    audio.play();
    setTimeout(function(){
        $(".btn").removeClass("pressed");
    },100);
 });
 $(".blue").on("click",function(event){
    $(".blue").addClass("pressed");
    var choosenColor = nextSequence();
    if(choosenColor === "blue"){
        var audio = new Audio('sounds/wrong.mp3');
        $("body").css("background-color","red");
        setTimeout(function(){
            $("body").css("background-color","#011F3F");
        },200);
        $("h1").text("YOUR SCORE:"+ (gamePattern.length - 1) +". Game ended. Press a key to 'Restart'");
        gamePattern = []; 
        gamePattern = []; 
    }else{
        var audio = new Audio('sounds/blue.mp3');
        $("h1").text("SCORE : "+gamePattern.length);
    }
    audio.play();
    setTimeout(function(){
        $(".btn").removeClass("pressed");
    },100);
 });
 $(".yellow").on("click",function(event){
    $(".yellow").addClass("pressed");
    var choosenColor = nextSequence();
    if(choosenColor === "yellow"){
        var audio = new Audio('sounds/wrong.mp3');
        $("body").css("background-color","red");
        setTimeout(function(){
            $("body").css("background-color","#011F3F");
        },200);
        $("h1").text("YOUR SCORE:"+( gamePattern.length - 1 )+". Game ended. Press a key to 'Restart'");
        gamePattern = []; 
    }else{
        var audio = new Audio('sounds/yellow.mp3');
        $("h1").text("SCORE : "+gamePattern.length);
    }
    audio.play();
    setTimeout(function(){
        $(".btn").removeClass("pressed");
    },100);
 });
 $(".green").on("click",function(event){
    $(".green").addClass("pressed");
    var choosenColor = nextSequence();
    if(choosenColor === "green"){
        var audio = new Audio('sounds/wrong.mp3');
        $("body").css("background-color","red");
        setTimeout(function(){
            $("body").css("background-color","#011F3F");
        },200);
        $("h1").text("YOUR SCORE:"+( gamePattern.length - 1 )+". Game ended. Press a key to 'Restart'");
        gamePattern = []; 
    }else{
        var audio = new Audio('sounds/green.mp3');
        $("h1").text("SCORE : "+gamePattern.length);
    }
    audio.play();
    setTimeout(function(){
        $(".btn").removeClass("pressed");
    },100);
 });
