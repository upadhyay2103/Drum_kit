for(var i=0;i<7;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function()
    {
       var char=this.innerHTML;
       handleBoth(char);
    });
}
document.addEventListener("keydown",function(event)
{
    var char=event.key;
    handleBoth(char);
});

function handleBoth(key)
{
    switch(key)
    {
        case "w":
            var tom4=new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        
        case "a":
            var tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "s":
            var tom2=new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "d":
            var tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "j":
            var snare=new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var kick_bass=new Audio('sounds/kick_bass.mp3');
            kick_bass.play();
            break;

        case "l":
            var crash=new Audio('sounds/crash.mp3');
            crash.play();
            break;

        default:
    
    }
    addAnimation(key);
}

function addAnimation(key)
{
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function()
    {
        document.querySelector("."+key).classList.remove("pressed");
    },100);
}





    // var audio=new Audio('sounds/tom-3.mp3');
    // audio.play();