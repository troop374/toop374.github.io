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