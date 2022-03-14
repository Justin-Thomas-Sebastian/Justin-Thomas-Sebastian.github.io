class Avatar {
    constructor(){
        this.width = 70;
        this.height = 150;
        this.position = {
            x: 200,
            y: 0
        }
        this.velocity = {
            x: 0,
            y: 0
        }
    }

    renderAvatar(){
        context.fillRect(
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
        context.fillStyle = "red";
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