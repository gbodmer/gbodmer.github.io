// keep the footer year current, and highlight the tab of the section in view
document.getElementById('y').textContent = new Date().getFullYear();
const tabs = [...document.querySelectorAll('.tabbar a, .topbar nav a')];
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  tabs.forEach(t => t.classList.toggle('on', t.getAttribute('href') === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main > section[id], main#top').forEach(s => io.observe(s));
// project videos: load and play only while on screen
const vo = new IntersectionObserver(es => es.forEach(e => e.isIntersecting ? e.target.play().catch(() => {}) : e.target.pause()), { threshold: .4 });
document.querySelectorAll('.media video, .gallery video').forEach(v => vo.observe(v));
