const buttons = document.querySelectorAll(".cell");
var brojkliktaja = 0;
buttons.forEach(function (button) {
  button.addEventListener("click", buttonClicked);
});
function buttonClicked(event) {
  console.log("Button text:" + event.target.id);
  var image = document.createElement("img");
  if (brojkliktaja % 2 == 0) image.src = "X.png";
  else image.src = "O.png";
  image.id = "Ximage";
  document.getElementById(event.target.id).appendChild(image);
  brojkliktaja++;
}
