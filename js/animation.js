function animateAvatar(){
    context.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    avatar.updateLocation();
    requestAnimationFrame(animateAvatar); 
}