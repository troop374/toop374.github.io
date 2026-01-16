function toggleShow(elementId) {
  let el = document.getElementById(elementId);
  el.style.display = "block";
}

function toggleHide(elementId) {
  let el = document.getElementById(elementId);
  el.style.display = "none";
}

function showImageModal(imageSrc) {
  $('.imagepreview').attr('src', imageSrc);
  $('#imagemodal').modal('show');
}

// Process email links at runtime - emails are hidden from HTML source until JS runs
function initEmailLinks() {
  document.querySelectorAll('.email-link').forEach(function(link) {
    var emails = link.getAttribute('data-emails');
    var subject = link.getAttribute('data-subject') || '';
    if (emails) {
      link.setAttribute('href', 'mailto:' + emails.replace(/,/g, '; ') + '?Subject=' + subject);
    }
  });
}

// for testing different mastheads
$(document).ready(function () {
  initEmailLinks();
  const urlParams = new URLSearchParams(window.location.search);
  const parallax = urlParams.get('parallax');

  if (parallax) {
    $('#mast-head-bar').addClass('parallax');
  }

  if ($('.parallax').length > 0) {
    window.addEventListener('scroll', function () {
      var scrolled = window.scrollY || window.pageYOffSet;
      var parallax = document.querySelector('.parallax');
      var coords = '50% ' + -(scrolled * 0.50) + 'px';
      parallax.style.backgroundPosition = coords;
    });
  }
});