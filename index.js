var audio = new Audio();

document.addEventListener("keydown", function (event){
    switch(event.key){
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
    audio.play();
});


