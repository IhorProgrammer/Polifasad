(function($){
    $(function(){
        // $('.parallax').parallax();
        $('.sidenav').sidenav(); 
        $('.dropdown-trigger').dropdown(
            {
                "coverTrigger": false,
                "alignment": "center",
            }
                
        );
        $('.bgn-slider').slick({
            infinite: true,
            speed: 1000,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            
        });
        $('.parallax').parallax();
    }); 
  })(jQuery);
  