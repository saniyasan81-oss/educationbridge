// js/script.js
// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Active link highlighting
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // Counter animation for impact page
  const counters = document.querySelectorAll('.counter');
  if (counters.length) {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = parseInt(counter.innerText);
        const increment = target / 50;
        if (current < target) {
          current = Math.ceil(current + increment);
          counter.innerText = current;
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }

  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const feedbackDiv = document.getElementById('form-feedback');
      feedbackDiv.innerHTML = '<p style="color:green;">✓ Message sent successfully! We\'ll get back to you soon.</p>';
      contactForm.reset();
      setTimeout(() => feedbackDiv.innerHTML = '', 4000);
    });
  }

  // Newsletter subscription
  const subscribeBtn = document.querySelector('.newsletter-form .btn-secondary');
  if (subscribeBtn) {
    subscribeBtn.addEventListener('click', function() {
      const emailInput = document.getElementById('newsletter-email');
      if (emailInput && emailInput.value.includes('@')) {
        alert(`Thanks for subscribing! Updates will be sent to ${emailInput.value}`);
        emailInput.value = '';
      } else {
        alert('Please enter a valid email address.');
      }
    });
  }
});