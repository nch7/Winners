/*
Template Name: VIDOE - Video Streaming Website HTML Template
Author: Askbootstrap
Author URI: https://themeforest.net/user/askbootstrap
Version: 1.0
*/
// const sdk = new ThirdwebSDK("mumbai");
// const contract = await sdk.getContract("0x1833AC111fd43Ab9eD6917C521cd19E322899666");
// const data = await contract.erc20.balance();

// const data = await contract.call("balanceOf", account);
// const balance = await contract.erc20.balance();

(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
   $(document).on('click', '#sidebarToggle', function(e) {  
    e.preventDefault();
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
  });

  $("#connect-button").click(() => {
    connectWallet()
  })

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($window.width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });
  
  // Category Owl Carousel
  var objowlcarousel = $(".owl-carousel-category");
  if (objowlcarousel.length > 0) {
	 objowlcarousel.owlCarousel({
		items: 8,
		lazyLoad: true,
		pagination: false,
		loop: true,
		autoPlay: 2000,
		navigation: true,
		stopOnHover: true,
		navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
	});
  }

	
  // Tooltip
  $('[data-toggle="tooltip"]').tooltip()

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
  });

})(jQuery); // End of use strict

// metamask wallet
async function connectWallet() {
  // Check if Metamask is installed
  if (window.ethereum) {
    try {
      // Request account access
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Connected to Metamask!');
      
      // Hide connect button and show wallet address
      document.getElementById("connect-button").style.display = "none";
      document.getElementById("wallet-address").textContent = accounts[0];
      document.getElementById("wallet-address").style.display = "block";
      
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log('Please install Metamask to connect to this website!');
  }
}

 // get the button and span elements using their IDs
 var showTextBtn = document.getElementById("showTextBtn");
 var mySpan = document.getElementById("mySpann");
 
 var num = 0;
 // add a click event listener to the button
 showTextBtn.addEventListener("click", function() {
    if (num%2==0) { // check if it is currently hidden
       mySpan.style.display = "inline";
       mySpan.innerText = data;
      
 // show the text
    } else {
       mySpan.style.display = "none"; // hide the text
    }
 });

 const waitButton = document.getElementById("showTextBtn");
const waitOverlay = document.getElementById("wait-overlay");

waitButton.addEventListener("click", () => {
  // Show the wait overlay
  waitOverlay.style.display = "block";

  // Set a timer to hide the overlay after 5 seconds
  setTimeout(() => {
    waitOverlay.style.display = "none";
  }, 5000);
});

const myInput = document.getElementById('showTextBtn');

myInput.addEventListener('click', () => {
  myInput.value = '';
});

