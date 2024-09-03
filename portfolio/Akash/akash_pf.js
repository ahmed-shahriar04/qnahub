$(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 60});
  
    // Add smooth scrolling on all links inside the navbar and arrow link at the bootom
    $("#myNavbar a, .arrow a, a.underlined").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').stop().animate({
          scrollTop: $(hash).offset().top-50
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          history.pushState(null, null, hash);
        });
      }  // End if
    });
  });
  
  
  
  // TYPING ANIMATION
  $(function(){
  $(".typing").typed({
              strings: ["esponsive.", "eady to use.", "eactive.", "efactored."],
              typeSpeed: 50,
              backDelay: 750,
              loop: true,
              loopCount: false,
              callback: function(){ }
          });
  });
  
  $('#current_year').text(new Date().getFullYear());