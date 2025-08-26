var audio = new Audio();
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function (event){
        console.log(event);
        switchSound(event.target.classList[0]);
    });
});


document.addEventListener("keydown", function (event){
    switchSound(event.key);
});

function switchSound(key){
    switch(key){
        case "w":
            audio.src = "./sounds/tom-1.mp3";
            break;
        case "a":
            audio.src = "./sounds/tom-2.mp3";
            break;
        case "s":
            audio.src = "./sounds/tom-3.mp3";
            break;
        case "d":
            audio.src = "./sounds/tom-4.mp3";
            break;
        case "j":
            audio.src = "./sounds/snare.mp3";
            break;
        case "k":
            audio.src = "./sounds/crash.mp3";
            break;
        case "l":
            audio.src = "./sounds/kick-bass.mp3";
            break;
        default:
    }
    playAnimation(key);
    audio.play();
}

function playAnimation(key){
    console.log(key+" drum");
    var button = document.querySelector("."+key);
    if (button){
        button.classList.add("pressed");
        setTimeout(function(){
            button.classList.remove("pressed");
        }, 100);
    }
}