x=5;
console.log(x);
var x;


// output :5



function demo(){
     console.log(x);
     var x=10;
}

demo();

// output : Undefined

// Global and Local Variable
var a=10;
 function test(){
      var a=20;
 }
  test();
   console.log(a);

   // outPut: 10


// Global Vs Local

   var a=10;
     function test(){
          var a=20;
           console.log(a);
     }
      test();

      //OutPut : 20


//       function a(){
//           console.log("Inside a");
      
//       function b(){
//           console.log("Inside b");
//       }
//     }
//     a();


    var RectArea = function(width, height){
          return width*height;
    }
    console.log(RectArea(5,4));

// o/p :20


var add= function(a,b){
      return a+b;
}
var subtract = function(a,b){
      return a-b;
}

var op= function(func){
      var x=2;
      var y=3;
      return func(x,y);
}
console.log(op(subtract));


// o/p:-1


var add= function(a,b){
      return a+b;
}

var subtract = function(a,b){
     return a-b;
}

var op= function(func){
     var x=2;
     var y=3;
     return func(x,y);
}
console.log(op(add));


// op: 5









