var name ="global";
function outer(){
    //var name ="outer";
    var outerVar =10;
    function inner(){
        var innerVar=100;
        // var name="inner";
     //console.log(outerVar);  // 10
     console.log(name);
    }
    inner();
    console.log(name);
    //console.log(innerVar);   // 10
}
outer();
//console.log(name);


function add() {
    let counter = 0;
    function plus() {
        counter += 1;
    }
    plus();   
    return counter;
  }
   add();
   add();
   add();