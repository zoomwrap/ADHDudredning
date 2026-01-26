  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.hamburger-btn');
    const navContainer = document.querySelector('.nav-container');

    button.addEventListener('click', () => {
      navContainer.classList.toggle('open');
      button.textContent =
        navContainer.classList.contains('open') ? '✖' : '☰';
    });
  });

