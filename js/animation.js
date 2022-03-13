const movementKeys = {
    right: {
        pressed: false,
    },
    left: {
        pressed: false
    }
}

let xOffSet = 0;
const xOffSetMax = 265;
const wallSize = 100;

function animateCharacter(character, bgImage){
    context.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    bgImage.renderBackground();
    character.updateLocation();

    // move character
    if(movementKeys.right.pressed && !movementKeys.left.pressed && 
       character.position.x <= gameCanvas.width - character.width - wallSize && xOffSet <= xOffSet){
            character.velocity.x = 10;
            xOffSet++;
            console.log("char position:" + character.position.x);
            console.log("xOffSet:" + xOffSet);
    } else if (movementKeys.left.pressed && !movementKeys.right.pressed && 
        character.position.x >= 0 + wallSize){
            character.velocity.x = -10;
            xOffSet--;
            console.log("char position:" + character.position.x);
            console.log("xOffSet:" + xOffSet);
    } else {
        character.velocity.x = 0;
    }
    
    // scroll background
    if(movementKeys.right.pressed && !movementKeys.left.pressed &&
        character.position.x >= gameCanvas.width - character.width - wallSize && xOffSet <= xOffSetMax){
            xOffSet++;
            bgImage.position.x -= 10;
            console.log("char position:" + character.position.x);
            console.log("xOffSet:" + xOffSet);
            console.log("move bg image right");
    } else if (movementKeys.left.pressed && !movementKeys.right.pressed &&
        character.position.x <= 0  + wallSize && 
        bgImage.position.x < 0){
            xOffSet--;
            bgImage.position.x += 10;
            console.log("char position:" + character.position.x);
            console.log("xOffSet:" + xOffSet);
            console.log("bgImage posish: " + bgImage.position.x);
    }

    // stop movement if both left and right keys are pressed simultaneously
    if(movementKeys.right.pressed && movementKeys.left.pressed){
        character.velocity.x = 0;
    }

    requestAnimationFrame(() => {
        animateCharacter(character, bgImage);
    }); 
}