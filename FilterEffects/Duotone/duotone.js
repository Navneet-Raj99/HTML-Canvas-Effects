const canvas = document.getElementById("canvas");
const ctx= canvas.getContext("2d");
let image=document.getElementById('image')
let primary = ["#f65e35", "#00ff36", "#77acd4"];
let secondary = ["#1e3265", "#23278a", "#033dc5"];
 image.onload = function () {
   ctx.drawImage(image, 0, 0, canvas.width, canvas.height); 
   imageData = ctx.getImageData(0, 0, 800, 800);
   const pixels = imageData.data;
   console.log(pixels);
   for (let i = 0; i < pixels.length; i += 4) {
     const red = pixels[i];
     const green = pixels[i + 1];
     const blue = pixels[i + 2];
     const avg = Math.round((0.3 * red + 0.6 * green + 0.1 * blue) * 1); // reduce computation
     pixels[i] = avg;
     pixels[i + 1] = avg;
     pixels[i + 2] = avg;
   }

   ctx.putImageData(imageData, 0, 0);
   ctx.globalCompositeOperation = "multiply";
   ctx.fillStyle = primary[0]; 
   ctx.fillRect(0, 0, canvas.width, canvas.height);
   ctx.globalCompositeOperation = "lighten";
   ctx.fillStyle = secondary[1]; 
   ctx.fillRect(0, 0, canvas.width, canvas.height);
 
 };
 
