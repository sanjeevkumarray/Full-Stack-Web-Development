// API : Application  Programming Interface
console.log(window.document==document);   // True

console.log(window.location===document.location);   // True


function test(){
    return this;

}
  console.log(test()==window);  // True
