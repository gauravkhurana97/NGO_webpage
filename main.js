
$(document).ready(function() {
  

var scrollTop = $(".scrollTop");
    



    $(window).scroll(function(){
          // declare variable
      var topPos = $(this).scrollTop();
      
      // if user scrolls down - show scroll to top button
      if(topPos > 100){
        $(scrollTop).css("opacity", "1");
        
      }else{
          $(scrollTop).css("opacity", "0");
      }
      
    }); // scroll END
    
    //Click event to scroll to top
    $(scrollTop).click(function(){
      $('html, body').animate({scrollTop : 0},800);
          return false;
      
    }); 
       var h1 = $("#h1").position();
       var h2 = $("#h2").position();
       var h3 = $("#h3").position();
    
      $('.link1').click(function(){
        $('html, body').animate({scrollTop : h1.top}, 500);
          return false;
        
      }); 
      $('.link2').click(function(){
        $('html, body').animate({scrollTop : h2.top}, 500);
            return false;
  
        }); 
       $('.link3').click(function(){
        $('html, body').animate({scrollTop : h3.top}, 500);
            return false;
  
        }); 
  }); 