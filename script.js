// ================================
//   CAMPUSQUILL — COMPLETE JS
// ================================

// ================================
//   DATA — ONLY EDIT THIS PART
// ================================

const writers = [

  // ======= MRITTIKA KONAR =======
  {
    id: "mrittika-konar",
    name: "Mrittika Konar",
    college: "Memari College",
    year: "4 Year, English Honours with Research",
    gmail: "mrittikakonar@gmail.com",
    photo: "mrittika.jpeg",
    language: "english",
    bio: "শব্দজাল বুনি আপন ছন্দে!",
    joinedDate: "April 2026",
    works: [
      {
        id: "find-me",
        title: "Find Me",
        category: "Poem",
        language: "english",
        featured: true,
        date: "April 2026",
        content: `Find me your favourite perfume in the air,
That scent that bloomed the night you held me close.
Find me the warmth your pillow used to wear,
The echo where we spoke in gentle haze.

Find me your favourite song playlist again,
Let every note remember how we swayed.
Find me our monsoon dating day, the rain,
That kissed our hands before the sky had grayed.

Find me in letter you forgot to send,
In folds of dreams that still recall my name,
Find me in my sunflower era still,
I wait to touch your warmth, to breathe, to feel.

So, find me, love, in all we used to be,
For every piece of you still lives in me.`
      },
      {
        id: "sick-heart",
        title: "Sick Heart",
        category: "Poem",
        language: "english",
        featured: false,
        date: "April 2026",
        content: `My heart is sick, aching 
  It cannot speak of its desires, 
  It cannot share its feelings and emotions.

  But poetry can write, can feel, can sing songs in times of sorrow, 
  Weaving a web of words in my mind-land.

  Oh! If it were a rainbow, a follower of rain,
  To sing like a bird in dejection before the onset of dawn.
  Dancing with joy in glossy sunlight, 
  To win the shepherd's heart at twilight.

  But Oh! too far the reality 
  Too much far, 
  Even mind falls in acute sickness!!`
      }
    ]
  },

  // ======= SHREYASI SINGHA ROY =======
  {
    id: "shreyasi-singha-roy",
    name: "Shreyasi Singha Roy",
    college: "Memari College",
    year: "3 Year, BA English",
    gmail: "shreyasisingharoy1@gmail.com",
    photo: "shreyasi.jpg",
    language: "bengali",
    bio: "Beyond time and form, the self dissolves into one infinite silence",
    joinedDate: "April 2026",
    works: [
      {
        id: "দৃষ্টি-উন্মোচন",
        title: "দৃষ্টি উন্মোচন",
        category: "Poem",
        language: "bengali",
        featured: true,
        date: "April 2026",
        content: `হঠাৎ চক্ষু উন্মোচনে দেখিলাম
  দুরন্ত পৃথিবীর চলন্ত কোনো পথিকের,
  নিকট আসিয়া হঠাৎ স্তব্ধ হওয়া জগৎ 
  আবার নিজের ছন্দে চলিছে।

  শূন্য হস্তের দিকে তাকাইয়া 
  দুফোঁটা অশ্রু যখন গন্ডদেশ ছুইলো,
  হঠাৎ দূরে দেখি সেই পথিক কহিয়া উঠিল,
  "বলিয়াছিলাম পূর্বেই আমি তো 
  ক্ষণিকের অবসরে আসিয়াছি; 
  আমার গন্তব্য ভিন্ন।"।

  ভাবিলাম তাহাকে আটকাইয়া রাখি,
  কিন্তু সে যে চলিয়া গিয়াছে অনেক পূর্বেই।
  সেই শূন্য হস্ত মেলিয়া,
  ভারাক্রান্ত হৃদয়ে তাহাকে বিদায় জানাইয়া 
  আবার চলিতে শুরু করলাম অজানার উদ্দেশ্যে,
  বুঝিলাম ইহাই মঙ্গলজনক।।`
      },
       {
        id: "love-confession",
        title: "Love Confession",
        category: "Poem",
        language: "english",
        featured: false,
        date: "April 2026",
        content: `I found peace in nature and was feeling blessed overlooking your hands which were holding me tightly. Looking towards the horizon, I was feeling quite a sense of joy ignoring your love which is only for me. I used to spend my days and nights resting my head on your chest, wrapped in a sense of security.

Ignoring your care I pick up fights and drift away. Hurt by the disrespect of your love, you walk away. At the very moment I didn't feel anything and went back to nature.

The first part of romanticism which was bounded with love, care, peace and joy came to an end. The sense of absence, feelings of fragile and exile helds me tightly in its arms. I realized the security of your love, the peace i found while holding your hands, looking into your eyes and realizing that those eyes filled with love only for me.

I went back to you. You were in a state of fragile but accept me. Your love for me makes a magical boundaries to protect me from the harsh world. Your love for me is constant.

Nature played a crucial role in my life, but your presence makes it always better. You're the reason of my joyfulness.

Please hold me tightly in your arms the way gravitational force works. Love me like the depth of the ocean. Always kept my heart warm in cold nights and after cold fights. You're my Joy.`
      },
    ]
  },

  // ======= Arka Samaddar =======
  {
    id: "arka-samaddar",
    name: "Arka Samaddar",
    college: "Memari College",
    year: "4 Year, English Honours with Research",
    gmail: "arkasamaddar.mym@gmail.com",
    photo: "admin.jpeg",
    language: "bengali, english",
    bio: "Fair is foul and foul is fair, hover through the fog and filthy air.",
    joinedDate: "April 2026",
    works: [
      {
        id: "heavenly-stairs",
        title: "Oh God led me to the stairs to Heaven",
        category: "Quote",
        language: "english",
        featured: true,
        date: "April 2026",
        content: `Oh God led me to the stairs to heaven,
  I've seen all beautiful things in this Earth 
  And nothing's left to see more beautiful than thee.`
      },
    ]
  },
  // ======= Ankita Mondal  =======
   {
    id: "ankita-mondal",
    name: "Ankita Mondal ",
    college: "Memari College",
    year: "4 Year, English Honours with Research",
    gmail: "anktamondal2006@gmail.com",
    photo: "ankita.jpg",
    language: "bengali",
    bio: "অবুঝ অধরা মাধুরী",
    joinedDate: "April 2026",
    works: [
      {
        id: "ক্যাকটাস ",
        title: "ক্যাকটাস ",
        category: "Poem",
        language: "bengali",
        featured: true,
        date: "April 2026",
        content: `একটু অযত্নে গোলাপ মারা যায় 
  কিন্তু ক্যাকটাসের কোনো যত্ন লাগে না 
  হাজার রুক্ষতার মাঝেও বাঁচার রসদ সে জোগাড় করে ।
  রুক্ষতা কে সে আঁকড়ে বাঁচার চেষ্টা করে।
  ভালোবাসাও তেমনই, যে ভালবাসবে সে তোমার ভালো খারাপ সবটা নিয়ে যে তুমি সেই তুমি কে ভালোবাসবে ।
  গোলাপের মত অল্পতেই ছেড়ে যাবে না নষ্ট হবে না। বরং ক্যাকটাসের মত বাঁচার কারণ খুঁজবে।
  তোমাকে আঁকড়ে ধরে রাখবে, কিন্তু ক্যাকটাসও তো শেষ হয়...
  অল্প জলের প্রয়োজন তারও হয়।তাই তুমি যদি তোমার জীবনের ক্যাকটাসকে দিন শেষে একটু জল ও না দাও তাহলে সেও সরে যাবে তোমার জীবন থেকে...
  তাই তোমাকে যে ভালোবাসে যে অপেক্ষা করে তোমার জন্য...
  দিনে একটু সময় তাকেও দাও।
  ভালোবাসা সেটা না যেটাতে সারা দিন সময় দিতে হয় কথা বলতে হয়।
  ভালোবাসা সেটা যেটা দিনে একটা কথা 
  " আমি ঠিক আছি " এতেই খুশি হয় অপর দিকের মানুষটা ।
  তাই "গোলাপ হলো প্রেম...
  আর ক্যাকটাস হলো ভালোবাসা " ।`
      },
    ]
  },
  // ======= Lokesh Sahani =======
  {
    id: "lokesh-sahani",
    name: "Lokesh Sahani",
    college: "Memari College",
    year: "4 Year, English Honours with Research",
    gmail: "lokeshsahani200@gmail.com",
    photo: "lokesh-sahani.jpg",
    language: "bengali, english, hinglish",
    bio: "",
    joinedDate: "April 2026",
    works: [
      {
        id: "stream-eternal-merge",
        title: "Stream's Eternal Merge",
        category: "Poem",
        language: "english",
        featured: true,
        date: "April 2026",
        content: `A little stream longs for a massive dream ,
        once it urges to merge in ocean .
        Holding the brutal truth of the past,
        requires to rewrite, the ending at last.

        Sooth'ng around the sea ,
        left behind the source.
        Disclos'ng the matter of love 
        highly luxurious even death .
        Profound the urge of union
        always haunt'ng the lifeforce.

        Untill it emerges into sea once,
        ignor'ng all possibilities of lust..
        greet of love, hurt become nonce,
        loving desire, being furious not fast.`
      },
    ]
  },
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