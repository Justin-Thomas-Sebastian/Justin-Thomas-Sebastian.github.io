// keyboard move left / right
document.addEventListener("keydown", (e) => {
    const keyCode = e.code;
    switch(keyCode){
        case "KeyA":
            movementKeys.left.pressed = true;
            break;
        case "KeyD":
            movementKeys.right.pressed = true;
            break;
        case "KeyS":
            // crouch? undecided
            break;
        default:
            break;
    }
});

// keyboard stop moving left/right
document.addEventListener("keyup", (e) => {
    const keyCode = e.code;
    switch(keyCode){
        case "KeyA":
            movementKeys.left.pressed = false;
            break;
        case "KeyD":
            movementKeys.right.pressed = false;
            break;
        case "KeyS":
            break;
        default:
            break;
    }
});

let leftArrow = document.getElementById("left-arrow");
let rightArrow = document.getElementById("right-arrow");

// move left/right on touchscreen start
leftArrow.addEventListener("touchstart", (e) => {
    movementKeys.left.pressed = true;
});
rightArrow.addEventListener("touchstart", (e) => {
    movementKeys.right.pressed = true;
});

// move left/right on mouse down
leftArrow.addEventListener("mousedown", (e) => {
    movementKeys.left.pressed = true;
});
rightArrow.addEventListener("mousedown", (e) => {
    movementKeys.right.pressed = true;
});

// stop moving on touch end
rightArrow.addEventListener("touchend", (e) => {
    movementKeys.right.pressed = false;
});

leftArrow.addEventListener("touchend", (e) => {
    movementKeys.left.pressed = false;
});

// stop moving on mouse up
leftArrow.addEventListener("mouseup", (e) => {
    movementKeys.left.pressed = false;
});
rightArrow.addEventListener("mouseup", (e) => {
    movementKeys.right.pressed = false;
});

// jump
document.addEventListener("keypress", (e) => {
    const keyCode = e.code;
    if(keyCode === "KeyW"){
        let feet_hitbox = avatar.position.y + avatar.height + avatar.velocity.y + 40;
        if(feet_hitbox <= gameCanvas.height){
            avatar.velocity.y += GRAVITY;
        } else {
            avatar.velocity.y -= 25;
        }   
    }
});

// check if mobile/touchscreen device
const isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/)) && 
                 (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));

// reload page when user resizes window, to avoid canvas looking weird
// unless on mobile
window.onresize = function(){
    if(!isMobile){
        window.location.href = window.location.href;
        console.log("resize");
    }
}