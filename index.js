function PlaySound(color, audio){
    this.color=color;
    this.audio=audio;
    $(color).on("click",function(){
    
        audio1=new Audio(audio);
        audio1.play();
    
    
    $(color).addClass("pressed");
    
    setTimeout(function() {
        $(color).removeClass("pressed");
        }, 100); 
        
        

})}

var playSound=new PlaySound(".green","sounds/green.mp3");
var playSound=new PlaySound(".red","sounds/red.mp3");
var playSound=new PlaySound(".yellow","sounds/yellow.mp3");
var playSound=new PlaySound(".blue","sounds/blue.mp3");
