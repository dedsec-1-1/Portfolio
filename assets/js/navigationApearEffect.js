const nav = document.getElementById('navigation');

window.addEventListener('scroll', () => {
  const rect = nav.getBoundingClientRect();

  // Check if the element's top is at or below the top of the viewport (i.e., top = 0)
  if (rect.top <= 0) {
    console.log('Navigation touched the top!');
    nav.className = "navigation-show";
    globalThis.isFalling = false;
  } else {
    console.log('Navigation is not at the top yet.');
    nav.className = "navigation-hidden";  // Hide the navigation bar
    globalThis.isFalling = true
  }
});
