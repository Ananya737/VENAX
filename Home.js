window.onload = function () {
    // Simulate a loading delay
    setTimeout(function () {
      // Animate the curtain effect
      document.getElementById('curtain').style.transform = 'translateY(0)';
      
      // Hide the loader after curtain is revealed
      setTimeout(function () {
        document.getElementById('loader-overlay').style.display = 'none';
        document.getElementById('curtain').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        
      }, 1000); // Time for curtain to transition
     
    }, 2000); // Time before the curtain starts moving
  };

// Swiper  1

 
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });


// Swiper 2

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 70,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});