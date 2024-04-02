var canvas = new fabric.Canvas('myCanvas');
var ball_y = 0;
var ball_x = 0;
var hole_y = 400;
var hole_x = 800;
// Defina as posições iniciais da bola e do buraco.

var block_image_width = 5;
var block_image_height = 5;

function loadImg() {
    fabric.Image.fromURL("golf-h.png", function(Img) {
        hole_obj = Img;
        hole_obj.scaleToWidth(50);
        hole_obj.scaleToHeight(50); // Corrigido
        hole_obj.set({
            top: hole_y,
            left: hole_x
        });
        canvas.add(hole_obj);
    });
    new_image();
}

function new_image() {
    fabric.Image.fromURL("ball.png", function(Img) {
        ball_obj = Img;
        ball_obj.scaleToWidth(50);
        ball_obj.scaleToHeight(50); // Corrigido
        ball_obj.set({
            top: ball_y,
            left: ball_x
        });
        canvas.add(ball_obj);
    });
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if ((ball_x == hole_x) && (ball_y == hole_y)) { // Corrigido
        canvas.remove(ball_obj);
        console.log("Você atingiu o objetivo!!!");
        document.getElementById("hd3").innerHTML = "Parabéns! Você acertou"; // Corrigido
        document.getElementById("myCanvas").style.borderColor = "red";
    } else {
        if (keyPressed == '38') {
            up();
            console.log("up");
        }
        if (keyPressed == '40') {
            down();
            console.log("down");
        }
        if (keyPressed == '37') {
            left();
            console.log("left");
        }
        if (keyPressed == '39') {
            right();
            console.log("right");
        }
    }
}

function up() {
    if (ball_y >= 5) {
        ball_y = ball_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When UP arrow key is pressed, X =" + ball_x + ", Y = " + ball_y);
        canvas.remove(ball_obj);
        new_image();
    }
}

function down() {
    if (ball_y <= 450) { // Corrigido
        ball_y = ball_y + block_image_height; // Corrigido
        console.log("block image height = " + block_image_height);
        console.log("When DOWN arrow key is pressed, X =" + ball_x + ", Y = " + ball_y);
        canvas.remove(ball_obj);
        new_image();
    }
}

function left() {
    if (ball_x > 5) {
        ball_x = ball_x - block_image_width; // Corrigido
        console.log("block image width = " + block_image_width); // Corrigido
        console.log("When LEFT arrow key is pressed, X =" + ball_x + ", Y = " + ball_y);
        canvas.remove(ball_obj);
        new_image();
    }
}

function right() {
    if (ball_x <= 1050) {
        ball_x = ball_x + block_image_width; // Corrigido
        console.log("block image width = " + block_image_width); // Corrigido
        console.log("When RIGHT arrow key is pressed, X =" + ball_x + ", Y = " + ball_y);
        canvas.remove(ball_obj);
        new_image();
    }
}
