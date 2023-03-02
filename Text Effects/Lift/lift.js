var intensity=document.getElementById('intensity')
  var canvas = document.getElementById('Canvas'),
    context = canvas.getContext('2d')


  context.fillStyle="#5E17EB"
context.shadowColor='black'
    context.shadowBlur=intensity.value/5
    context.font = "800 30pt Helvetica";
    context.fillText("Design Bundles", canvas.width/5, 200);

    intensity.addEventListener('change',()=>
    {
      console.log(intensity.value);
        context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle="#5E17EB"
        // context.shadowColor = `rgb(${intensity.value},${intensity.value},${intensity.value})`;
        context.shadowColor='black'
        context.shadowBlur=intensity.value/5
        context.font = "800 30pt Helvetica";
        // context.lineWidth=2;
        context.fillText("Design Bundles", canvas.width/5, 200);
    })