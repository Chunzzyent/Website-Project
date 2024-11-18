// Detect when elements are in view
const elements = document.querySelectorAll('.card, .container_2');

function checkVisibility() {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            el.classList.add('visible');
        }
    });
}

// Check visibility on page load and scroll
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);


function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
  
  // On scroll event, check if the .newcontainer is in view
  window.addEventListener('scroll', function() {
    const container = document.querySelector('.newcontainer');
    if (isInView(container)) {
      container.classList.add('visible');
    }
  });

// Get the button
let mybutton = document.getElementById("back-to-top");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// When the user clicks the button, scroll to the top of the document
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll
  });
}