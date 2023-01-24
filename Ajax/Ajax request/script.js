function fetchRandomDogImage(){

//     //using JavaScript
//     var xhrRequest = new XMLHttpRequest();

//     xhrRequest.onload=function(){
//         console.log(xhrRequest.response);
//         var responseJSON =JSON.parse(xhrRequest.response);
//         //JSON.str

//         var imageUrl =responseJSON.message;
//         $('#dog-image').attr('src,imageUrl');
//     };

//     XPathResult.open('get', 'https://dog.ceo/api/breeds/image/random')

//     xhrRequest.send();
// }

// Using Jquery

// $.ajax({
//     url:'https://dog.ceo/api/breeds/image/random',
//     method:'GET',
//     success:function(data){{
//         //var responseJSON =JSON.parse(xhrRequest.response);
//         var imageUrl =data.message;
//         $('#dog-image').attr('src,imageUrl');
    

//     }}
// });

$.get('https://dog.ceo/api/breeds/image/random',function(data){
    var imageUrl =data.message;
     $('#dog-image').attr('src,imageUrl');
}).fail(function(xhr,textStatus,errorThrown){
    console.log("Request Failed");
})

}


$('fetch-dog-image-button').click(fetchRandomDogImage);