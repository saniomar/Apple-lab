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

  // Corporate business account form (demo submit handler)
  var corporateForm = document.getElementById('corporateForm');
  var corporateFormMsg = document.getElementById('corporateFormMsg');
  if (corporateForm) {
    corporateForm.addEventListener('submit', function (e) {
      e.preventDefault();
      corporateFormMsg.textContent = 'Thanks! Our corporate accounts team will be in touch shortly.';
      corporateForm.reset();
    });
  }

  // Quantity steppers (cart / product pages)
  document.querySelectorAll('.qty-stepper').forEach(function (stepper) {
    var display = stepper.querySelector('span');
    var minus = stepper.querySelector('.qty-minus');
    var plus = stepper.querySelector('.qty-plus');
    if (!display || !minus || !plus) return;
    minus.addEventListener('click', function () {
      var val = parseInt(display.textContent, 10) || 1;
      if (val > 1) display.textContent = val - 1;
    });
    plus.addEventListener('click', function () {
      var val = parseInt(display.textContent, 10) || 1;
      display.textContent = val + 1;
    });
  });

  // Cart item remove
  document.querySelectorAll('.cart-item-remove').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card = btn.closest('.cart-item-card');
      if (card) card.style.display = 'none';
    });
  });

  // Selectable option pills / color swatches (product details page)
  document.querySelectorAll('.option-pills').forEach(function (group) {
    var items = group.querySelectorAll('.option-pill, .color-swatch');
    items.forEach(function (item) {
      item.addEventListener('click', function () {
        items.forEach(function (i) { i.classList.remove('selected'); });
        item.classList.add('selected');
      });
    });
  });

  // Product gallery thumbnails
  var mainImg = document.querySelector('.pd-main-img img');
  document.querySelectorAll('.pd-thumbs img').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      document.querySelectorAll('.pd-thumbs img').forEach(function (t) { t.classList.remove('active'); });
      thumb.classList.add('active');
      if (mainImg) mainImg.src = thumb.src;
    });
  });

  // Shop filter items (visual toggle only)
  document.querySelectorAll('.filter-item').forEach(function (item) {
    item.addEventListener('click', function () {
      var group = item.parentElement;
      group.querySelectorAll('.filter-item').forEach(function (i) { i.classList.remove('active'); });
      item.classList.add('active');
    });
  });

  // Sell Your Mac form (demo submit handler)
  var sellForm = document.getElementById('sellForm');
  var sellFormMsg = document.getElementById('sellFormMsg');
  if (sellForm) {
    sellForm.addEventListener('submit', function (e) {
      e.preventDefault();
      sellFormMsg.textContent = 'Thanks! We will review your device details and send a free quote shortly.';
      sellForm.reset();
    });
  }

  // Reply form on MacUser Group post (demo submit handler)
  var replyForm = document.getElementById('replyForm');
  var replyFormMsg = document.getElementById('replyFormMsg');
  if (replyForm) {
    replyForm.addEventListener('submit', function (e) {
      e.preventDefault();
      replyFormMsg.textContent = 'Thanks for your reply! It will appear after a quick review.';
      replyForm.reset();
    });
  }

  // Topic filter pills (MacUser Group listing)
  document.querySelectorAll('.topic-pill').forEach(function (pill) {
    pill.addEventListener('click', function () {
      document.querySelectorAll('.topic-pill').forEach(function (p) { p.classList.remove('active'); });
      pill.classList.add('active');
    });
  });

  // Numbered tab list (MacBook Air "What We Fix")
  document.querySelectorAll('.numbered-tab-item').forEach(function (tab) {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.numbered-tab-item').forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
    });
  });

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
