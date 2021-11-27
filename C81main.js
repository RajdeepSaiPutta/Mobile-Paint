canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="purple";
//var mousevent="empty";
var last_position_x,last_position_y;
var width=screen.width;
new_width=width-70;
new_height=screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
/*
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    colour=document.getElementById("colour").value;
mousevent="mousedown"
console.log("mousedown")
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    console.log("mouseup")
mousevent="mouseup"
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    console.log("mouseleave")
mousevent="mouseleave"
}


canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
console.log("mousemove")
current_position_x=e.clientX-canvas.offsetLeft;
current_position_y=e.clientY-canvas.offsetTop;
if(mousevent=="mousedown"){
    console.log("mousemove+mousedown")
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.moveTo(last_position_x,last_position_y);
ctx.lineTo(current_position_x,current_position_y);
ctx.stroke();
}
last_position_x=current_position_x;
last_position_y=current_position_y;
}
*/
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    colour=document.getElementById("colour").value;
    last_position_x=e.touches[0].clientX-canvas.offsetLeft;
last_position_y=e.touches[0].clientY-canvas.offsetTop
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
console.log("touchmove")
current_position_x=e.touches[0].clientX-canvas.offsetLeft;
current_position_y=e.touches[0].clientY-canvas.offsetTop;
    console.log("mousemove+mousedown")
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.moveTo(last_position_x,last_position_y);
ctx.lineTo(current_position_x,current_position_y);
ctx.stroke();
last_position_x=current_position_x;
last_position_y=current_position_y;
}
function erase(){
ctx.clearRect(0,0,canvas.width,canvas.height);

}