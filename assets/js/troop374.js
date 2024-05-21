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

$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const testParam = urlParams.get('test');

  if (testParam) {
    $('#mast-head-bar').css('background-image', "url('assets/img/home/image" + testParam + ".jpg')")
  }
});