var text_box=document.getElementById('text_box')
var offset=document.getElementById('offset')
var direction=document.getElementById('direction')
  var text_button=document.getElementById('text_button')
  var canvas = document.getElementById('Canvas'),
  context = canvas.getContext('2d')


// context.fillStyle='hsv(260,90,92)';
context.font = "800 30pt Helvetica";
context.shadowOffsetX =direction.value/3 
context.shadowOffsetY = offset.value/10
context.font = "900 30pt Helvetica";
context.lineWidth=2;
canvas.fillStyle='blue'
context.fillText("Design Bundles", canvas.width/5, 200);


offset.addEventListener('change',()=>
{
  context.clearRect(0, 0, canvas.width, canvas.height);
  console.log(offset.value)
  context.shadowOffsetX =offset.value/5* Math.cos((Math.PI/2)+direction.value*Math.PI/180)
  context.shadowOffsetY = offset.value/5* Math.sin((Math.PI/2)+direction.value*Math.PI/180)
  context.shadowColor = "#BC9BE8";

  context.font = "800 30pt Helvetica";
  context.lineWidth=2;
  context.fillStyle='black'
  context.fillText("Design Bundles", canvas.width/5, 200);

  context.shadowOffsetX =offset.value/10* Math.cos((Math.PI/2)+direction.value*Math.PI/180)
  context.shadowOffsetY = offset.value/10* Math.sin((Math.PI/2)+direction.value*Math.PI/180)
  context.shadowColor = " #995DE8";

  context.font = "800 30pt Helvetica";
  context.lineWidth=2;

  context.fillText("Design Bundles", canvas.width/5, 200);
})


direction.addEventListener('change',()=>
{
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  console.log(offset.value)

  {
    context.shadowOffsetX = offset.value/5* Math.cos((Math.PI/2)+direction.value*Math.PI/180)
    context.shadowOffsetY = offset.value/5* Math.sin((Math.PI/2)+direction.value*Math.PI/180)
  }
  context.shadowColor = "#BC9BE8";


  context.font = "800 30pt Helvetica";
  
  context.font = "900 30pt Helvetica";
  context.lineWidth=2;
  context.fillText("Design Bundles", canvas.width/5, 200);
  context.shadowOffsetX =offset.value/10* Math.cos((Math.PI/2)+direction.value*Math.PI/180)
  context.shadowOffsetY = offset.value/10* Math.sin((Math.PI/2)+direction.value*Math.PI/180)
  context.shadowColor = " #995DE8";

  context.font = "800 30pt Helvetica";
  context.lineWidth=2;

  context.fillText("Design Bundles", canvas.width/5, 200);
})

    

  

    
   

  
