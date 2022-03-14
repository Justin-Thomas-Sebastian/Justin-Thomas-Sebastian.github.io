// move left / right
document.addEventListener("keydown", (e) => {
    const keyCode = e.code;
    switch(keyCode){
        case "ArrowLeft":
        case "KeyA":
            movementKeys.left.pressed = true;
            break;
        case "ArrowRight":
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

// stop moving left/right
document.addEventListener("keyup", (e) => {
    const keyCode = e.code;
    switch(keyCode){
        case "ArrowLeft":
        case "KeyA":
            movementKeys.left.pressed = false;
            break;
        case "ArrowRight":
        case "KeyD":
            movementKeys.right.pressed = false;
            break;
        case "KeyS":
            break;
        default:
            break;
    }
});

// jump
document.addEventListener("keypress", (e) => {
    const keyCode = e.code;
    if(keyCode === "Space" || keyCode === "KeyW"){
        let feet_hitbox = avatar.position.y + avatar.height + avatar.velocity.y + 40;
        if(feet_hitbox <= gameCanvas.height){
            avatar.velocity.y += GRAVITY;
        } else {
            avatar.velocity.y -= 25;
        }   
    }
});