
function toggleFullScreen(img) {
        
  if (img.classList.contains('fullscreen')) {
    // If the image is not in full-screen mode, make it full screen
    img.classList.add('fullscreen');
    
  } else {
    // If the image is already in full-screen mode, remove the full-screen class
    img.classList.remove('fullscreen');
  }
}

