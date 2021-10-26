var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"); // create 2d drawing object
var radius = canvas.height / 2; // calculate the radius of canvas
ctx.translate(radius,radius);
radius = radius * 0.90;
drawClock();
setInterval(drawClock,1000);


function drawClock() {
    DrawFace(ctx,radius);
    DrawNumbers(ctx, radius);
    DrawTime(ctx,radius);

}

function DrawFace(ctx, radius)
{
    var grad; 
    ctx.beginPath();               // line 16 to 18 draw circle
    ctx.arc(0,0,radius,0,2*Math.PI);
    ctx.fillStyle ='white';
    ctx.fill();
    grad = ctx.createRadialGradient(0,0,radius*0.95,0,0,radius*1.05); 
    grad.addColorStop(0,'skyblue');
    grad.addColorStop(0.5,'white');    // line 20 to 22 draw niddle 
    grad.addColorStop(1,'skyblue');              // addcolorstop use for 3d effect
    ctx.strokeStyle = grad; 
    ctx.lineWidth = radius*0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0,0,radius*0.1,0,2*Math.PI);        //line 26 to 29 draw actual center of clock
    ctx.fillStyle='#333';
    ctx.fill();
}

function DrawNumbers(ctx,radius){
    var ang;
    var num;
    ctx.font =radius*0.15 + "px arial";  // set font size to 15% of radius
    ctx.textBaseline = "middle";
    ctx.textAlign="center";

    for(num = 1; num <=12; num++){
        ang = num*Math.PI/6;
        ctx.rotate(ang);
        ctx.translate(0,-radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(),0,0);
        ctx.rotate(ang);
        ctx.translate(0,radius*0.85);
        ctx.rotate(-ang);
    }
}
function DrawTime(ctx,radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    // hour
    hour = hour%12;
    hour = (hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx,hour,radius*0.5,radius*0.07);
    //minute hand
    minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx,minute,radius*0.7,radius*0.07);
    // second
    second = (second*Math.PI/30);
    drawHand(ctx,second,radius*0.8,radius*0.02);
}

function drawHand(ctx, pos, length, width){
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0,-length);
    ctx.stroke();
    ctx.rotate(-pos);
}

