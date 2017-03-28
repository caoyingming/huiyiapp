var winW=document.documentElement.clientWidth;
var desW=720;
var scale=720/100;
document.documentElement.style.fontSize=winW/scale+"px";
window.onresize=function(){
    var winW=document.documentElement.clientWidth;
    document.documentElement.style.fontSize=winW/scale+"px";
}