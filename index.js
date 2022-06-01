import "./styles.css";

for (var num = 9; num > 0; num--) {
  var elm = document.createElement("button");
  elm.innerHTML = num;
  elm.setAttribute("id", num);
  elm.setAttribute("class", "circle");
  var function_name = "remove(" + num + ")";
  elm.setAttribute("onclick", function_name);
  document.getElementById("main").appendChild(elm);

  var left = 10;
  var top = 100;

  left = left + Math.floor(Math.random() * 400);
  top = top + Math.floor(Math.random() * 600);

  document.getElementById(num).style.left = "" + left + "px";
  document.getElementById(num).style.top = "" + top + "px";

  var radius = 30 + Math.floor(Math.random() * 100);
  document.getElementById(num).style.height = "" + radius + "px";
  document.getElementById(num).style.width = "" + radius + "px";
  document.getElementById(num).style.borderRadius = "" + radius + "px";

  var red = 100 + Math.floor(Math.random() * 155); //math.random>>>0~1
  var green = 100 + Math.floor(Math.random() * 155);
  var blue = 100 + Math.floor(Math.random() * 155);

  document.getElementById(num).style.backgroundColor =
    "rgb(" + red + "," + blue + "," + green + ")";
}
var next = 1;
document.remove = function (id) {
  if (id === next) {
    document.getElementById("main").removeChild(document.getElementById(id));
    next = next + 1;
  }
};
