


$(document).ready(function () {
    // window.addEventListener ("touchmove", function (event) { event.preventDefault (); }, {passive: false});

    $(".buttonLi .dropdown-menu .dropdown-item").click(function (e) {
        e.preventDefault();
        var liText = $(this).html();
        $(this).parent().prev().html(liText)
        console.log($(this).parent().prev().html())
    });





    // Video Start
    function video() {
        var $videoSrc;
        $('.video-btn').click(function () {
            $videoSrc = $(this).data("src");
        });

        // when the modal is opened autoplay it  
        $('#myModal').on('shown.bs.modal', function (e) {

            // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        // stop playing the video
        $('#myModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', '');
        })
    }
    video();
    // Video End


    // carousel Main Start
    function carouselMain() {
        var owl = document.querySelectorAll("#carouselMain .carousel .owl-dots .owl-dot span");
        for (var i = 0; i < owl.length; i++) {
            owl[i].addEventListener("click", function () {
                alert()
            })
        }
        $('#carouselMain .carousel .owl-carousel').owlCarousel({
            // animateIn: "fadeIn",
            // animateOut: "fadeOut",
            loop: true,
            // margin: 10,
            // nav:true,
            // center:true,
            autoplayTimeout: 3000,
            autoplay: false,
            // autoplaySpeed:true,
            smartSpeed: 1500,
            dotsEach: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
        var owla = $('#carouselMain .carousel .owl-carousel');

        $('#carouselMain .carousel .customNextBtn').click(function () {
            owla.trigger('next.owl.carousel');
        })
        $('#carouselMain .carousel .customPrevBtn').click(function () {
            owla.trigger('prev.owl.carousel');
        });


        $(document).keydown(function (event) {
            if (event.keyCode == 39) {
                owla.trigger('next.owl.carousel');
            }
            if (event.keyCode == 37) {
                owla.trigger('prev.owl.carousel');
            }
        });

    }
    carouselMain()
    // carousel Main End

    // carousel Product Start
    function carouselProduct() {
        var owl = document.querySelectorAll("#carouselProduct .carousel .owl-dots .owl-dot span");
        for (var i = 0; i < owl.length; i++) {
            owl[i].addEventListener("click", function () {
                alert()
            })
        }
        $('#carouselProduct .carousel .owl-carousel').owlCarousel({
            // animateIn: "fadeIn",
            // animateOut: "fadeOut",
            loop: true,
            nav: true,
            margin: 40,
            // nav:true,
            // center:true,
            autoplayTimeout: 2000,
            autoplay: true,
            // autoplaySpeed:true,
            smartSpeed: 1000,
            dotsEach: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        })
        var owla = $('#carouselProduct .carousel .owl-carousel');

        $('#carouselProduct .carousel .customNextBtn').click(function () {
            owla.trigger('next.owl.carousel');
        })
        $('#carouselProduct .carousel .customPrevBtn').click(function () {
            owla.trigger('prev.owl.carousel');
        });


        $(document).keydown(function (event) {
            if (event.keyCode == 39) {
                owla.trigger('next.owl.carousel');
            }
            if (event.keyCode == 37) {
                owla.trigger('prev.owl.carousel');
            }
        });

    }
    carouselProduct()

    function carouselPngProduct() {
        var owl = document.querySelectorAll("#carouselPngProduct .carousel .owl-dots .owl-dot span");
        for (var i = 0; i < owl.length; i++) {
            owl[i].addEventListener("click", function () {
                alert()
            })
        }
        $('#carouselPngProduct .carousel .owl-carousel').owlCarousel({
            // animateIn: "fadeIn",
            // animateOut: "fadeOut",
            loop: true,
            nav: true,
            // margin: 40,
            // nav:true,
            // center:true,
            autoplayTimeout: 3000,
            autoplay: false,
            // autoplaySpeed:true,
            smartSpeed: 1500,
            dotsEach: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        })
        var owla = $('#carouselPngProduct .carousel .owl-carousel');

        $('#carouselPngProduct .carousel .customNextBtn').click(function () {
            owla.trigger('next.owl.carousel');
        })
        $('#carouselPngProduct .carousel .customPrevBtn').click(function () {
            owla.trigger('prev.owl.carousel');
        });


        $(document).keydown(function (event) {
            if (event.keyCode == 39) {
                owla.trigger('next.owl.carousel');
            }
            if (event.keyCode == 37) {
                owla.trigger('prev.owl.carousel');
            }
        });

    }
    carouselPngProduct()

    // carousel Product End





});










