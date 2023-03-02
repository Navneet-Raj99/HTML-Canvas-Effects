const canvas = document.getElementById("canvas");
const ctx= canvas.getContext("2d");
const slider =document.getElementById('slider');
let image=document.getElementById('image')
image.onload = function () {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height); 
    tempimage=ctx.getImageData(0,0,800,800);
    console.log(slider.value);
    slider.addEventListener('change',()=>
    {
        ctx.putImageData(tempimage, 0, 0);
        imageData = ctx.getImageData(0, 0, 800, 800);
        const pixels = imageData.data;
        let gamma = slider.value;
        // gamma=gamma*-1;
 
        for (let i = 0; i < pixels.length; i += 4) {
        pixels[i] = 255 * Math.pow(pixels[i] / 255, gamma); 
        pixels[i + 1] = 255 * Math.pow(pixels[i + 1] / 255, gamma); 
        pixels[i + 2] = 255 * Math.pow(pixels[i + 2] / 255, gamma); 
        // pixels[i] = Math.max(0,(pixels[i]-240)*gamma);
        // pixels[i+1] = Math.max(0,(pixels[i+1]-240)*gamma)
        // pixels[i+2] = Math.max(0,(pixels[i+2]-240)*gamma)

        }
        ctx.putImageData(imageData, 0, 0);
      
    })
    
  

}