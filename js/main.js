$(document).on('click', 'a[href^="#"]', function (event) {
	event.preventDefault();
	$('html, body').animate({
		 scrollTop: $($.attr(this, 'href')).offset().top
	}, 500);
});

document.addEventListener("DOMContentLoaded", function() {
        for (var e = new Date, t = document.getElementsByClassName("ldp-js-date2"), n = 0; n < t.length; n++) {
            var a = t[n],
                d = a.firstChild.innerHTML;
            a.firstChild.innerHTML = d.replace("{today}", e.toLocaleDateString())
        }
    })
// $(document).ready(function () {
// 	$(function() {
// 		$('.slider1').slick({
// 			infinite: false,
// 			autoplay: true,
// 			arrows: true,
// 			dots: false,
// 			speed: 300,
// 			slidesToShow: 3,
// 			slidesToScroll: 1,
// 			prevArrow: $(".slider1-prev"),
// 			nextArrow: $(".slider1-next"),
// 			responsive: [
// 				{
// 					breakpoint: 1240,
// 					settings: {
// 						slidesToShow: 1
// 					}
// 				}
// 			]
// 		});
// 		$(window).on('resize', function() {
// 			 $('.slider1').slick('resize');
// 		});

// 		$('.slider2').slick({
// 			infinite: false,
// 			autoplay: true,
// 			arrows: true,
// 			dots: false,
// 			speed: 300,
// 			slidesToShow: 3,
// 			slidesToScroll: 1,
// 			prevArrow: $(".slider2-prev"),
// 			nextArrow: $(".slider2-next"),
// 			responsive: [
// 				{
// 					breakpoint: 1240,
// 					settings: {
// 						slidesToShow: 1
// 					}
// 				}
// 			]
// 		});
// 		$(window).on('resize', function() {
// 			 $('.slider2').slick('resize');
// 		});
// 		$('.slider3').slick({
// 			infinite: false,
// 			autoplay: true,
// 			arrows: true,
// 			dots: false,
// 			speed: 300,
// 			slidesToShow: 3,
// 			slidesToScroll: 1,
// 			prevArrow: $(".slider3-prev"),
// 			nextArrow: $(".slider3-next"),
// 			responsive: [
// 				{
// 					breakpoint: 1240,
// 					settings: {
// 						slidesToShow: 1
// 					}
// 				}
// 			]
// 		});
// 		$(window).on('resize', function() {
// 			 $('.slider3').slick('resize');
// 		});
// 	});
// });

function Timer() {
	function e(e) {
		var i = t(new Date(e).getHours()),
			o = t(new Date(e).getMinutes()),
			n = t(new Date(e).getSeconds());
		s.each(function () {
			$(this).find(".hours").text(i), $(this).find(".minutes").text(o), $(this).find(".seconds").text(n)
		})
	}

	function t(e) {
		return e >= 10 ? e : "0" + e
	}

	function i() {
		a == r ? clearInterval(d) : (a -= 1e3, e(a))
	}

	function o() {
		d = setInterval(i, 1e3)
	}
	var s = $(".timer"),
		n = new Date,
		r = 60 * n.getTimezoneOffset() * 1e3,
		l = new Date((new Date).getTime() + 864e5);
	l.setHours(0), l.setMinutes(0), l.setSeconds(0);
	var a = l - n + r;
	i(), o();
	var d
}
Timer();