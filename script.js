console.log("Bienvenue sur le portfolio de Tya !");

// Affiche les éléments de la timeline au scroll
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

timelineItems.forEach(item => observer.observe(item));

// Thème switcher
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Merci ! Ton message a été envoyer avec succès 🪄✨");
  this.reset();
});
