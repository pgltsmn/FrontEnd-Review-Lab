var randomColor = Math.floor(Math.random()*16777215).toString(16);


function changeColor(color) {
  document.body.style.backgroundColor = "#" + randomColor;
}
        
function plschange() {
  changeColor(randomColor);
}         



 //color.innerHTML = "#" + randomColor;


