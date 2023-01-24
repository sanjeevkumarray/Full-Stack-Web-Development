//1 
function hoistDemo(){
    console.log(i);   //print errors
     var i=10;    // Print Undefined
}

 // Hoisting Variable H
hoistDemo();


//2


console.log(j);

hoistDemo();

function hoistDemo(){
    console.log(i);   //print errors
     var i=10;    // Print Undefined
}

 // Hoisting Variable H

var j=10;

