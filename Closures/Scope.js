// var a=10;
 
// function outer(){
//      // var a=20;
//      var b=40;
//       console.log(a,b);
// }

// outer();



var a=10;
function outer(){
     var a=20;
     var b=40;
      function inner(){
           var a=10;
            console.log("Inner ", a, b);
      }
       inner();
       console.log("outer", a,b);
}
outer();
console.log("Global");