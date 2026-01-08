document.querySelectorAll('.skill').forEach(skill => {
  const percent = skill.getAttribute('data-percent');
  const circle = skill.querySelectorAll('circle')[1];
  const offset = 314 - (314 * percent / 100);
  circle.style.strokeDashoffset = offset;
});
// ANIMASI SCROLL
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('active');
    }
  });
});
// DARK MODE TOGGLE
const toggle = document.getElementById('darkToggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    toggle.textContent = '☀️';
  } else {
    toggle.textContent = '🌙';
  }
});
// FULLSCREEN IMAGE
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".foto-box img, .foto-profil img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};
// NAVBAR ACTIVE ON SCROLL
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});
