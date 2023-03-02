const canvas = document.getElementById("canvas");
const ctx= canvas.getContext("2d");
let image=document.getElementById('image')
const t=document.getElementById('t');


//  image.onload = function () {
//    ctx.drawImage(image, 0, 0, canvas.width, canvas.height); 
//    imageData = ctx.getImageData(0, 0, 800, 800);
//    const pixels = imageData.data;
//    console.log(pixels);
//    for (let i = 0; i <= canvas.width; i += 4) {
//     for (let j = 0; j <= canvas.height; j += 4) {
//         imageData = ctx.getImageData(i, j, 4, 4)
//         data = imageData.data
//         imageData.data = pixalate(data)
//         ctx.putImageData(imageData, i, j)
//     }
// }
//  }
 var pixelation=10;
t.addEventListener('change',()=>
{
  //  pixelation=1;
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height); 
  imageData = ctx.getImageData(0, 0, 800, 800);
  const pixels = imageData.data;
  // console.log(pixels);
  for (let i = 0; i <= canvas.width; i += 4) {
   for (let j = 0; j <= canvas.height; j += 4) {
       imageData = ctx.getImageData(i, j, 4, 4)
       data = imageData.data
       imageData.data = pixalate(data)
       ctx.putImageData(imageData, i, j)
   }
  }
  var sourceHeight=image.height;
  var sourceWidth=image.width;
  
  var destX=canvas.width/2-sourceWidth/2;
  var destY=canvas.height/2-sourceHeight/2;
  focusImage(ctx, image, sourceWidth, sourceHeight, destX, destY) 
})


 
 
 
 function pixalate(data) {
    
 

    for (let j = 0; j <= data.length; j += 4) {

        data[j] = data[0];
        data[j + 1] = data[1];
        data[j + 2] = data[2];
    }
 
    return data;
}


function focusImage(context, imageObj, sourceWidth, sourceHeight, destX, destY) {
    var sourceX = destX; 
    var sourceY = destY;

    var imageData = context.getImageData(sourceX, sourceY, sourceWidth, sourceHeight);
    var data = imageData.data;

    for(var y = 0; y < sourceHeight; y += pixelation) {
      for(var x = 0; x < sourceWidth; x += pixelation) {
        var red = data[((sourceWidth * y) + x) * 4];
        var green = data[((sourceWidth * y) + x) * 4 + 1];
        var blue = data[((sourceWidth * y) + x) * 4 + 2];

        for(var n = 0; n < pixelation; n++) {
          for(var m = 0; m < pixelation; m++) {
            if(x + m < sourceWidth) {
              data[((sourceWidth * (y + n)) + (x + m)) * 4] = red;
              data[((sourceWidth * (y + n)) + (x + m)) * 4 + 1] = green;
              data[((sourceWidth * (y + n)) + (x + m)) * 4 + 2] = blue;
            }
          }
        }
      }
    }

    // overwrite original image
    context.putImageData(imageData, destX, destY);
    pixelation -= 1;
  }
