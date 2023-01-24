// var promise = new Promise((resolve, reject) => {

//     // wait for 1 sec

//     setTimeout( () => {
//         // Promise is resolved 
//         resolve();
//     }, 1000);

//     });

//     promise.then( () =>{
//       console.log("Successful");
    
// });



var userLoggedIn = true;

var promise = new  Promise((resolve, reject) => {

    // wait for 1 sec

    setTimeout ( () =>{
        // Promise is resolved

        if(userLoggedIn){
            resolve();
        }
        else{
            //Reject.
            reject();
        }
    } , 1000);
});


setTimeout( () => {
    userLoggedIn = false;
}, 500);

promise.then( ()=> {
    console.log("User Logged In");
}).catch( () => {
    console.log("User Not Logged In")
});