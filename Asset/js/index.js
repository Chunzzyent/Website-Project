const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form_close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelectorAll(".eyes");

formOpenBtn.addEventListener("click", () => home.classList.add("show"))
formCloseBtn.addEventListener("click", () => home.classList.remove("show"))

pwShowHide.forEach(icon => {
   icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if(getPwInput.type === "password"){
        getPwInput.type = "text";
        icon.classList.replace("fa-eye-slash", "fa-eye");
    }else{
        getPwInput.type = "password";
        icon.classList.replace("fa-eye", "fa-eye-slash");
    }
   }); 
});

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    document.querySelectorAll('.services-box').forEach(box => {
        observer.observe(box);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.portfolio-box');

    function checkInView() {
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY;

        boxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top + scrollTop;
            if (boxTop <= scrollTop + windowHeight - 100) {
                box.style.opacity = 1;
                box.classList.add('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkInView);
    window.addEventListener('load', checkInView);
    checkInView();
});

// Function to detect when element is in view
const checkVisibility = () => {
    const marquee = document.querySelector('.marquee');
    const rect = marquee.getBoundingClientRect();
    
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        marquee.classList.add('is-visible');
    } else {
        marquee.classList.remove('is-visible');
    }
};


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
    };
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


