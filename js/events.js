// move left / right
document.addEventListener("keydown", (e) => {
    const keyCode = e.code;
    switch(keyCode){
        case "KeyA":
            avatar.velocity.x = -5;
            break;
        case "KeyD":
            avatar.velocity.x = 5;
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
        case "KeyA":
            avatar.velocity.x = 0;
            break;
        case "KeyD":
            avatar.velocity.x = 0;
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
    if(keyCode === "Space"){
        let feet_hitbox = avatar.position.y + avatar.height + avatar.velocity.y;
        if(feet_hitbox <= gameCanvas.height){
            avatar.velocity.y += GRAVITY;
        } else {
            avatar.velocity.y -= 25;
        }   
    }
});