Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");


color = "red";


var gradient = ctx.createLinearGradient(0, 0, 170, 0);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.5", "red");
gradient.addColorStop("1.0", "gold");
ctx.strokeStyle = gradient;
ctx.beginPath();
ctx.strokeStyle = gradient;
ctx.lineWidth = 6;
ctx.rect(120, 120, 400, 250);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "skyblue";
ctx.lineWidth = 6;
ctx.arc(200, 200, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 6;
ctx.arc(320, 200, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 6;
ctx.arc(440, 200, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "gold";
ctx.lineWidth = 6;
ctx.arc(260, 260, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 6;
ctx.arc(380, 260, 50, 0, 2 * Math.PI);
ctx.stroke();





Canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {


    //taking color from input box
    //additional activity start
    color = document.getElementById("color").value;
    console.log(color);
    //addition activity ends

    mouse_x = e.clientX - Canvas.offsetLeft;
    mouse_y = e.clientY - Canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 30, 0, 2 * Math.PI);
    ctx.stroke();
}
var name = 0;


//additional activity

function clearArea() {
    ctx.clearRect(0, 0, Canvas.width, Canvas.height);
}