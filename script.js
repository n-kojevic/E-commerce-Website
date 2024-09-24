"use strict"

// Creating function for smaller screen nav menu

const hamburger = document.querySelector('.hamb-icon');
const close = document.querySelector('.close');
const nav = document.querySelector('.nav-bar');

if(nav) {
    hamburger.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

// Creating function for image selection in single product page

let bigImage = document.getElementById("big-img");
let smallImages = document.querySelectorAll(".small-image img"); 

smallImages.forEach(function(smallImage) {
    smallImage.onclick = function() { 
        bigImage.src = smallImage.src; 
    };
});


// Logo navigation

document.addEventListener("DOMContentLoaded", function () {
    const logoBtn = document.querySelector(".logo");
  
    if (logoBtn) { 
      logoBtn.addEventListener('click', function (event) {
        event.preventDefault(); 
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    } else {
      console.log('Element with .logo class is not found!');
    }
  });

  // App stores click activation

const appleStoreImg = document.querySelector('.apple');
const googlePlayImg = document.querySelector('.google-play');

// Event listener for apple store
appleStoreImg.addEventListener('click', function() {
    window.open('https://www.apple.com/app-store/', '_blank');
});

// Event listener for google-play store
googlePlayImg.addEventListener('click', function() {
    window.open('https://play.google.com/store', '_blank');
});

// Summer camp section button activation

const summerBtn = document.querySelector(".summer-button");
summerBtn.addEventListener("click", function() {
  window.location.href = 'contact.html';
});

  
