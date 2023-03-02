var roundness = document.getElementById('roundness')
var spread = document.getElementById('spread')
var transparency = document.getElementById('transparency')
var canvas = document.getElementById('Canvas'),
    context = canvas.getContext('2d')
    drawTextBG(context, "Forgotten Dreams", "800 12pt Helvetica", canvas.width / 5,200,transparency.value/100)
    transparency.addEventListener('change',()=>
    {
        context.clearRect(0, 0, canvas.width, canvas.height);
        console.log(transparency.value/100)
        drawTextBG(context,"Forgotten Dreams","800 12pt Helvetica", canvas.width / 5, 200,transparency.value/100,spread.value)
    })

    roundness.addEventListener('change',()=>
    {
        context.clearRect(0, 0, canvas.width, canvas.height);
        console.log(transparency.value/100)
        drawTextBG(context,"Forgotten Dreams","800 12pt Helvetica", canvas.width / 5, 200,transparency.value/100,spread.value)
    })

    spread.addEventListener('change',()=>
    {
        context.clearRect(0, 0, canvas.width, canvas.height);
        console.log(transparency.value/100)
        drawTextBG(context,"Forgotten Dreams","800 12pt Helvetica", canvas.width / 5, 200,transparency.value/100,spread.value)
    })


function drawTextBG(ctx, txt, font, x, y,opacity,spread) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();

    ctx.font = font;
    ctx.fillStyle = '#f50';

    var width = ctx.measureText(txt).width;
    ctx.globalAlpha = opacity
    ctx.fillRect(x-spread, y / 10-spread, width+2*spread, parseInt(font, 10)+2*spread);

    ctx.fillStyle = '#000';
    
    ctx.globalAlpha = 1
  
    ctx.fillText(txt, x, y);

    ctx.restore();
}