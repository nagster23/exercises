// Work on your tasks here

// let teapot = -10;


// $('.image').click(function(){
//     teapot = teapot + 30;
//     $(this).css('-webkit-transform','rotate('+teapot+'deg)');
// });

$(document).ready(function(){
    $('.submit').on("click",function(){
      $('.modal').css("display","block")
    });
    $('.modal-close').on("click",function(){
      $('.modal').css("display","none")
    });
  });
  

  // teapot
  $(document).ready(function() {
    $(".teapot").on("click", function() {
      $(".teapot").css("-webkit-transform", "rotate(20deg)");
    });
    $(".teapot").on("dblclick", function() {
      $(".teapot").css("-webkit-transform", "rotate(0)");
    });
  });
  
  // changing text on hover
  
  $(document).ready(function() {
    $(".tea-desc").on("mouseenter ", function() {
      let text = "";
      let phrases = new Array(
        "Great tea for a cold night",
        "Rich in flavours",
        "Best tea from Brasil",
        "Strong black tea"
      );
      let randomPhrase = Math.floor(Math.random() * phrases.length);
      text += phrases[randomPhrase];
  
      $(event.target).text(text);
    });
  });

  //to make shorter

//   $(document).ready(function(){
//     $('.submit').on("click",function(){
//       $('.modal').css("display","block")
//     });
//     $('.modal-close').on("click",function(){
//       $('.modal').css("display","none")
//     });
//     $(".teapot").on("click", function() {
//       $(".teapot").css("-webkit-transform", "rotate(20deg)");
//     });
//     $(".teapot").on("dblclick", function() {
//       $(".teapot").css("-webkit-transform", "rotate(0)");
//     });
//     $(".tea-desc").on("mouseenter ", function() {
//       let text = "";
//       let phrases = new Array(
//         "Great tea for a cold night",
//         "Rich in flavours",
//         "Best tea from Brasil",
//         "Strong black tea"
//       );
//       let randomPhrase = Math.floor(Math.random() * phrases.length);
//       text += phrases[randomPhrase];
  
//       $(event.target).text(text);
//     });
//   });
  