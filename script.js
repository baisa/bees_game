
var bees = [ [1],[1,2],[1,2,3], [1,2,3,4] ]

for (i = 0; i < bees.length; i++) { 
    console.log( bees[i]);
}


var session = bees[Math.floor(Math.random()*bees.length)];
console.log(session);

console.log("How many bees do you see?")