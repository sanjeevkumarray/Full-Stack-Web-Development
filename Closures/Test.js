//Window  Object

var a=10;
function foo(){
     var a=20;
      console.log(a);
      console.log(window.a);

}
  console.log(a);
  window.foo();   // 10 20 10



  // Local Scope

  function foo(a){
     a=20;
     console.log(a);
}
 foo(10);
 console.log(a);   // 20 Error: a  is not  defined


 //What is Object
  var a=10;
  console.log(a);
  var a=20;
  console.log(a);   // 10 20


  //contest
  var a= 10;
    var b;
     function outer(){
         var b=30;
         function inner(a){
              var a=30;
              console.log(a++, b++)
         }
          console.log(a, ++b);
           inner(a);
     }
     outer();
     console.log(a++, b++);   // 10 31  
                             // 30 31
                             // 10 NaN



//contest
 var a=10;
 function outer(){
      var a=20;
      var b=30;
       function inner(a){
            var a=30;
              console.log(a++, b++)
       }
        console.log(a, ++b);
        inner(a);
 }
 outer();
 console.log(a++);   // 20 31
                     // 30 31
                     // 10


// Global Scope

<html>
     <body>
          <script src ="script1.js"></script>
          <script src="script2.js"></script>
     </body>
</html>

// This is script1.

var a=10;
 setTimeout(function(){
    console.log(a);
 },1000);
            
 
 // This is script2.
 var a=20;
 console.log(a);
 //output 20 20


 //IIFE
  var a=(function(){
       return typeof arguments;
  })();
  console.log(a);
  // output Object


  function Adder(x){
       return function(y){
            return x+y;
       };
  }

  var add5=Adder(5);
  var add10=Adder(10);
  console.log(add5(2));
  console.log(add10(2));

  //output  7 12



  var add =(function(){
       var counter=0;
        return function() {
             counter+=1 ;
             return counter
        }
  }) ();

  console.log(add());
  console.log(add());
  console.log(add());

  // output  1 2 3


  // var in loop

    for(var a=1; a<5; a++){
          setTimeout(function(){
               console.log(a)},1000);
          }
    //output 5 5  5 5
    
    

    // let in loop
      for(let a=1 ; a<5; a++){
           setTimeout(function(){
                console.log(a)},1000);
           }
      //output  1 2 3 4



      // Arrow Function Declaration

      var func=(
           a,
           b,
           c
      )=>(
           1
      );

      // output   yes


      // Arrow Function

       console.log((function(x,f=()=>x){
       var x;
       var y=x;
       x=2;
       return [x,y,f()];
       })(1));
       // output 2 , 1, 1
