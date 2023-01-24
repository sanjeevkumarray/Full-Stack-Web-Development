// Function Declaration       Function Expression

// Using for Loop
  var factorial = function fact(n){
       var ans =1;
        for(var i=1; i<=n; i++){
             ans= ans*i;
        }
         return ans;
  };

  console.log(factorial);
  console.log(factorial(6));

  // Using Recursion

  var factorial = function fact(n){
        if(n==0){
             return 1;
        }
         return  n*fact(n-1);
  };

