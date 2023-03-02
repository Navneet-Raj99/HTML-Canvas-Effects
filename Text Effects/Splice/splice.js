var offset = document.getElementById('offset')
var direction = document.getElementById('direction')
var thickness = document.getElementById('Thickness')

var canvas = document.getElementById('Canvas'),
  context = canvas.getContext('2d')
//   it includes hollow also
context.fillStyle = 'black';

context.font = "800 30pt Helvetica";
context.fillText("keep doctor away!", canvas.width / 5 + offset.value / 15 * Math.cos(direction.value * Math.PI / 180)
  , 202 + offset.value / 15 * Math.sin(direction.value * Math.PI / 180)
);
context.font = "900 30pt Helvetica";
context.lineWidth = thickness.value / 30;
context.strokeStyle = 'red';
context.strokeText("keep doctor away!", canvas.width / 5, 200);

thickness.addEventListener('change', () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = 'black';

  context.font = "800 30pt Helvetica";
  context.fillText("keep doctor away!", canvas.width / 5 + offset.value / 15 * Math.cos(direction.value * Math.PI / 180)
    , 202 + offset.value / 15 * Math.sin(direction.value * Math.PI / 180));
  context.font = "900 30pt Helvetica";
  context.lineWidth = thickness.value / 30;
  context.strokeStyle = 'red';
  context.strokeText("keep doctor away!", canvas.width / 5, 200);
})
offset.addEventListener('change', () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  console.log(offset.value)
  context.fillStyle = 'black';

  context.font = "800 30pt Helvetica";
  context.fillText("keep doctor away!", canvas.width / 5 + offset.value / 15 * Math.cos(direction.value * Math.PI / 180)
    , 202 + offset.value / 15 * Math.sin(direction.value * Math.PI / 180));
  context.font = "900 30pt Helvetica";
  context.lineWidth = thickness.value / 30;
  context.strokeStyle = 'red';
  context.strokeText("keep doctor away!", canvas.width / 5, 200);
})


direction.addEventListener('change', () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  console.log(offset.value)
  context.fillStyle = 'black';

  context.font = "800 30pt Helvetica";
  context.fillText("keep doctor away!", canvas.width / 5 + offset.value / 15 * Math.cos(direction.value * Math.PI / 180)
    , 202 + offset.value / 15 * Math.sin(direction.value * Math.PI / 180));
  context.font = "900 30pt Helvetica";
  context.lineWidth = thickness.value / 30;
  context.strokeStyle = 'red';
  context.strokeText("keep doctor away!", canvas.width / 5, 200);
})


