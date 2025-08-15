"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu
  const hamburger = document.querySelector(".hamb-icon");
  const close = document.querySelector(".close");
  const nav = document.querySelector(".nav-bar");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.add("active");
    });
  }

  if (close && nav) {
    close.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  }

  // Image selection in single product page
  const bigImage = document.getElementById("big-img");
  const smallImages = document.querySelectorAll(".small-image img");

  if (bigImage && smallImages.length > 0) {
    smallImages.forEach((smallImage) => {
      smallImage.addEventListener("click", () => {
        bigImage.src = smallImage.src;
      });
    });
  }

  // Logo navigation to top
  const logoBtn = document.querySelector(".logo");
  if (logoBtn) {
    logoBtn.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Store buttons (Apple & Google Play)
  const storeLinks = [
    {
      element: document.querySelector(".apple"),
      url: "https://www.apple.com/app-store/",
    },
    {
      element: document.querySelector(".google-play"),
      url: "https://play.google.com/store",
    },
  ];

  storeLinks.forEach(({ element, url }) => {
    if (element) {
      element.addEventListener("click", () => {
        window.open(url, "_blank");
      });
    }
  });

  // Summer camp section button
  const summerBtn = document.querySelector(".summer-button");
  if (summerBtn) {
    summerBtn.addEventListener("click", () => {
      window.location.href = "contact.html";
    });
  }
});
