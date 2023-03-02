const t=document.getElementById('t');
var image = document.querySelector('img');
// var hello=document.getElementById('colorpicker');
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
t.addEventListener('change',()=>
{
    
    draw();
    
})

function draw(){
  
   
    
    var w = canvas.width ;
    var h = canvas.height;
    context.clearRect(0, 0, w, h);
    context.rect(0, 0, w, h);
    context.drawImage(image, 0, 0,w,h);
    context.fillStyle = 'rgba(0,0,0,'+ t.value/100+')'; 
    context.fillRect(0, 0,w, h);
}