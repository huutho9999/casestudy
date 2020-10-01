let snake, food;

function setup() {
    createCanvas(width, height);
    frameRate(60);
    newGame();
}

function draw() {
    background(255, 204, 0);

    if(!snake.isDead){
        drawSnake();
    } else {
        newGame()
    }
}

function drawSnake() {
    // update every SNAKE_SPEED frame
    if(frameCount % snake_speed == 0)
        // FrameCount biến hệ thống chứa số lượng khung đã được hiển thị kể từ khi chương trình bắt đầu. Inside setup () giá trị là 0, sau lần lặp đầu tiên của draw, giá trị là 1, v.v.
    {
        snake.update();
    }
    //
    textSize(15);
    text("Score: " + snake.length, 250, 15);
    food.show();
    snake.show();

    // Handle when snake eat food
    if(snake.head.x == food.x && snake.head.y == food.y){
        eatFood();
    }
}

function newGame() {
    snake = new Snake();
    food = new Food();
}

function eatFood() {
    snake.length++;
    food.newFood();
}

function keyPressed() {
    if (keyCode == UP_ARROW && snake.vel.y != 1) {
        snake.vel.y = -1;
        snake.vel.x = 0;
    } else if (keyCode == DOWN_ARROW && snake.vel.y != -1) {
        snake.vel.y = 1;
        snake.vel.x = 0;
    }  else if (keyCode == LEFT_ARROW && snake.vel.x != 1) {
        snake.vel.y = 0;
        snake.vel.x = -1;
    } else if (keyCode == RIGHT_ARROW && snake.vel.x != -1) {
        snake.vel.y = 0;
        snake.vel.x = 1;
    }
}
// Vector vel dùng để xác định phương hướng đang đi