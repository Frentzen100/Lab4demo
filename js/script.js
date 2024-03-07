function toggleFullScreen(img) {
        
  if (!img.classList.contains('fullscreen')) {
    // If the image is not in full-screen mode, make it full screen
    img.classList.add('fullscreen');
  } else {
    // If the image is already in full-screen mode, remove the full-screen class
    img.classList.remove('fullscreen');
  }
}


function increaseValue1() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue1() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}

function increaseValue2() {
  var value = parseInt(document.getElementById('number1').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number1').value = value;
}

function decreaseValue2() {
  var value = parseInt(document.getElementById('number1').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number1').value = value;
}
