function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this.draw = function() {
        ctx.fillStyle = "#000000";

        for (let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);

        }
        ctx.fillRect(this.x, this.y, scale, scale);


    }

    this.update = function() {
    	
        this.tail[this.total - 1] = { x: this.x, y: this.y }
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];

        }

        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if (this.x > canvas.width) {
            this.x = 0;
        }
        if (this.y > canvas.height) {
            this.y = 0;
        }
        if (this.x < 0) {
            this.x = canvas.width;
        }
        if (this.y < 0) {
            this.y = canvas.height;
        }
    }

    this.eat = function(fruit) {
        if (fruit.x == this.x && fruit.y == this.y) {
            this.total++;
            console.log(this.tail)
            return true;
        }
        return false;
    }

    this.changeDirection = function(direction) {
        switch (direction) {
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale;
                break;
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale;
                break;
            case 'Right':
                this.xSpeed = scale;
                this.ySpeed = 0;
                break;
            case 'Left':
                this.xSpeed = -scale;
                this.ySpeed = 0
                break;
        }
    }
}