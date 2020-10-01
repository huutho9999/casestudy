class Food{
    constructor () {
        this.newFood();
    }
    newFood(){
        this.x = Math.floor(random(width));
        this.y = Math.floor(random(height));

        this.x = Math.floor(this.x / grid_size) * grid_size;
        this.y = Math.floor(this.y / grid_size) * grid_size;
    }
    show(){
        fill(255, 40, 0);
        rect(this.x, this.y, grid_size, grid_size);

    }
}
