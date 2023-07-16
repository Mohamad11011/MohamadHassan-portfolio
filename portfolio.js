
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});



const burger = document.querySelector('.burger');

const navLinks = document.querySelector('.nav-links');


burger.addEventListener('click', () => {
  burger.classList.toggle('toggle');
  navLinks.classList.toggle('nav-active');
});


var swiper = new Swiper('.swiper-code', {
  slidesPerView: 6,
  spaceBetween: 35,
  loop:true,
  centeredSlides: true,
   centeredSlidesBounds: true,
  autoplay: {
    delay: 3000,
}
});

let delta = 0;
const sections = document.querySelectorAll('section');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Adjust the threshold as needed
};

document.addEventListener('wheel', (event) => {
  delta = Math.sign(event.deltaY);

  const activeSection = document.querySelector('section.active');
  if (activeSection) {
    event.preventDefault();
    if (delta > 0) {
      scrollToNextSection();
    } else if (delta < 0) {
      scrollToPreviousSection();
    }
  }
}, { passive: false });

// Intersection Observer callback function
const handleIntersect = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const currentSection = entry.target;
      sections.forEach(section => section.classList.remove('active', 'next', 'previous'));
      currentSection.classList.add('active');

      const currentIndex = Array.from(sections).findIndex(section => section.classList.contains('active'));
      const nextIndex = currentIndex + 1;
      const previousIndex = currentIndex - 1;

      if (nextIndex >= 0 && nextIndex < sections.length) {
        sections[nextIndex].classList.add('next');
      }

      if (previousIndex >= 0 && previousIndex < sections.length) {
        sections[previousIndex].classList.add('previous');
      }
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options);

// Observe each section
sections.forEach(section => {
  observer.observe(section);
});

// Scroll to next or previous section
const scrollToNextSection = () => {
  const activeSection = document.querySelector('section.active');
  const nextSection = document.querySelector('section.next');
  if (nextSection) {
    sections.forEach(section => section.classList.remove('previous'));
    activeSection.classList.remove('active');
    activeSection.classList.add('previous');
    nextSection.classList.remove('next');
    nextSection.classList.add('active');
    nextSection.scrollIntoView({ behavior: 'smooth'});
  }
};

const scrollToPreviousSection = () => {
  const activeSection = document.querySelector('section.active');
  const previousSection = document.querySelector('section.previous');
  if (previousSection) {
    sections.forEach(section => section.classList.remove('next'));
    activeSection.classList.remove('active');
    activeSection.classList.add('next');
    previousSection.classList.remove('previous');
    previousSection.classList.add('active');
    previousSection.scrollIntoView({ behavior: 'smooth'});
  }
};







