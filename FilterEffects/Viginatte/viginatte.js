var img = document.querySelector('img');
const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');
// const text=document.getElementById('hello');
const t=document.getElementById('t');
context.drawImage(img, 0, 0,500, 500);
// draw();
t.addEventListener('change',()=>
{
    // console.log(text.value);
    draw();   
})

      function draw() {
          var w = canvas.width ;
          var h = canvas.height;
          context.clearRect(0, 0, w, h);
          context.rect(0, 0, w, h);
          context.drawImage(img, 0, 0,w, h);
          var outerRadius = w * .5;
          var innerRadius = w * .2;
          var grd = context.createRadialGradient(w / 2, h / 2, innerRadius, w / 2, h / 2, outerRadius);
        //  Black
          grd.addColorStop(0, 'rgba(0,0,0,0)');
        // 
          grd.addColorStop(1, 'rgba(0,0,0,' + t.value/100+ ')');
          context.fillStyle = grd;
          context.fill();
      }
  
