const avatarImage = new Image();
avatarImage.src = "../assets/avatar-image.png";

class Avatar {
    constructor(image){
        this.position = {
            x: 200,
            y: 0
        }
        this.velocity = {
            x: 0,
            y: 0
        }

        this.image = image;
        this.width = image.width;
        this.height = image.height;
    }

    renderAvatar(){
        context.drawImage(this.image, this.position.x, this.position.y);  
    }

    updateLocation(){
        this.renderAvatar();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        
        let feet_hitbox = this.position.y + this.height + this.velocity.y + 40;
        if(feet_hitbox <= gameCanvas.height){
            this.velocity.y += GRAVITY;
        } else {
            this.velocity.y = 0;
        }
    }
}