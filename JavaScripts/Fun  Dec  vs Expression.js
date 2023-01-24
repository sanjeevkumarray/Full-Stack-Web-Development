console.log(fact(5));  // 120
//console.log(factorial(5)); // factorial not a function

function fact(n){
     var ans =1;
     for(var i=1; i<=n;i++){
          ans=ans*i;
     }
      return ans;
}

var factorial = function fact(n){
     var ans =1;
      for(var i=1; i<=n; i++){
           ans=ans*i;
      }
       return ans;
};


// console.log(fact(6)); 
// function fact(n){
//        var ans=1;
//          for(var i=1; i<=n;i++){
//            ans=ans*i;
//          }
//           return ans;
// };


//  var factorial= function fact(n){
//        var ans=1;
//          for(var i=1;i<=n;i++){
//            ans=ans*i;
//          }
//            return ans;
//  }