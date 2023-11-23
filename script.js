const gradientWallpaper = document.querySelector('.gradient-wallpaper');

function updateGradient() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  gradientWallpaper.style.background = `linear-gradient(to bottom right, ${color1}, ${color2})`;
}

function downloadWallpaper() {
  const imageData = getBase64Image(gradientWallpaper);
  const a = document.createElement('a');
  a.href = imageData;
  a.download = 'gradient_wallpaper.png';
  a.click();
}

function getBase64Image(element) {
  const canvas = document.createElement('canvas');
  canvas.width = element.clientWidth;
  canvas.height = element.clientHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(element, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL('image/png');
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Update gradient on page load
updateGradient();

// Update gradient on click or any other event
gradientWallpaper.addEventListener('click', updateGradient);
