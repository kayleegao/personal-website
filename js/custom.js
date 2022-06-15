$(document).ready(function() {
  AOS.init();
  $("#footer-placeholder").load("../footer.html");
});

(function($) { "use strict";
    
    //Navigation
  
    var app = function () {
      var body = undefined;
      var menu = undefined;
      var menuItems = undefined;
      var init = function init() {
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
        if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
      };
      init();
    }();

    
  })(jQuery);


$("#nav-button").click(function(){
  $(this).toggleClass("open");
});


var btn = $('.to-top');
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

function toHome() {
  window.location.href = "../index.html#parallax";
}

function toTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

var babyuPage = {
  codeName: "baby-u", 
  name: "BabyU",
  description: "A platform to help first-time parents learn about parenting and track their child's development", 
  imageAddress: function() {
    return "../images/baby-u/"+this.codeName+"-card.png";
  },
  link: function() {
    return this.codeName + ".html";
  },
  ProjectType: "UX/UI", 
  ProjectTypeColor: "rgba(78, 161, 165, 0.7)"
};

var playgroundPage = {
  codeName: "playground", 
  name: "Playground",
  description: "A social app that helps children make friends and socialize", 
  imageAddress: function() {
    return "../images/more-projects/"+this.codeName+"-card.png";
  },
  link: function() {
    return this.codeName + ".html";
  },
  ProjectType: "UX/UI", 
  ProjectTypeColor: "rgba(75, 98, 193, 0.7)"
};

var daddyZonePage = {
  codeName: "daddy-zone", 
  name: "Daddy Zone",
  description: "A solution for fathers with parenting responsibilities", 
  imageAddress: function() {
    return "../images/more-projects/"+this.codeName+"-card.png";
  },
  link: function() {
    return this.codeName + ".html"
  },
  ProjectType: "UX/UI · DESIGN FOR FUTURE", 
  ProjectTypeColor: "rgba(73, 117, 233, 0.7)"
};

var roommatePage = {
  codeName: "best-roommate", 
  name: "Best Roommate",
  description: "An app that helps young people find ideal apartments and roommates", 
  imageAddress: function() {
    return "../images/more-projects/"+this.codeName+"-card.png";
  },
  link: function() {
    return this.codeName + ".html"
  },
  ProjectType: "UX/UI", 
  ProjectTypeColor: "rgba(99, 82, 151, 0.7)"
};

var dysonBotPage = {
  codeName: "dyson-bot", 
  name: "Dyson Bot x IBM",
  description: "A trustworthy and ethical conversational AI Chatbot for Dyson", 
  imageAddress: function() {
    return "../images/more-projects/"+this.codeName+"-card.png";
  },
  link: function() {
    return this.codeName + ".html"
  },
  ProjectType: "UX/UI · AI ETHICS", 
  ProjectTypeColor: "rgba(181, 68, 138, 0.7)"
};

var oddsAndEndsPage = {
  codeName: "odds-and-ends", 
  name: "Odds and Ends",
  description: "An AR experience that brings Emily Carr's artwork Odds and Ends to life", 
  imageAddress: function() {
    return "../images/more-projects/"+this.codeName+"-card.png";
  },
  link: function() {
    return this.codeName + ".html"
  },
  ProjectType: "AR · STORYTELLING", 
  ProjectTypeColor: "rgba(121, 156, 117, 0.7)"
};


var benchPressPage = {
  codeName: "bench-press-upgrade", 
  name: "Bench Press Upgrade",
  description: "A bench press with no safety issues", 
  imageAddress: function() {
    return "../images/more-projects/"+this.codeName+"-card.jpg";
  },
  link: function() {
    return this.codeName + ".html"
  },
  ProjectType: "HCI REDESIGN", 
  ProjectTypeColor: "rgba(225, 159, 88, 0.7)"
};

var goToTheEarthPage = {
  codeName: "go-to-the-earth", 
  name: "Go to the Earth",
  description: "An educational roll-and-move board game to teach about the solar system", 
  imageAddress: function() {
    return "../images/more-projects/"+this.codeName+"-card.png";
  },
  link: function() {
    return this.codeName + ".html"
  },
  ProjectType: "GAME DESIGN", 
  ProjectTypeColor: "rgba(88, 181, 227, 0.7)"
};


var uniformPage = {
  codeName: "suxd-uniform", 
  name: "SUXD Uniform",
  description: "A promotional page for SUXD department uniform developed for mobile terminal", 
  imageAddress: function() {
    return "../images/more-projects/"+this.codeName+"-card.png";
  },
  link: function() {
    return this.codeName + ".html"
  },
  ProjectType: "DEVELOPMENT", 
  ProjectTypeColor: "rgba(221, 165, 23, 0.7)"
};

var allProjects = [dysonBotPage, babyuPage, playgroundPage, daddyZonePage, roommatePage, oddsAndEndsPage, goToTheEarthPage, benchPressPage, uniformPage];

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
          <a href="`+selected[i].link()+`" class="more-projects-link">
            <div class="row">
              <div class="col-12 mb-1 mb-sm-3 projects-img">
                <img src="`+selected[i].imageAddress()+`" class="img-fluid position-relative radius-10" alt="project image">
              </div>
              <div class="col-12">
                <div class="d-inline-block">
                    <span class="small" style="color: `+selected[i].ProjectTypeColor+`">`+selected[i].ProjectType+`</span><br>
                    <h5 class="mt-0 mb-md-1 d-inline-block">`+selected[i].name+`</h5>
                  </div>
                <img src="../images/more-projects/btn-round-arrow.svg"
                    alt="" class="pull-right d-inline-block more-projects-icon">
              </div>
              <div class="col-12 col-sm-11">
                <p>`+selected[i].description+`</p>
              </div>
            </div>
          </a>
        </div>`);

  }
  document.getElementById("more-project-wrapper").innerHTML = placeholder+`
  <div class="swiper-slide all-center more-projects animate__animated animate__fadeIn animate__slow" onclick="toHome()">
    <div>
        <img src="../images/more-projects/folder.png" alt="more" style="height: 50px; width: auto;" class="d-block ml-auto mr-auto mb-3">
        All Projects
    </div>
  </div>`;

  $('.more-projects').on("mouseover", function() {
    $(this).find('.projects-img').addClass('opacity-50');
    $(this).find('h5').addClass('projects-title-hover');
  })
  .on("mouseout", function () {
    $(this).find('.projects-img').removeClass('opacity-50');
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