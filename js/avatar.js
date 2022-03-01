class Avatar {
    constructor(){
        this.width = 50;
        this.height = 110;
        this.position = {
            x: innerWidth / 2,
            y: 30
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
    }

    updateLocation(){
        this.renderAvatar();
        this.position.y += this.velocity.y;
        let feet_hitbox = this.position.y + this.height + this.velocity.y;
        if(feet_hitbox <= gameCanvas.height){
            this.velocity.y += GRAVITY;
        } else {
            this.velocity.y = 0;
        }
    }
}