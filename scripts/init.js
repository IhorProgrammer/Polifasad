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
            cssEase: 'ease-out',
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            
        });
        $('.bgn-slider img.slick-active').css("animation-play-state", "running")

        $('.parallax').parallax();

        // On before slide change
        $('.bgn-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
           $('.bgn-slider img.slick-active').css("animation-play-state", "running")
        });
        $('.bgn-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            $('.bgn-slider img.slick-active').css("animation-play-state", "paused")
        });
    }); 
  })(jQuery);
  