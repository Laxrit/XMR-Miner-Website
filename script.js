// script.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeSwitcher');
  const label = document.getElementById('themeLabel');

  toggle.addEventListener('change', () => {
    document.body.classList.toggle('light-theme');
    label.textContent = document.body.classList.contains('light-theme')
      ? 'Light Mode'
      : 'Dark Mode';
  });
});
