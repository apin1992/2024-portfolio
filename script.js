// javascript

function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}
function gitHubOnClick() {
  window.open('https://github.com/apin1992');
}
function linkedInOnClick() {
  window.open('https://www.linkedin.com/in/martin-perez-313985273/');
}

document.addEventListener('DOMContentLoaded', function () {
  const box = document.querySelector('.profile-img');

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function updateBoxShadow() {
    const color = getRandomColor();
    const boxShadowValue = `0 0 30px ${color}`;
    box.style.boxShadow = boxShadowValue;
  }
  setInterval(updateBoxShadow, 1500);
});
