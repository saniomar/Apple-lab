document.addEventListener('DOMContentLoaded', function () {

  // Back to top button
  var backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Contact form (demo submit handler)
  var contactForm = document.getElementById('contactForm');
  var formMsg = document.getElementById('formMsg');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      formMsg.textContent = 'Thanks! Your message has been sent. Our team will contact you shortly.';
      contactForm.reset();
    });
  }

  // Footer newsletter (demo submit handler)
  var footerNewsletter = document.querySelector('.footer-newsletter');
  if (footerNewsletter) {
    footerNewsletter.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = footerNewsletter.querySelector('input');
      if (input && input.value) {
        input.value = '';
        input.placeholder = 'Subscribed! Thank you.';
      }
    });
  }

  // Smooth scroll for in-page anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

});

const year = new Date().getFullYear()
document.getElementById("copyYear").innerHTML = year
