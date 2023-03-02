var img = document.querySelector('img');
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const text=document.getElementById('hello');
const t=document.getElementById('t');
// context.globalAlpha = 0.9; 
context.drawImage(img, 0, 0,500, 500);
t.addEventListener('change',()=>
{
// console.log(text.value);
mBlur(t.value/100);

})
function mBlur(distance){
    // distance = distance<0?0:distance;
    console.log(distance);
    let w = canvas.width;
    let h = canvas.height;
    canvas.width = w;
    canvas.height = h;
    context.clearRect(0,0,w,h);
    
    for(let n=0;n<=1;n+=0.1){
        context.globalAlpha = 1/(2*n+1);
        let scale = distance/100*n;
        // Multiply with user angle conversion 
        if(n%2==0)
        {
            context.transform(1+scale,0,0,1+scale,0,0);  // Refine again it again
            context.drawImage(img, 0, 0,w,h);
        }
else{
    context.transform(1-scale,0,0,1-scale,0,0);  // Refine again it again
    context.drawImage(img, 0, 0,w,h);
}
        // context.transform(1-scale,0,0,1,0,0);
    
        // context.drawImage(img, 0, 0,w,h);
    }
    context.globalAlpha = 1;
     
    // if(distance<0.01){
    // 	window.requestAnimationFrame(()=>{
    // 		mBlur(distance+0.0005);
    // 	});
    // }
}



