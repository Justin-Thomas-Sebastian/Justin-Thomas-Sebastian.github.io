const movementKeys = {
    right: {
        pressed: false,
    },
    left: {
        pressed: false
    }
}

function animateCharacter(character){
    context.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    character.updateLocation();

    if(movementKeys.right.pressed && character.position.x <= gameCanvas.width - character.width){
        character.velocity.x = 10;
        console.log(character.position.x);
    } else if (movementKeys.left.pressed && character.position.x >= 0){
        character.velocity.x = -10;
        console.log(character.position.x);
    } else {
        character.velocity.x = 0;
    }

    if(movementKeys.right.pressed && movementKeys.left.pressed){
        character.velocity.x = 0;
    }

    requestAnimationFrame(() => {
        animateCharacter(character);
    }); 
}