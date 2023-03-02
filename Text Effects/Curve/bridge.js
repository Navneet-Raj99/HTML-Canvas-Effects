var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d"),
  font = "64px impact",
  w = canvas.width,
  h = canvas.height,
  curve,
  offsetY,
  bottom,
  textHeight,
  angleSteps = 180 / w,
  i = w,
  y;

canvas.width = w;
canvas.height = h;

ctx.font = font;
ctx.textBaseline = "top";
ctx.textAlign = "center";
renderBridgeText();

function renderBridgeText() {
  ctx.clearRect(0, 0, w, h);
  ctx.clearRect(0, 0, w, h);

  ctx.fillText("Hello", w * 0.5, 0);

  i = w;
  while (i--) {
    y = bottom - curve * Math.sin((i * angleSteps * Math.PI) / 180);

    ctx.drawImage(canvas, i, offsetY, 1, textHeight, i, offsetY, 1, y);
  }
}
