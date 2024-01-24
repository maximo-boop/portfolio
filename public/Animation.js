let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('section ul li').forEach((li, index) => {
  observer.observe(li);
});
