// Animated Skill Bars
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.skill-bar').forEach(function(bar) {
    const percent = bar.getAttribute('data-skill');
    const inner = document.createElement('div');
    inner.className = 'skill-bar-inner';
    bar.appendChild(inner);
    setTimeout(() => {
      inner.style.width = percent + '%';
    }, 300);
  });

  // Dark/Light Theme Toggle
  const toggle = document.getElementById('toggle-theme');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggle.textContent = document.body.classList.contains('dark') ? "☀️" : "🌙";
  });

  // Contact Form Alert (Demo purpose)
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Message sent! (Demo only)');
    form.reset();
  });
});