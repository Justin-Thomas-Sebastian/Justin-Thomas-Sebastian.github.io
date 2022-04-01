const movementKeys = {
    right: {
        pressed: false,
    },
    left: {
        pressed: false
    }
}

/*
xOffset starts at 0.

xOffset will increment anytime the character moves to the right,
or when the bg image moves to the left (character has reached right bounds).

xOffset will decrement anytime the character moves to the left,
or when the bg image moves to the right (character has reached left bounds).

xOffSet is used to terminate bg image scroll when right bounds are reached.
Useful because xOffSet increase/decrease remains constant,
no matter what screen size the user is on.
*/ 

let xOffSet = 0;
const xOffSetMax = 293; // bg image will stop scrolling to the left when this is reached (max right bounds)
const xOffSetMin = -64;
const wallSize = 200;   // left/right bounds for the character. once reached, bg image will start scrolling
const leftBuffer = -2;  // eliminate whitespace at the left edge when fully scrolled
const movespeedLeft = -7;
const movespeedRight = 7;

function animateCharacter(character, bgImage){
    
    // reset environment for next frame
    context.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    bgImage.renderBackground();
    character.updateLocation();

    // move character
    if(movementKeys.right.pressed && !movementKeys.left.pressed && 
       character.position.x < gameCanvas.width - character.width - wallSize && xOffSet <= xOffSetMax){
            character.velocity.x = movespeedRight;
            xOffSet++;
            console.log("char position:" + character.position.x);
            console.log("xOffSet:" + xOffSet);
    } else if (movementKeys.left.pressed && !movementKeys.right.pressed && 
        character.position.x >= 0 + wallSize){
            character.velocity.x = movespeedLeft;
            xOffSet--;
            console.log("char position:" + character.position.x);
            console.log("xOffSet:" + xOffSet);
    } else {
        character.velocity.x = 0;
    }
    
    // scroll background image
    if(movementKeys.right.pressed && !movementKeys.left.pressed &&
        character.position.x >= gameCanvas.width - character.width - wallSize && xOffSet <= xOffSetMax){
            xOffSet++;
            bgImage.position.x += movespeedLeft;
            console.log("char position:" + character.position.x);
            console.log("xOffSet:" + xOffSet);
            console.log("move bg image right");
            console.log("current bg posish: " + bgImage.position.x);
    } else if (movementKeys.left.pressed && !movementKeys.right.pressed &&
        character.position.x <= 0  + wallSize && 
        bgImage.position.x < leftBuffer){
            xOffSet--;
            bgImage.position.x += movespeedRight;
            console.log("char position:" + character.position.x);
            console.log("xOffSet:" + xOffSet);
            console.log("bgImage posish: " + bgImage.position.x);
    }

    // stop movement if both left and right keys are pressed simultaneously
    if(movementKeys.right.pressed && movementKeys.left.pressed){
        character.velocity.x = 0;
    }

    // hide L arrow when max left bounds reached
    if(xOffSet <= xOffSetMin){
        document.getElementById("left-arrow").style.display = "none";
        movementKeys.left.pressed = false;
    } else {
        document.getElementById("left-arrow").style.display = "block";
    }

    // hide R arrow when max right bounds reached
    if(xOffSet >= xOffSetMax){
        document.getElementById("right-arrow").style.display = "none";
        movementKeys.right.pressed = false;
    } else {
        document.getElementById("right-arrow").style.display = "block";
    }

    requestAnimationFrame(() => {
        animateCharacter(character, bgImage);
    }); 
}