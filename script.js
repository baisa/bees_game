var number = (Math.floor(Math.random() * (11 - 1)) + 1);
var array = [];

function newImage() {
  var image = new Image();
  image.src='http://www.clker.com/cliparts/V/y/D/s/5/v/bee-hi.png';
  document.getElementById("drawing").appendChild(image);
}

for (i = 0; i < number; i++) { 
    var image = newImage();
    array.push(image);
}


function myFunction() {
    var x = document.getElementById("fname").value;
    var n = Number(x);
    if (n == array.length) {
    answer ="Correct!";
    } else {
    answer = "Try again!";
    };
    document.getElementById("demo").innerHTML = answer;
}

function imageFunction() {
    var x = document.images.length;
    document.getElementById("demodemo").innerHTML = x;
}


