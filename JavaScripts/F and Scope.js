var name ="scope";  // Global Scope  Function
console.log(name);


function scopeDemo(){
     var i=10;
      console.log(i);
}

scopeDemo();
//console.log(i);  // lexical scope


function c(){
    console.log("Inside c");
}

function b(){
    c();
    console.log("Inside b");
}
function a(){
     b();
     console.log("Inside a");

}
a();
console.log("global context");



