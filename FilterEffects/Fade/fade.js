const canvas = document.getElementById("canvas");
const ctx= canvas.getContext("2d");
const slider =document.getElementById('slider');
let image=document.getElementById('image')
image.onload = function () {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height); 
    tempimage=ctx.getImageData(0,0,800,800);
    console.log(slider.value);

    ctx.putImageData(tempimage, 0, 0);
    imageData = ctx.getImageData(0, 0, 500, 500);
    const pixels = imageData.data;
    var y = 0;  
    for (var a = 3; a < pixels.length; a += 4) {  
     pixels[a] = pixels[a]-(7*slider.value);  
    }  

    // incvisiblity(imageData, 50); 
    ctx.putImageData(imageData, 0, 0); 
    slider.addEventListener('change',()=>
    {
        ctx.putImageData(tempimage, 0, 0);
        imageData = ctx.getImageData(0, 0, 500, 500);
        const pixels = imageData.data;
        var y = 0;  
        for (var a = 3; a < pixels.length; a += 4) {  
         pixels[a] = pixels[a]-(7*slider.value);  
        }  

        // incvisiblity(imageData, 50); 
        ctx.putImageData(imageData, 0, 0); 
        
        
    })
 
    
    
}





function incvisiblity(imgd, steps) {  
    var x, dx, nxt, l = imgd.data.length;  
    for (var a = 3; a < l; a += 4) {  
     x = imgdnewcanvas.data[a];  
     if (x > 0) {  
      dx = imgd.data[a];  
      nxt = Math.ceil(x / steps);  
      if (dx + nxt <= x) {  
       imgd.data[a] += nxt;  
      } else {  
       imgd.data[a] = x;  
      }  
     }  
    }  
   }  
     
   function startfade(context, imgd, steps, millisecondsPerStep) {  
    var y = 0;  
    for (var a = 3; a < imgd.data.length; a += 4) {  
     imgd.data[a] = 0;  
    }  
    gap = setInterval(function() {  
     y++;  
     if (y > steps) {  
      clearInterval(gap);  
     } else {  
      incvisiblity(imgd, steps);  
      context.putImageData(imgd, 0, 0);  
     }  
    }, millisecondsPerStep)
}