
// JavaScript
// var para1 = document.getElementById('para1');
//  para1.innerHTML ="Welcome";


// Jquery 

//  $('#para1').html('Welcome');

// $('#para1').hide();

// $('para1').width(100);


 /*
   function $(query){
     return document.querySelector(query);
   }
 */


//    $(' p ').css('color','red');
//    $(' p ').css('fontSize','30px');


$( "p" ).css({
    fontSize:"30px",
    color:"red",

}) ;

$('div').css({
    width:"100px",
    height:"100px",
    backgroundColor:"Cyan",
});

   

$('div').click(function(){
    alert("Div Clicked");
});

$('div').on('click',function(event){
   alert("Div Clicked");
})