/* Template: Pavo Mobile App Website Tailwind CSS HTML Template
   Description: Custom JS file
*/

(function($) {
    "use strict"; 
	
    /* Navbar Scripts */
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 60) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });
    
	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
    });

    // close menu on click in small viewport
    $('[data-toggle="offcanvas"], .nav-link:not(.dropdown-toggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })

	const toggles = document.querySelectorAll(".faq-toggle");
	const toggles1 = document.querySelectorAll(".faq-title");
	const toggles2 = document.querySelectorAll(".faq");

	toggles.forEach((toggle) => {
	  toggle.addEventListener("click", () => {
	    toggle.parentNode.classList.toggle("active");
	  });
	});

	toggles1.forEach((toggle1) => {
	  toggle1.addEventListener("click", () => {
	    toggle1.parentNode.classList.toggle("active");
	  });
	});

	toggles2.forEach((toggle2) => {
	  toggle2.addEventListener("click", () => {
	    toggle2.parentNode.classList.toggle("active");
	  });
	});


	$(".card").bind('mouseover', function() {
    var old_color = $(this).css("background-color");
    $(this)[0].style.backgroundColor = 'transparent';

    	//$(".card-title")[0].style.color = "#eb427e";
		//$(".mb-4")[0].style.color = "#eb427e";
		if($(".card").eq(0).is(':hover')) { 
			$(".card-title")[0].style.color = "#eb427e";
			$(".mb-4")[0].style.color = "#eb427e";
		}

    	$(".card").eq(0).on("mouseenter", function() {
    	$(".card-title")[0].style.color = "#eb427e";
		$(".mb-4")[0].style.color = "#eb427e";
		//$(".card-title")[0].style.textShadow = "0 5px 15px rgba(145, 92, 182, .5)";

		$(".card-title")[1].style.color = "black";
		$(".mb-4")[1].style.color = "#6b747b";
		$(".card-title")[2].style.color = "black";
		$(".mb-4")[2].style.color = "#6b747b";
		$(".card-title")[3].style.color = "black";
		$(".mb-4")[3].style.color = "#6b747b";
    	})
    
    	$(".card").eq(1).on("mouseenter", function() {
    	$(".card-title")[1].style.color = "#eb427e";
		$(".mb-4")[1].style.color = "#eb427e";

		$(".card-title")[0].style.color = "black";
		$(".mb-4")[0].style.color = "#6b747b";
		$(".card-title")[2].style.color = "black";
		$(".mb-4")[2].style.color = "#6b747b";
		$(".card-title")[3].style.color = "black";
		$(".mb-4")[3].style.color = "#6b747b";
    	})

    	$(".card").eq(2).on("mouseenter", function() {
    	$(".card-title")[2].style.color = "#eb427e";
		$(".mb-4")[2].style.color = "#eb427e";

		$(".card-title")[1].style.color = "black";
		$(".mb-4")[1].style.color = "#6b747b";
		$(".card-title")[0].style.color = "black";
		$(".mb-4")[0].style.color = "#6b747b";
		$(".card-title")[3].style.color = "black";
		$(".mb-4")[3].style.color = "#6b747b";
    	})

    	$(".card").eq(3).on("mouseenter", function() {
    	$(".card-title")[3].style.color = "#eb427e";
		$(".mb-4")[3].style.color = "#eb427e";

		$(".card-title")[1].style.color = "black";
		$(".mb-4")[1].style.color = "#6b747b";
		$(".card-title")[2].style.color = "black";
		$(".mb-4")[2].style.color = "#6b747b";
		$(".card-title")[0].style.color = "black";
		$(".mb-4")[0].style.color = "#6b747b";
    	})

    $(".card").bind('mouseout', function () {
        $(this)[0].style.backgroundColor = old_color;
        $(".card-title")[0].style.color = "black";
        $(".mb-4")[0].style.color = "#6b747b";
        
    	});
	});

	$(".card").bind('mouseover', function() {
    var old_color = $(this).css("background-color");
    $(this)[0].style.backgroundColor = 'transparent';

    	//$(".card-title")[0].style.color = "#eb427e";
		//$(".mb-4")[0].style.color = "#eb427e";
		if($(".card").eq(1).is(':hover')) { 
			$(".card-title")[1].style.color = "#eb427e";
			$(".mb-4")[1].style.color = "#eb427e";
		}
	$(".card").bind('mouseout', function () {
        $(this)[0].style.backgroundColor = "#f1f9fc";
        $(".card-title")[1].style.color = "black";
        $(".mb-4")[1].style.color = "#6b747b";
        
    	});
	});

	$(".card").bind('mouseover', function() {
    var old_color = $(this).css("background-color");
    $(this)[0].style.backgroundColor = 'transparent';

    	//$(".card-title")[0].style.color = "#eb427e";
		//$(".mb-4")[0].style.color = "#eb427e";
		if($(".card").eq(2).is(':hover')) { 
			$(".card-title")[2].style.color = "#eb427e";
			$(".mb-4")[2].style.color = "#eb427e";
		}
	$(".card").bind('mouseout', function () {
        $(this)[0].style.backgroundColor = "#f1f9fc";
        $(".card-title")[2].style.color = "black";
        $(".mb-4")[2].style.color = "#6b747b";
        
    	});
	});

	$(".card").bind('mouseover', function() {
    var old_color = $(this).css("background-color");
    $(this)[0].style.backgroundColor = 'transparent';

    	//$(".card-title")[0].style.color = "#eb427e";
		//$(".mb-4")[0].style.color = "#eb427e";
		if($(".card").eq(3).is(':hover')) { 
			$(".card-title")[3].style.color = "#eb427e";
			$(".mb-4")[3].style.color = "#eb427e";
		}
	$(".card").bind('mouseout', function () {
        $(this)[0].style.backgroundColor = "#f1f9fc";
        $(".card-title")[3].style.color = "black";
        $(".mb-4")[3].style.color = "#6b747b";
        
    	});
	});

		
	//$(".card").bind('mouseover', function() {
    //	$(".card-title")[0].style.color = "#eb427e";
	//	$(".mb-4")[0].style.color = "#eb427e";
	// $(".card").bind('mouseout', function () {
    //    $(".card-title")[0].style.color = "black";
    //    $(".mb-4")[0].style.color = "#6b747b";
    //	});
	//}); 

	$(".card").eq(0).click(function(){
		location.href = "ifract/index.html";}); 
	$(".card").eq(1).click(function(){
		location.href = "skeage/skeage.html";}); 
	$(".card").eq(2).click(function(){
		location.href = "bmd/index.html";});
	$(".card").eq(3).click(function(){
		location.href = "xbmd/index.html";});   	


    // hover in desktop mode
    function toggleDropdown (e) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function(){
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 300 : 0);
    }
    $('body')
    .on('mouseenter mouseleave','.dropdown',toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);


    /* Details Lightbox - Magnific Popup */
    $('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
    });
    

    /* Card Slider - Swiper */
	var cardSlider = new Swiper('.card-slider', {
		autoplay: {
            delay: 4000,
            disableOnInteraction: false
		},
        loop: true,
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		slidesPerView: 3,
		spaceBetween: 70,
        breakpoints: {
            // when window is <= 767px
            767: {
                slidesPerView: 1
            },
            // when window is <= 1023px
            1023: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        }
    });


    /* Counter - CountTo */
	var a = 0;
	$(window).scroll(function() {
		if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors	
			var oTop = $('#counter').offset().top - window.innerHeight;
			if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
				countNum: $this.text()
				}).animate({
					countNum: countTo
				},
				{
					duration: 2000,
					easing: 'swing',
					step: function() {
					$this.text(Math.floor(this.countNum));
					},
					complete: function() {
					$this.text(this.countNum);
					//alert('finished');
					}
				});
			});
			a = 1;
			}
		}
    });


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
	});
	

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

	/* Function to get the navigation links for smooth page scroll */
	function getMenuItems() {
		var menuItems = [];
		$('.nav-link').each(function() {
			var hash = $(this).attr('href').substr(1);
			if(hash !== "")
				menuItems.push(hash);
		})
		return menuItems;
	}	

	/* Prevents adding of # at the end of URL on click of non-pagescroll links */
	$('.nav-link').click(function (e) {
		var hash = $(this).attr('href').substr(1);
		if(hash == "")
			e.preventDefault();
	});

	/* Checks page scroll offset and changes active link on page load */
	/*changeActive();*/

	/* Change active link on scroll 
	$(document).scroll(function(){
		changeActive();
	});*/
	
	/* Function to change the active link */
	/*function changeActive() {
		const menuItems = getMenuItems();
		$.each(menuItems, function(index, value){
			var offsetSection = $('#' + value).offset().top;
			var docScroll = $(document).scrollTop();
			var docScroll1 = docScroll + 1; 
			
			if ( docScroll1 >= offsetSection ){
				$('.nav-link').removeClass('active');
				$('.nav-link[href$="#'+value+'"]').addClass('active');
			}  
		});
	}*/



})(jQuery);

