function animateCharacter(character){
    context.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    character.updateLocation();
    requestAnimationFrame(() => {
        animateCharacter(character);
    }); 
}