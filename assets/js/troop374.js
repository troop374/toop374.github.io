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

// for testing different mastheads
$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const parallax = urlParams.get('parallax');

  if (parallax) {
    $('#mast-head-bar').addClass('parallax');

    window.addEventListener('scroll', function () {
      var scrolled = window.scrollY || window.pageYOffSet;
      var parallax = document.querySelector('.parallax');
      var coords = '50% ' + -(scrolled * 0.50) + 'px';
      parallax.style.backgroundPosition = coords;
    });
  }
});