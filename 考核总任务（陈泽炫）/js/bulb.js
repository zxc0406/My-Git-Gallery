function bulb(){
    var bulb1=document.getElementsByClassName("bulb1")[0];
    var ctx=bulb1.getContext("2d");
    ctx.beginPath();
    ctx.arc(150,80,40,0.75*Math.PI,0.25*Math.PI);
    ctx.lineWidth=8;
    ctx.strokeStyle='rgb(244,152,0)';
    ctx.stroke();

    var bulb5=document.getElementsByClassName("bulb5")[0];
    var ctx5=bulb5.getContext("2d");
    ctx5.beginPath();
    ctx5.arc(140,10,50,0,Math.PI);
    ctx5.lineWidth=100;
    ctx5.strokeStyle='rgb(46,182,186)';
    ctx5.stroke();
}
addLoadEvent(bulb);