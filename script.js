// ================================
//   CAMPUSQUILL — COMPLETE JS
// ================================

// ================================
//   DATA — ONLY EDIT THIS PART
// ================================

const writers = [

  // ======= ENGLISH WRITER 1 =======
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    college: "Delhi College of Arts",
    year: "2nd Year, BA English",
    gmail: "priya@gmail.com",
    photo: null,
    language: "english",
    bio: "I write when words feel like feelings I cannot speak aloud.",
    joinedDate: "January 2025",
    works: [
      {
        id: "first-rain",
        title: "First Rain",
        category: "Poem",
        language: "english",
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
        language: "english",
        featured: false,
        date: "February 2025",
        content: `It was the kind of morning that makes you
believe everything is forgivable.
The sun came in sideways through the curtains
and landed on the old diary I had not opened
in three years.

I made tea first. Then I sat down. Then I read
every word she had ever written in those pages,
and by the time I reached the last entry,
the tea was cold and I was someone slightly
different than before.`
      }
    ]
  },

  // ======= BENGALI WRITER 1 =======
  {
    id: "arpita-das",
    name: "Arpita Das",
    college: "Presidency University",
    year: "2nd Year, BA Bengali",
    gmail: "arpita@gmail.com",
    photo: null,
    language: "bengali",
    bio: "শব্দের মধ্যে আমি আমার জগৎ খুঁজে পাই।",
    joinedDate: "January 2025",
    works: [
      {
        id: "akash-amar",
        title: "আকাশ আমার",
        category: "Poem",
        language: "bengali",
        featured: true,
        date: "জানুয়ারি ২০২৫",
        content: `আকাশ আমার মনের মতো,
কখনো নীল, কখনো মেঘলা,
তবুও সে থাকে, সবসময়,
যেন এক পুরনো বন্ধু আমার।

রাতের তারা যখন ওঠে,
মনে পড়ে তোমার কথা,
নীরবে বসে জানালা ধরে,
লিখি আমার মনের ব্যথা।

সকালবেলা পাখির ডাকে,
ঘুম ভাঙে আমার প্রতিদিন,
তবুও মনে থাকে একটা কথা —
ভালোবাসা কি সত্যিই অসীম?`
      },
      {
        id: "nodi-o-ami",
        title: "নদী ও আমি",
        category: "Poem",
        language: "bengali",
        featured: false,
        date: "ফেব্রুয়ারি ২০২৫",
        content: `নদীর কাছে গিয়ে বসি,
জিজ্ঞেস করি তার কাছে —
কোথায় যাও এত তাড়াতাড়ি,
কোন সুরের টানে ছুটে চলো?

নদী বলে হাসিমুখে,
সাগর আমার গন্তব্য,
পথ যতই কঠিন হোক,
থামা আমার কাজ নয়।

আমিও তাই চলি একদিন,
স্বপ্নের পথে অবিরাম,
নদীর মতো বয়ে চলি,
জীবনের এই সংগ্রামে।`
      }
    ]
  },

  // ======= BENGALI WRITER 2 =======
  {
    id: "sourav-mondal",
    name: "Sourav Mondal",
    college: "Jadavpur University",
    year: "3rd Year, BA Bengali",
    gmail: "sourav@gmail.com",
    photo: null,
    language: "bengali",
    bio: "গল্পের মধ্যে জীবন খুঁজি, জীবনের মধ্যে গল্প।",
    joinedDate: "January 2025",
    works: [
      {
        id: "shesh-chithi",
        title: "শেষ চিঠি",
        category: "Story",
        language: "bengali",
        featured: true,
        date: "জানুয়ারি ২০২৫",
        content: `চিঠিটা পড়ে সে অনেকক্ষণ চুপ করে বসে রইল।

জানালার বাইরে বৃষ্টি পড়ছিল। ঠান্ডা বাতাস
ঘরের ভেতরে এসে পর্দা নাড়িয়ে দিচ্ছিল।
সে জানত এই চিঠি একদিন আসবে।
তবুও প্রস্তুত ছিল না সে।

চিঠির শেষ লাইনটা বারবার পড়ল —
"তোমাকে ভুলিনি, কখনো ভুলব না।
শুধু এবার যেতে হবে।"

সে চিঠিটা ভাঁজ করে বুকের কাছে রাখল।
বৃষ্টি তখনও পড়ছিল।
এই বৃষ্টি কি জানে কারো বিদায়ের কথা?`
      },
      {
        id: "ekti-bela",
        title: "একটি বেলা",
        category: "Quote",
        language: "bengali",
        featured: false,
        date: "ফেব্রুয়ারি ২০২৫",
        content: `"জীবনে এমন কিছু মুহূর্ত আসে,
যখন কথা বলতে ইচ্ছে করে না।
শুধু চুপ করে বসে থাকতে ইচ্ছে করে,
আর অনুভব করতে ইচ্ছে করে —
এই পৃথিবী কতটা সুন্দর।"`
      }
    ]
  },

  // ======= BENGALI WRITER 3 =======
  {
    id: "maya-roy",
    name: "Maya Roy",
    college: "Calcutta University",
    year: "1st Year, BA English",
    gmail: "maya@gmail.com",
    photo: null,
    language: "bengali",
    bio: "কলমই আমার সবচেয়ে বিশ্বস্ত বন্ধু।",
    joinedDate: "March 2025",
    works: [
      {
        id: "alo-amar",
        title: "আলো আমার",
        category: "Poem",
        language: "bengali",
        featured: true,
        date: "মার্চ ২০২৫",
        content: `অন্ধকারে যখন পথ হারাই,
তখন তুমি আসো আলো হয়ে,
মনের কোণে যে ভয় জমেছে,
সব সরিয়ে দাও ভালোবেসে।

মায়ের হাতের পরশ যেন,
বাবার চোখের স্নেহ যেন,
তোমার আলো সেই কথা বলে —
একা নও তুমি, আমি আছি।

তাই যত রাত নামুক আকাশে,
ভয় নেই আমার একটুও,
ভেতরে যে আলো জ্বলে সদা,
সেই আলোতেই পথ চলো।`
      }
    ]
  },

  // ======= ENGLISH WRITER 2 =======
  {
    id: "rahul-verma",
    name: "Rahul Verma",
    college: "City College",
    year: "3rd Year, BA English",
    gmail: "rahul@gmail.com",
    photo: null,
    language: "english",
    bio: "Poetry is my way of making sense of things that do not make sense.",
    joinedDate: "January 2025",
    works: [
      {
        id: "midnight-letters",
        title: "Midnight Letters",
        category: "Poem",
        language: "english",
        featured: false,
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

  // ======= ENGLISH WRITER 3 =======
  {
    id: "sneha-gupta",
    name: "Sneha Gupta",
    college: "Morning Light College",
    year: "1st Year, BA English",
    gmail: "sneha@gmail.com",
    photo: null,
    language: "english",
    bio: "Every story is someone's truth waiting to be heard.",
    joinedDate: "February 2025",
    works: [
      {
        id: "the-library",
        title: "The Library at 6PM",
        category: "Quote",
        language: "english",
        featured: false,
        date: "February 2025",
        content: `"The library at six in the evening is the
quietest kind of miracle.
Every person there has chosen silence over
everything else the world was offering.
That, I think, is its own kind of devotion."`
      }
    ]
  }

];

// ================================
//   GET ALL WORKS
// ================================

function getAllWorks() {
  const all = [];
  writers.forEach(writer => {
    writer.works.forEach(work => {
      all.push({ ...work, writer });
    });
  });
  return all;
}

const allWorks = getAllWorks();

// ================================
//   ✅ SMOOTH SCROLL FIX
//   Works on ALL devices including
//   mobile and tablet!
// ================================

function smoothScroll(event, targetId) {
  event.preventDefault();
  const target = document.getElementById(targetId);
  if (!target) return;

  const navHeight = document.getElementById('navbar')
    .getBoundingClientRect().height;
  const targetPosition = target.getBoundingClientRect().top
    + window.pageYOffset - navHeight;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });

  // Also close mobile nav if open
  closeMobileNav();
}

// ================================
//   DARK MODE
// ================================

const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');
const body        = document.body;

applyTheme(
  localStorage.getItem('campusquill-theme') || 'light'
);

function applyTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('campusquill-theme', 'dark');
  } else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('campusquill-theme', 'light');
  }
}

themeToggle.addEventListener('click', () => {
  applyTheme(
    body.classList.contains('dark-mode') ? 'light' : 'dark'
  );
});

// ================================
//   NAVBAR SCROLL
// ================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  if (navLinks.classList.contains('open')) {
    closeMobileNav();
  }
}, { passive: true });

// ================================
//   MOBILE NAV
// ================================

const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

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

hamburger.addEventListener('click', () => {
  navLinks.classList.contains('open')
    ? closeMobileNav()
    : openMobileNav();
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMobileNav);
});

navOverlay.addEventListener('click', closeMobileNav);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeMobileNav();
    closeModal();
  }
});

// ================================
//   ANIMATED COUNTERS
// ================================

function animateCounter(el, target, duration = 2000) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target + '+';
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start);
    }
  }, 16);
}

const totalWritersEl = document.getElementById('totalWriters');
const totalWorksEl   = document.getElementById('totalWorks');

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(totalWritersEl, writers.length);
      animateCounter(totalWorksEl, allWorks.length);
      counterObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) counterObserver.observe(heroStats);

// ================================
//   HELPERS
// ================================

function getAvatar(writer) {
  if (writer.photo) {
    return `<img src="images/${writer.photo}"
                 alt="${writer.name}" />`;
  }
  return writer.name.charAt(0);
}

function getCategoryIcon(category) {
  const icons = {
    'Poem':          '<i class="fas fa-feather"></i>',
    'Story':         '<i class="fas fa-book"></i>',
    'Quote':         '<i class="fas fa-quote-left"></i>',
    'Essay':         '<i class="fas fa-scroll"></i>',
    'Flash Fiction': '<i class="fas fa-bolt"></i>'
  };
  return icons[category] || '<i class="fas fa-pen"></i>';
}

function getLangBadge(language) {
  if (language === 'bengali') {
    return `<span class="lang-badge bengali">বাংলা</span>`;
  }
  return `<span class="lang-badge english">English</span>`;
}

function getBengaliClass(language) {
  return language === 'bengali' ? 'bengali-text' : '';
}

function getExcerpt(content, length = 100) {
  const clean = content.replace(/\n/g, ' ').trim();
  return clean.length > length
    ? clean.substring(0, length) + '...'
    : clean;
}

// ================================
//   RENDER FEATURED
// ================================

function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  const featured = allWorks.filter(w => w.featured);

  grid.innerHTML = featured.map(work => `
    <div class="featured-card reveal"
         onclick="openModal(
           '${work.id}','${work.writer.id}'
         )">
      <div class="card-category">
        ${getCategoryIcon(work.category)}
        ${work.category}
        ${getLangBadge(work.language)}
      </div>
      <h3 class="card-title
          ${getBengaliClass(work.language)}">
        ${work.title}
      </h3>
      <p class="card-excerpt
         ${getBengaliClass(work.language)}">
        ${getExcerpt(work.content, 110)}
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
//   RENDER WORKS
// ================================

function renderWorks(worksToShow = allWorks) {
  const grid      = document.getElementById('worksGrid');
  const noResults = document.getElementById('noResults');

  if (worksToShow.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';

  grid.innerHTML = worksToShow.map(work => `
    <div class="work-card reveal"
         onclick="openModal(
           '${work.id}','${work.writer.id}'
         )">
      <div class="card-category">
        ${getCategoryIcon(work.category)}
        ${work.category}
        ${getLangBadge(work.language)}
      </div>
      <h3 class="card-title
          ${getBengaliClass(work.language)}"
          style="font-size:1.15rem;">
        ${work.title}
      </h3>
      <p class="card-excerpt
         ${getBengaliClass(work.language)}"
         style="font-size:0.88rem;">
        ${getExcerpt(work.content, 100)}
      </p>
      <div class="card-footer"
           style="margin-top:1.2rem;">
        <div class="card-author">
          <div class="author-avatar"
               style="width:30px;height:30px;
                      font-size:0.8rem;">
            ${getAvatar(work.writer)}
          </div>
          <div class="author-info">
            <strong style="font-size:0.8rem;">
              ${work.writer.name}
            </strong>
            <span>${work.date}</span>
          </div>
        </div>
        <div class="read-btn"
             style="font-size:0.75rem;">
          Read <i class="fas fa-arrow-right"></i>
        </div>
      </div>
    </div>
  `).join('');

  observeReveal();
}

// ================================
//   RENDER WRITERS
// ================================

function renderWriters() {
  const grid = document.getElementById('writersGrid');

  grid.innerHTML = writers.map(writer => `
    <div class="writer-card reveal">
      <div class="writer-photo">
        ${getAvatar(writer)}
      </div>
      <div class="writer-name">
        ${writer.name}
      </div>
      <div class="writer-college">
        ${writer.college}
      </div>
      <p class="writer-bio
         ${getBengaliClass(writer.language)}">
        "${writer.bio}"
      </p>
      <div class="writer-bottom">
        <div class="writer-works-count">
          <i class="fas fa-pen-nib"></i>
          ${writer.works.length}
          ${writer.works.length === 1
            ? 'Work' : 'Works'} Published
        </div>
        <div class="writer-since-badge">
          <i class="fas fa-star"></i>
          Writer since ${writer.joinedDate}
        </div>
      </div>
    </div>
  `).join('');

  observeReveal();
}

// ================================
//   FILTER AND SEARCH
// ================================

const filterBtns  = document.querySelectorAll('.filter-btn');
const langBtns    = document.querySelectorAll('.lang-filter-btn');
const searchInput = document.getElementById('searchInput');

let activeCategory = 'all';
let activeLang     = 'all';
let searchQuery    = '';

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.filter;
    applyFilters();
  });
});

langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    langBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeLang = btn.dataset.lang;
    applyFilters();
  });
});

searchInput.addEventListener('input', e => {
  searchQuery = e.target.value.toLowerCase().trim();
  applyFilters();
});

function applyFilters() {
  let filtered = allWorks;

  if (activeCategory !== 'all') {
    filtered = filtered.filter(
      w => w.category === activeCategory
    );
  }

  if (activeLang !== 'all') {
    filtered = filtered.filter(
      w => w.language === activeLang
    );
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
//   MODAL
// ================================

const modalOverlay = document.getElementById('modalOverlay');
const modalClose   = document.getElementById('modalClose');
const modalContent = document.getElementById('modalContent');

function openModal(workId, writerId) {
  const writer = writers.find(w => w.id === writerId);
  const work   = writer.works.find(w => w.id === workId);

  const readingTime = Math.max(
    1, Math.ceil(work.content.split(' ').length / 200)
  );
  const isBengali = work.language === 'bengali';

  modalContent.innerHTML = `
    <span class="modal-category">
      ${getCategoryIcon(work.category)}
      ${work.category}
      ${getLangBadge(work.language)}
    </span>
    <h2 class="modal-title
        ${isBengali ? 'bengali-text' : ''}">
      ${work.title}
    </h2>
    <div class="modal-meta">
      <span>
        <i class="fas fa-user"></i>
        ${writer.name}
      </span>
      <span>
        <i class="fas fa-calendar"></i>
        ${work.date}
      </span>
      <span>
        <i class="fas fa-clock"></i>
        ${readingTime} min read
      </span>
    </div>
    <div class="modal-divider"></div>
    <div class="modal-body
         ${isBengali ? 'bengali-text' : ''}">
      ${work.content}
    </div>
    <div class="modal-author-section">
      <div class="author-avatar"
           style="width:50px;height:50px;
                  font-size:1.2rem;
                  flex-shrink:0;">
        ${getAvatar(writer)}
      </div>
      <div>
        <strong
          style="font-family:'Playfair Display',serif;
                 color:var(--text-primary);
                 display:block;
                 font-size:1rem;">
          ${writer.name}
        </strong>
        <span style="font-size:0.82rem;
                     color:var(--text-muted);">
          ${writer.year} · ${writer.college}
        </span>
        <em class="${getBengaliClass(writer.language)}"
            style="font-size:0.8rem;
                   color:var(--text-muted);
                   display:block;
                   margin-top:0.3rem;">
          "${writer.bio}"
        </em>
      </div>
    </div>
    <div class="modal-actions">
      <button class="modal-action-btn"
        onclick="shareWork(
          \`${work.title}\`,\`${writer.name}\`
        )">
        <i class="fas fa-share-alt"></i> Share
      </button>
      <button class="modal-action-btn"
              onclick="printWork()">
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

modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});

// ================================
//   SHARE AND PRINT
// ================================

function shareWork(title, author) {
  const text =
    `Read "${title}" by ${author} on CampusQuill! ✍️`;
  if (navigator.share) {
    navigator.share({
      title: 'CampusQuill',
      text,
      url: window.location.href
    });
  } else {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(
        text + ' ' + window.location.href
      )}`,
      '_blank'
    );
  }
}

function printWork() {
  window.print();
}

// ================================
//   SCROLL REVEAL
// ================================

function observeReveal() {
  const reveals = document.querySelectorAll(
    '.reveal:not(.visible)'
  );
  const observer = new IntersectionObserver(entries => {
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