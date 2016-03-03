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

  function checkFunction() {
    var elements = document.getElementsByClassName("given_answer");
    for(var i = 0, length = elements.length; i < length; i++) {
      var a = elements[i].value;

  
      var b = Number(a);
      if (b == array.length) {
      var sss = "sss";
      
      };
    }
    document.getElementById("demo1").innerHTML = sss;
  };









