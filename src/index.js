// src/index.js

// --- SLIDER FUNCTIONALITY ---
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  showSlides();
  autoSlideShow();
});

// Manual controls
function plusSlides(n) {
  slideIndex += n;
  showSlides();
}
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

// Show Slides
function showSlides() {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (slides.length === 0) return;

  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  for (let i = 0; i < dots.length; i++) dots[i].classList.remove("active");

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

// Auto Slide
function autoSlideShow() {
  slideIndex++;
  showSlides();
  setTimeout(autoSlideShow, 5000);
}

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) scrollTopBtn.classList.add("show");
  else scrollTopBtn.classList.remove("show");
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

const productToggle = document.getElementById("product-toggle");
const productDropdown = document.getElementById("product-dropdown");

productToggle.addEventListener("click", (e) => {
  e.preventDefault();
  productDropdown.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!productToggle.contains(e.target) && !productDropdown.contains(e.target)) {
    productDropdown.classList.remove("show");
  }
});

// CRITICAL: The modal logic (document.getElementById("inquiryModal") etc.)
// has been removed from this file to prevent the crash, as it is now 
// handled entirely by the Modal.jsx component.
