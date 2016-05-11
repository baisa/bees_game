var array, number;

function setup() {
  document.getElementById("drawing").innerHTML = null;
  number = (Math.floor(Math.random() * (11 - 1)) + 1);
  array = [];

  function newImage() {
    var image = new Image();
    image.src='http://www.clker.com/cliparts/V/y/D/s/5/v/bee-hi.png';
    document.getElementById("drawing").appendChild(image);
  };

    for (i = 0; i < number; i++) { 
      var image = newImage();
      array.push(image);
    };

};

setup();

  function myFunction() {
      var x = document.getElementById("fname").value;
      var n = Number(x);
      if (n == array.length) {
        answer ="Correct!";
      } else {
        answer = "Try again!";
      }
      document.getElementById("demo").innerHTML = answer;
  };

  function checkFunction(clicked_id) {
    
    console.log(this);
  };

var nodes = document.getElementsByClassName("circle");
for (i = 0; i < nodes.length; i++) {
  nodes[i].addEventListener("click", function(e){
      console.log(e.target.id);
  }, false);
}









