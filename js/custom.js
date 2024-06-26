document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

$(document).ready(function() {
  AOS.init();
  //$("#footer-placeholder").load("../footer.html");
  var scroll = new SmoothScroll('a[href*="#"]', {
    easing: 'easeInOutQuad',
    speed: 300,
    topOnEmptyHash: true,
    header: '[data-scroll-header]' // Selector for fixed headers (must be a valid CSS selector)
  });
});

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}



/*
jQuery Hover3d
=================================================
Version: 1.1.0
Author: Rian Ariona
Website: http://ariona.net
Docs: http://ariona.github.io/hover3d
Repo: http://github.com/ariona/hover3d
Issues: http://github.com/ariona/hover3d/issues
*/

(function($){
	
	$.fn.hover3d = function(options){
		
		var settings = $.extend({
			selector      : null,
			perspective   : 1000,
			sensitivity   : 20,
			invert        : false,
			shine         : false,
			hoverInClass  : "hover-in",
			hoverOutClass : "hover-out",
			hoverClass    : "hover-3d"
		}, options);
		
		return this.each(function(){
			
			var $this = $(this),
				$card = $this.find(settings.selector);
				currentX = 0;
				currentY = 0;


			if( settings.shine ){
				$card.append('<div class="shine"></div>');
			}
			var $shine = $(this).find(".shine");

			// Set perspective and transformStyle value
			// for element and 3d object
			$this.css({
				perspective: settings.perspective+"px",
				transformStyle: "preserve-3d"
			});
			
			$card.css({
				perspective: settings.perspective+"px",
				transformStyle: "preserve-3d",
			});

			$shine.css({
				position  : "absolute",
				top       : 0,
				left      : 0,
				bottom    : 0,
				right     : 0,
				transform : 'translateZ(1px)',
				"z-index" : 9
			});
			
			// Mouse Enter function, this will add hover-in
			// Class so when mouse over it will add transition
			// based on hover-in class
			function enter(event){
				$card.addClass(settings.hoverInClass+" "+settings.hoverClass);
				currentX = currentY = 0;
				setTimeout(function(){
					$card.removeClass(settings.hoverInClass);
				}, 1000);
			}
			
			// Mouse movement Parallax effect
			function move(event){
				
				var w      = $card.innerWidth(),
					h      = $card.innerHeight(),
					currentX = Math.round(event.pageX - $card.offset().left),
					currentY = Math.round(event.pageY - $card.offset().top),
					ax 	   = settings.invert ?  ( w / 2 - currentX)/settings.sensitivity : -( w / 2 - currentX)/settings.sensitivity,
					ay     = settings.invert ? -( h / 2 - currentY)/settings.sensitivity :  ( h / 2 - currentY)/settings.sensitivity,
					dx     = currentX - w / 2,
					dy     = currentY - h / 2,
					theta  = Math.atan2(dy, dx),
					angle  = theta * 180 / Math.PI - 90;

					
				if (angle < 0) {
					angle  = angle + 360;
				}
				

				$card.css({
					perspective    : settings.perspective+"px",
					transformStyle : "preserve-3d",
					transform      : "rotateY("+ax+"deg) rotateX("+ay+"deg)"
				});

				$shine.css('background', 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + event.offsetY / h * .5 + ') 0%,rgba(255,255,255,0) 80%)');
			}
			
			// Mouse leave function, will set the transform
			// property to 0, and add transition class
			// for exit animation
			function leave(){
				$card.addClass(settings.hoverOutClass+" "+settings.hoverClass);
				$card.css({
					perspective    : settings.perspective+"px",
					transformStyle : "preserve-3d",
					transform      : "rotateX(0) rotateY(0)"
				});
				setTimeout( function(){
					$card.removeClass(settings.hoverOutClass+" "+settings.hoverClass);
					currentX = currentY = 0;
				}, 1000 );
			}
			
			// Mouseenter event binding
			$this.on( "mouseenter", function(){
				return enter();
			});
			
			// Mousemove event binding
			$this.on( "mousemove", function(event){
				return move(event);
			});
			
			// Mouseleave event binding
			$this.on( "mouseleave", function(){
				return leave();
			});
			
		});
		
	};
	
}(jQuery));

//navbar toggler
(function($) { "use strict";
    //Navigation
    var app = function () {
      var body = undefined;
      var menu = undefined;
      var menuItems = undefined;
      var initNav = function initNav() {
        body = document.querySelector('body');
        menu = document.querySelector('.menu-icon');
        menuItems = document.querySelectorAll('.nav__list-item');
        applyListeners();
      };
      var applyListeners = function applyListeners() {
        menu.addEventListener('click', function () {
          $('#my-nav').css('opacity', '1');
          return toggleClass(body, 'nav-active');
        });
      };
      var toggleClass = function toggleClass(element, stringClass) {
        if (element.classList.contains(stringClass)) {
          element.classList.remove(stringClass);
          enableScroll();
        }
        else {
          element.classList.add(stringClass);
          disableScroll();
        }
        //enable scroll and close nav when clicking a link
        menuItems.forEach(occurence => {
          occurence.addEventListener('click', (e) => {
            //console.log('A link was clicked');
            enableScroll();
            if (element.classList.contains(stringClass)) {
              element.classList.remove(stringClass);
            }
          });
        });
      };
      initNav();
    }();

    
  })(jQuery);

function disableScroll() {
  var xPos = window.scrollX;
  var yPos = window.scrollY;
  window.onscroll = () => window.scroll(xPos, yPos);
}

function enableScroll() {
    window.onscroll = function () { };
}


var btn = $('.to-top');
var prevScrollpos = window.pageYOffset;
$(window).scroll(function () {
  //hide nav on scroll
  var currentScrollPos = window.pageYOffset;
  if ((prevScrollpos > currentScrollPos) || ($(window).scrollTop() < 100)) {
    $(".cd-header").not("#index-header").css("top", "0");
  } 
  else {
    $(".cd-header").not("#index-header").css("top", "-100px");
  }
  prevScrollpos = currentScrollPos;

  //show or hide to-top button
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});


function toHome() {
  window.location.href = "../index.html#work";
}

//function toTop() {
//  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
//}

var dataAnalysisPage = {
  codeName: "eleme-analytics-section", 
  name: "Eleme Analytics Section",
  description: "A data analytics section with enhanced readability, functionality, and understandability", 
  imageAddress: function() {
    return "https://gcore.jsdelivr.net/gh/kayleegao/personal-website@latest/images/more-projects/"+this.codeName+"-card.jpg";
  },
  link: function() {
    return this.codeName + ".html";
  },
  projectType: "TO-B DESIGN · DATA VISUALIZATION", 
  projectTypeColor: "rgba(0, 122, 255, 0.7)",
  language: "English & 中文"
};

var storeDecorationPage = {
  codeName: "eleme-store-decoration", 
  name: "Eleme Store Decoration",
  description: "A highly customizable and flexible store decoration feature with a wide range of component options", 
  imageAddress: function() {
    return "https://gcore.jsdelivr.net/gh/kayleegao/personal-website@latest/images/more-projects/"+this.codeName+"-card.jpg";
  },
  link: function() {
    return this.codeName + ".html";
  },
  projectType: "TO-B DESIGN · DESIGN THINKING", 
  projectTypeColor: "rgba(68, 78, 103, 0.7)",
  language: "中文"
};

var babyuPage = {
  codeName: "baby-u", 
  name: "BabyU",
  description: "A platform to help first-time parents learn about parenting and track their child's development", 
  imageAddress: function() {
    return "https://gcore.jsdelivr.net/gh/kayleegao/personal-website@latest/images/more-projects/"+this.codeName+"-card.jpg";
  },
  link: function() {
    return this.codeName + ".html";
  },
  projectType: "0-1 DESIGN · PRODUCT DESIGN", 
  projectTypeColor: "rgba(78, 161, 165, 0.7)",
  language: "English"
};

var playgroundPage = {
  codeName: "playground", 
  name: "Playground",
  description: "A social app that helps children make friends and socialize", 
  imageAddress: function() {
    return "https://gcore.jsdelivr.net/gh/kayleegao/personal-website@latest/images/more-projects/"+this.codeName+"-card.jpg";
  },
  link: function() {
    return this.codeName + ".html";
  },
  projectType: "0-1 DESIGN · PRODUCT DESIGN", 
  projectTypeColor: "rgba(75, 98, 193, 0.7)",
  language: "English"
};

var dysonBotPage = {
  codeName: "dyson-bot", 
  name: "Dyson Bot x IBM",
  description: "A trustworthy and ethical conversational AI Chatbot for Dyson", 
  imageAddress: function() {
    return "https://gcore.jsdelivr.net/gh/kayleegao/personal-website@latest/images/more-projects/"+this.codeName+"-card.jpg";
  },
  link: function() {
    return this.codeName + ".html"
  },
  projectType: "AI ETHICS · APPLICATION OF PRINCIPLES", 
  projectTypeColor: "rgba(181, 68, 138, 0.7)",
  language: "English"
};

var oddsAndEndsPage = {
  codeName: "odds-and-ends", 
  name: "Odds and Ends",
  description: "An AR experience that brings Emily Carr's artwork Odds and Ends to life", 
  imageAddress: function() {
    return "https://gcore.jsdelivr.net/gh/kayleegao/personal-website@latest/images/more-projects/"+this.codeName+"-card.jpg";
  },
  link: function() {
    return this.codeName + ".html"
  },
  projectType: "AR · STORYTELLING", 
  projectTypeColor: "rgba(121, 156, 117, 0.7)",
  language: "English"
};


var uniformPage = {
  codeName: "suxd-uniform", 
  name: "SUXD Uniform",
  description: "A promotional page for SUXD department uniform developed for mobile terminal", 
  imageAddress: function() {
    return "https://gcore.jsdelivr.net/gh/kayleegao/personal-website@latest/images/more-projects/"+this.codeName+"-card.jpg";
  },
  link: function() {
    return this.codeName + ".html"
  },
  projectType: "FRONT-END DEVELOPMENT", 
  projectTypeColor: "rgba(221, 165, 23, 0.7)",
  language: "English & 中文"
};

var allProjects = [dysonBotPage, babyuPage, playgroundPage, oddsAndEndsPage, uniformPage, dataAnalysisPage, storeDecorationPage];

function getRandomProjects() {
  //Generate five random projects other than the current one
  const shuffled = allProjects.sort(() => 0.5 - Math.random()); //shuffle allProjects
  var path = window.location.pathname;
  var page = path.split("/").pop(); //get file name
  if (page.substring(page.length - 8, page.length - 5) == '-cn') {
    page = page.substring(0, page.length - 8)+'.html'; //remove '-cn'
  }
  for (i = 0; i < shuffled.length; i++) {
    if (shuffled[i].link() == page) {
      shuffled.push(shuffled.splice(shuffled.indexOf(shuffled[i]), 1)[0]); //Move the current project to the last
    }
  }
  let selected = shuffled.slice(0, 4); //slice the first four elements from shuffled
  var placeholder = "";
  for (i = 0; i < selected.length; i++) {
      placeholder = placeholder.concat(
        `<div class="swiper-slide more-projects animate__animated animate__fadeIn animate__slow">
          <a target="__blank" href="`+selected[i].link()+`" class="more-projects-link">
            <div class="row">
              <div class="col-12 mb-1 mb-sm-3">
              <div class="projects-img">
                      <div class="project__card">
                      <div class="project-card-tag"><span>Available Language:&nbsp `+selected[i].language+`</span></div>
                      <img src="`+selected[i].imageAddress()+`" class="img-fluid position-relative radius-10" alt="project image">
                      </div>
                    </div>
              </div>
              <div class="col-12">
                <div class="d-inline-block">
                    <span class="small" style="color: `+selected[i].projectTypeColor+`">`+selected[i].projectType+`</span><br>
                    <h5 class="mt-0 mb-md-1 d-inline-block">`+selected[i].name+`</h5>
                  </div>
                <img src="https://gcore.jsdelivr.net/gh/kayleegao/personal-website@latest/images/more-projects/btn-round-arrow.svg"
                    alt="" class="d-inline-block projects-icon">
                <p>`+selected[i].description+`</p>
              </div>
            </div>
          </a>
        </div>`);

  }
  document.getElementById("more-project-wrapper").innerHTML = placeholder;

  $(".projects-img").hover3d({
    selector: ".project__card"
  });
  $('.more-projects').on("mouseover", function() {
    $(this).find('h5').addClass('projects-title-hover');
  })
  .on("mouseout", function () {
    $(this).find('h5').removeClass('projects-title-hover');
  })
}

function initMoreProject() {
  var swiper = new Swiper(".mySwiperMenu", {
    breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
    },
  });
  getRandomProjects();
}