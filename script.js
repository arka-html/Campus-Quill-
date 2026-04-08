// ================================
//   CAMPUSQUILL - JAVASCRIPT
//   Mobile Nav Bug Fixed! ✅
// ================================

// ================================
//   YOUR DATA - EDIT THIS ONLY!
// ================================

const writers = [
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    college: "Delhi College of Arts",
    year: "2nd Year, BA English",
    gmail: "priya@gmail.com",
    photo: null,
    bio: "I write when words feel like feelings I cannot speak aloud.",
    works: [
      {
        id: "first-rain",
        title: "First Rain",
        category: "Poem",
        featured: true,
        date: "January 2025",
        content: `The rain fell softly on my window,
Like words I never said to you,
Each drop a memory dissolving,
Into the grey of something new.

I pressed my palm against the glass,
And watched the world go blurred and far,
Perhaps the rain knows how it feels,
To fall and never reach a star.`
      },
      {
        id: "spring-diary",
        title: "Spring Diary",
        category: "Story",
        featured: false,
        date: "February 2025",
        content: `It was the kind of morning that makes you believe everything is forgivable.
The sun came in sideways through the curtains and landed on the old
diary I had not opened in three years.

I made tea first. Then I sat down. Then I read every word she had ever
written in those pages, and by the time I reached the last entry,
the tea was cold and I was someone slightly different than before.`
      }
    ]
  },
  {
    id: "rahul-verma",
    name: "Rahul Verma",
    college: "City College",
    year: "3rd Year, BA English",
    gmail: "rahul@gmail.com",
    photo: null,
    bio: "Poetry is my way of making sense of things that do not make sense.",
    works: [
      {
        id: "midnight-letters",
        title: "Midnight Letters",
        category: "Poem",
        featured: true,
        date: "January 2025",
        content: `I wrote you letters at midnight,
That I never meant to send,
Words that lived between the pages,
Of a story with no end.

The ink has dried, the paper yellowed,
Still I write, I do not know why,
Perhaps because the letters keep me,
Company beneath this quiet sky.`
      }
    ]
  },
  {
    id: "sneha-gupta",
    name: "Sneha Gupta",
    college: "Morning Light College",
    year: "1st Year, BA English",
    gmail: "sneha@gmail.com",
    photo: null,
    bio: "Every story is someone's truth waiting to be heard.",
    works: [
      {
        id: "the-library",
        title: "The Library at 6PM",
        category: "Quote",
        featured: true,
        date: "February 2025",
        content: `"The library at six in the evening is the quietest kind of miracle.
Every person there has chosen silence over everything else the world
was offering. That, I think, is its own kind of devotion."`
      }
    ]
  }
];

// ================================
//   GET ALL WORKS
// ================================

function getAllWorks() {
  const allWorks = [];
  writers.forEach(writer => {
    writer.works.forEach(work => {
      allWorks.push({ ...work, writer });
    });
  });
  return allWorks;
}

const allWorks = getAllWorks();

// ================================
//   DARK MODE
// ================================

const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

const savedTheme = localStorage.getItem('campusquill-theme') || 'light';
applyTheme(savedTheme);

function applyTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('campusquill-theme', 'dark');
  } else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('campusquill-theme', 'light');
  }
}

themeToggle.addEventListener('click', () => {
  const isDark = body.classList.contains('dark-mode');
  applyTheme(isDark ? 'light' : 'dark');
});

// ================================
//   NAVBAR SCROLL EFFECT
// ================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {

  // Add shadow when scrolled
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // ✅ BUG FIX - Close mobile menu when user scrolls!
  if (navLinks.classList.contains('open')) {
    closeMobileNav();
  }

}, { passive: true });

// ================================
//   MOBILE NAV - FULLY FIXED! ✅
// ================================

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Create overlay element dynamically
const navOverlay = document.createElement('div');
navOverlay.classList.add('nav-overlay');
document.body.appendChild(navOverlay);

function openMobileNav() {
  navLinks.classList.add('open');
  hamburger.classList.add('open');
  navOverlay.classList.add('active');
  body.style.overflow = 'hidden';
}

function closeMobileNav() {
  navLinks.classList.remove('open');
  hamburger.classList.remove('open');
  navOverlay.classList.remove('active');
  body.style.overflow = '';
}

// Toggle on hamburger click
hamburger.addEventListener('click', () => {
  if (navLinks.classList.contains('open')) {
    closeMobileNav();
  } else {
    openMobileNav();
  }
});

// Close when any nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    closeMobileNav();
  });
});

// Close when overlay (dark background) is clicked
navOverlay.addEventListener('click', () => {
  closeMobileNav();
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMobileNav();
  }
});

// ================================
//   ANIMATED COUNTERS
// ================================

function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      element.textContent = target + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 16);
}

const totalWritersEl = document.getElementById('totalWriters');
const totalWorksEl = document.getElementById('totalWorks');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(totalWritersEl, writers.length);
      animateCounter(totalWorksEl, allWorks.length);
      counterObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

if (document.querySelector('.hero-stats')) {
  counterObserver.observe(document.querySelector('.hero-stats'));
}

// ================================
//   AVATAR HELPER
// ================================

function getAvatar(writer) {
  const initial = writer.name.charAt(0);
  if (writer.photo) {
    return `<img src="images/${writer.photo}" alt="${writer.name}" />`;
  }
  return initial;
}

// ================================
//   CATEGORY ICON HELPER
// ================================

function getCategoryIcon(category) {
  const icons = {
    'Poem': '<i class="fas fa-feather"></i>',
    'Story': '<i class="fas fa-book"></i>',
    'Quote': '<i class="fas fa-quote-left"></i>',
    'Essay': '<i class="fas fa-scroll"></i>',
    'Flash Fiction': '<i class="fas fa-bolt"></i>'
  };
  return icons[category] || '<i class="fas fa-pen"></i>';
}

// ================================
//   RENDER FEATURED WORKS
// ================================

function renderFeatured() {
  const featuredGrid = document.getElementById('featuredGrid');
  const featuredWorks = allWorks.filter(w => w.featured);

  featuredGrid.innerHTML = featuredWorks.map(work => `
    <div class="featured-card reveal"
         onclick="openModal('${work.id}', '${work.writer.id}')">
      <div class="card-category">
        ${getCategoryIcon(work.category)} ${work.category}
      </div>
      <h3 class="card-title">${work.title}</h3>
      <p class="card-excerpt">
        ${work.content.substring(0, 120).trim()}...
      </p>
      <div class="card-footer">
        <div class="card-author">
          <div class="author-avatar">
            ${getAvatar(work.writer)}
          </div>
          <div class="author-info">
            <strong>${work.writer.name}</strong>
            <span>${work.writer.year}</span>
          </div>
        </div>
        <div class="read-btn">
          Read <i class="fas fa-arrow-right"></i>
        </div>
      </div>
    </div>
  `).join('');

  observeReveal();
}

// ================================
//   RENDER ALL WORKS
// ================================

function renderWorks(worksToShow = allWorks) {
  const worksGrid = document.getElementById('worksGrid');
  const noResults = document.getElementById('noResults');

  if (worksToShow.length === 0) {
    worksGrid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';

  worksGrid.innerHTML = worksToShow.map(work => `
    <div class="work-card reveal"
         onclick="openModal('${work.id}', '${work.writer.id}')">
      <div class="card-category">
        ${getCategoryIcon(work.category)} ${work.category}
      </div>
      <h3 class="card-title" style="font-size:1.2rem;">
        ${work.title}
      </h3>
      <p class="card-excerpt" style="font-size:0.88rem;">
        ${work.content.substring(0, 100).trim()}...
      </p>
      <div class="card-footer" style="margin-top:1.2rem;">
        <div class="card-author">
          <div class="author-avatar"
               style="width:30px;height:30px;font-size:0.8rem;">
            ${getAvatar(work.writer)}
          </div>
          <div class="author-info">
            <strong style="font-size:0.8rem;">
              ${work.writer.name}
            </strong>
            <span>${work.date}</span>
          </div>
        </div>
        <div class="read-btn" style="font-size:0.75rem;">
          Read <i class="fas fa-arrow-right"></i>
        </div>
      </div>
    </div>
  `).join('');

  observeReveal();
}

// ================================
//   FILTER & SEARCH
// ================================

const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
let activeFilter = 'all';
let searchQuery = '';

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    applyFilters();
  });
});

searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value.toLowerCase().trim();
  applyFilters();
});

function applyFilters() {
  let filtered = allWorks;

  if (activeFilter !== 'all') {
    filtered = filtered.filter(w => w.category === activeFilter);
  }

  if (searchQuery) {
    filtered = filtered.filter(w =>
      w.title.toLowerCase().includes(searchQuery) ||
      w.writer.name.toLowerCase().includes(searchQuery)
    );
  }

  renderWorks(filtered);
}

// ================================
//   RENDER WRITERS
// ================================

function renderWriters() {
  const writersGrid = document.getElementById('writersGrid');

  writersGrid.innerHTML = writers.map(writer => `
    <div class="writer-card reveal">
      <div class="writer-photo">
        ${getAvatar(writer)}
      </div>
      <div class="writer-name">${writer.name}</div>
      <div class="writer-college">${writer.college}</div>
      <p class="writer-bio">"${writer.bio}"</p>
      <div class="writer-works-count">
        <i class="fas fa-pen-nib"></i>
        ${writer.works.length}
        ${writer.works.length === 1 ? 'Work' : 'Works'} Published
      </div>
    </div>
  `).join('');

  observeReveal();
}

// ================================
//   MODAL
// ================================

const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalContent = document.getElementById('modalContent');

function openModal(workId, writerId) {
  const writer = writers.find(w => w.id === writerId);
  const work = writer.works.find(w => w.id === workId);
  const readingTime = Math.ceil(work.content.split(' ').length / 200);

  modalContent.innerHTML = `
    <span class="modal-category">
      ${getCategoryIcon(work.category)} ${work.category}
    </span>
    <h2 class="modal-title">${work.title}</h2>
    <div class="modal-meta">
      <span><i class="fas fa-user"></i> ${writer.name}</span>
      <span><i class="fas fa-calendar"></i> ${work.date}</span>
      <span>
        <i class="fas fa-clock"></i>
        ${readingTime < 1 ? 1 : readingTime} min read
      </span>
    </div>
    <div class="modal-divider"></div>
    <div class="modal-body">${work.content}</div>
    <div class="modal-author-section">
      <div class="author-avatar"
           style="width:50px;height:50px;font-size:1.2rem;">
        ${getAvatar(writer)}
      </div>
      <div>
        <strong style="font-family:'Playfair Display',serif;
                 color:var(--text-primary);display:block;">
          ${writer.name}
        </strong>
        <span style="font-size:0.82rem;color:var(--text-muted);">
          ${writer.year} · ${writer.college}
        </span>
      </div>
    </div>
    <div class="modal-actions">
      <button class="modal-action-btn"
        onclick="shareWork('${work.title}', '${writer.name}')">
        <i class="fas fa-share-alt"></i> Share
      </button>
      <button class="modal-action-btn" onclick="printWork()">
        <i class="fas fa-print"></i> Print
      </button>
    </div>
  `;

  modalOverlay.classList.add('active');
  body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeMobileNav();
  }
});

// ================================
//   SHARE & PRINT
// ================================

function shareWork(title, author) {
  const text = `Read "${title}" by ${author} on CampusQuill! ✍️`;
  if (navigator.share) {
    navigator.share({
      title: 'CampusQuill',
      text: text,
      url: window.location.href
    });
  } else {
    const url = `https://wa.me/?text=${encodeURIComponent(text + ' ' + window.location.href)}`;
    window.open(url, '_blank');
  }
}

function printWork() {
  window.print();
}

// ================================
//   SCROLL REVEAL
// ================================

function observeReveal() {
  const reveals = document.querySelectorAll('.reveal:not(.visible)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
}

// ================================
//   INITIALISE
// ================================

document.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
  renderWorks();
  renderWriters();
  observeReveal();
});