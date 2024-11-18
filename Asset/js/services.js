// Function to check if an element is in the viewport
const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };
  
  // Function to handle scroll event and add 'visible' class
  const handleScroll = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      if (isInViewport(card)) {
        card.classList.add('visible');
      }
    });
  };
  
  // Listen for the scroll event
  window.addEventListener('scroll', handleScroll);
  
  // Initial check in case elements are already in view
  handleScroll();


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
};