const avatarImage = new Image();
avatarImage.src = "assets/avatar-image.png";
const bgImage = new Image();
bgImage.src = "assets/marla-bg.png";
let globalAvatar;
let globalBg;

let avatarPromise = new Promise(function(myResolve, myReject) {
    avatarImage.onload = function() {
        if (avatarImage) {
            myResolve(avatarImage);
        } else {
            myReject("File not Found");
        }
    };
});

let bgPromise = new Promise(function(myResolve, myReject) {
    bgImage.onload = function() {
        if (bgImage) {
            myResolve(bgImage);
        } else {
            myReject("File not Found");
        }
    };
});

async function initializeGame(){
    let a = await avatarPromise;
    let b = await bgPromise;
    globalAvatar = new Avatar(a);
    globalBg = new Background(b);
    animateCharacter(globalAvatar, globalBg);
}

initializeGame();