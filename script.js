// Contact Form Alert (Demo purpose)
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Message sent! (Demo only)');
    form.reset();
  });
});