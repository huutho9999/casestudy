class Snake {
    constructor(){
        this.vel = createVector(0,0);
        this.head = createVector(0,0);
        this.length = 0;
        this.body = [];
        this.isDead = false;
    }
    update(){
        this.body.push(createVector(this.head.x, this.head.y));

        this.head.x += this.vel.x * grid_size;
        this.head.y += this.vel.y * grid_size;

        this.head.x = (this.head.x + width) % width;
        this.head.y = (this.head.y + height) % height;

        if(this.length < this.body.length)
        {
            this.body.shift();
        }

        for(let vector of this.body)
        {
            if(vector.x == this.head.x && vector.y == this.head.y)
            {
                this.isDead = true;
            }
        }

    }
    show() {
        noStroke();
        // Tắt tính năng vẽ nét (đường viền)


        // Draw snake head
        fill(255);
        rect(this.head.x, this.head.y, grid_size, grid_size);

        // Draw snake body
        fill(155);
        for(let vector of this.body)
        {
            rect(vector.x, vector.y, grid_size, grid_size);
        }
    }
}