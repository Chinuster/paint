var mouseEvent="empty";
var last_X, last_Y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width="1";
canvas.addEventListener("mouseDown",f1);

function f1(e){
    
mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove",f2);

function f2(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;

        console.log("current position of x amd y is ");
        console.log("x="+ last_X + "y="+last_Y);
        ctx.moveTo(last_X,last_Y);

        console.log("Current position of x and y coordinates = ");
         console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
          ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
           ctx.stroke();
    }
    last_X=current_position_of_mouse_x;
    last_Y=current_position_of_mouse_y;
    
}
canvas.addEventListener("mouseup",f3);
function f3(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",f4);
function f4(e){
    mouseEvent="mouseLeave";
}

