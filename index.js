window.addEventListener("resize", function () {
  let menuIcon = document.getElementById("menu");
  if (window.innerWidth <= 550) {
    menuIcon.style.display = "block";
  } else {
    menuIcon.style.display = "none";
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu');
  const dropdownMenu = document.getElementById('dropdownMenu');

  menuIcon.addEventListener('click', function () {
    dropdownMenu.classList.toggle('show');
  });
});

window.addEventListener('DOMContentLoaded', function () {
  var carouselExample = document.getElementById('carouselExampleIndicators');
  var hiddenParagraph = document.getElementById('hiddenParagraph');

  function checkWidth() {
    if (window.innerWidth <= 550) {
      carouselExample.style.display = 'none';
      hiddenParagraph.style.display = 'block';
    } else {
      carouselExample.style.display = 'block';
      hiddenParagraph.style.display = 'none';
    }
  }

  checkWidth();

  window.addEventListener('resize', checkWidth);
});

function scrollToAnchor(event, anchorId) {
  event.preventDefault();

  const anchor = document.getElementById(anchorId);
  anchor.scrollIntoView({ behavior: 'smooth' });
}