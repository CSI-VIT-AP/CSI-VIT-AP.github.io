$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Flutter Devloper", "UI/UX Designer", "Web Devloper", "Android Devloper", "Proggramer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('card-animation');
      }
    });
  });
  
  observer.observe(document.querySelector('.services .serv-content .card'));
  observer.observe(document.querySelector('.services .serv-content .card2'));
  observer.observe(document.querySelector('.services .serv-content .card3'));
  observer.observe(document.querySelector('.skillimg'));

  const observer2 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('card2-animation');
      }
    });
  });

  observer2.observe(document.querySelector('.services .serv-content .card4'));
  observer2.observe(document.querySelector('.services .serv-content .card5'));
  observer2.observe(document.querySelector('.services .serv-content .card6'));
/*
*/
  const observer3 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('card3-animation');
      }
    });
  });
  observer3.observe(document.querySelector('.teams .carousel .card'));
  observer3.observe(document.querySelector('.teams .carousel .card2'));
  observer3.observe(document.querySelector('.teams .carousel .card3'));
  observer3.observe(document.querySelector('.teams .carousel .card4'));
  observer3.observe(document.querySelector('.contactimg'));



  function toggleDarkMode(newState) {
      if (newState == "on") {
          DarkReader.enable();
          document.getElementById("darkbutton").innerHTML="Light Mode";
      }
      else {
          DarkReader.disable();
          document.getElementById("darkbutton").innerHTML="Dark Mode";
      }
  }
  document.getElementById("darkbutton").addEventListener("click",function() {
      if(document.getElementById("darkbutton").innerHTML=="Dark Mode"){
          toggleDarkMode("on");
      }
      else{
        toggleDarkMode("off");
      }
  },false);