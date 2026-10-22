// ============================================================
// VARISH TOUR & TRAVELS — Main JavaScript
// Matches the new index.html structure exactly
// Now reads dynamic data from Admin Panel (localStorage)
// ============================================================

'use strict';

// ── ADMIN DATA READER ──
const ADMIN_DEFAULT = {
  hero: {
    welcomeText: "Welcome to Varish Tour & Travels",
    badge: "India's Premium Travel Partner",
    bgImg: "hero-bg.jpg",
    titleLine1: "Extraordinary",
    titleLine2: "Journeys Across",
    titleLine3: "Incredible India",
    desc: "From snow-draped Kashmir valleys to the golden sands of Jaisalmer — we craft bespoke travel experiences that stay with you forever.",
    stat1val: "5000+", stat1label: "Happy Travelers",
    stat2val: "200+", stat2label: "Destinations",
    stat3val: "29+", stat3label: "Years Experience"
  },
  destinations: [
    {
      id: 'd1', name: 'Kashmir', img: 'kashmir.jpg', tag: '⭐ Most Popular', tagType: 'featured',
      rating: '4.9', highlights: 'Dal Lake · Gulmarg · Pahalgam',
      duration: '5–7 Days', price: '₹12,500',
      travelDate: '',
      ticketPrice: '₹12,500 per person',
      phone: '9737703934',
      transport: 'Train',
      office: 'Jamalpur Patang Bazar, Kadiya Sheri'
    },
    {
      id: 'd2', name: 'Jaisalmer', img: 'jaisalmer.jpg', tag: 'Desert', tagType: 'normal',
      rating: '4.8', highlights: 'Dunes · Fort · Camel Safari',
      duration: '3–5 Days', price: '₹3,500',
      travelDate: '',
      ticketPrice: '₹3,500 per person',
      phone: '9737703934',
      transport: '2×2 Bus',
      office: 'Jamalpur Darvaja, Kadiya Sheri'
    },
    { id: 'd3', name: 'Saputara', img: 'saputara.jpg', tag: 'Hill Station', tagType: 'normal', rating: '4.7', highlights: 'Lake · Waterfalls · Sunrise', duration: '2–3 Days', price: '' },
    { id: 'd4', name: 'Mount Abu', img: 'mountabu.jpg', tag: 'Nature', tagType: 'normal', rating: '4.8', highlights: 'Nakki Lake · Dilwara Temple · Shikhar', duration: '2–4 Days', price: '' },
    { id: 'd5', name: 'Simla', img: 'simla.jpg', tag: 'Hill Station', tagType: 'normal', rating: '4.8', highlights: 'Mall Road · Snowfall', duration: '3–5 Days', price: '₹10,000' },
    { id: 'd6', name: 'Manali', img: 'manali.jpg', tag: 'Adventure', tagType: 'normal', rating: '4.9', highlights: 'Rohtang Pass · Solang Valley', duration: '4–6 Days', price: '₹12,000' },
    { id: 'd7', name: 'Ajmer', img: 'ajmer.jpg', tag: 'Spiritual', tagType: 'normal', rating: '4.7', highlights: 'Dargah Sharif · Pushkar', duration: '2–3 Days', price: '₹5,000' },
    { id: 'd8', name: 'Mumbai', img: 'mumbai.jpg', tag: 'City', tagType: 'normal', rating: '4.8', highlights: 'Gateway of India · Marine Drive', duration: '2–4 Days', price: '₹8,000' },
    { id: 'd9', name: 'Goa', img: 'goa.jpg', tag: 'Beach', tagType: 'normal', rating: '4.9', highlights: 'Beaches · Nightlife', duration: '3–5 Days', price: '₹15,000' },
    { id: 'd10', name: 'Kerala', img: 'kerala.jpg', tag: 'Nature', tagType: 'normal', rating: '4.9', highlights: 'Backwaters · Munnar', duration: '5–7 Days', price: '₹18,000' },
    { id: 'd11', name: 'All Over India', img: 'india.jpg', tag: 'Tour', tagType: 'normal', rating: '5.0', highlights: 'Custom Packages Across India', duration: 'Custom', price: 'On Request' }
  ],
  packages: [
    {
      id: 'p2', tier: 'Premium', name: 'Rajasthan Royal Combo', price: '3,500', duration: '8 Nights · 9 Days',
      badge: 'Best Value ✦', featured: true,
      features: [
        { text: 'Jaisalmer + Mount Abu', type: 'inc' },
        { text: 'Desert Camp Stay', type: 'inc' },
        { text: 'Camel Safari at Sunset', type: 'inc' },
        { text: 'Dilwara Temple Tour', type: 'inc' },
        { text: 'Cultural Folk Evening', type: 'inc' },
        { text: 'All Meals Included', type: 'inc' },
        { text: 'AC Coach Transport', type: 'inc' }
      ]
    },
    {
      id: 'p3', tier: 'Luxury', name: 'Kashmir Delight', price: '12,500', duration: '6 Nights · 7 Days',
      badge: '', featured: false,
      features: [
        { text: 'Houseboat on Dal Lake', type: 'inc' },
        { text: 'Gulmarg Gondola Ride', type: 'inc' },
        { text: 'Pahalgam Valley Tour', type: 'inc' },
        { text: 'Shikara Ride', type: 'inc' },
        { text: 'All Meals Included', type: 'inc' },
        { text: 'AC Cab Transfers', type: 'inc' },
        { text: 'Airfare (Add-on Available)', type: 'exc' }
      ]
    }
  ],
  reviews: [
    { id: 'r1', name: 'Rajesh Patel', city: 'Ahmedabad, Gujarat', quote: 'The Kashmir trip was beyond anything I imagined. The houseboat on Dal Lake, the Gulmarg snow — every single detail was arranged flawlessly by Varish Travels. We\'ll be back!', rating: 5, avatarColor1: '#0c2f4e', avatarColor2: '#3498db', destImg: 'kashmir.jpg' },
    { id: 'r2', name: 'Priya & Keval Shah', city: 'Surat, Gujarat', quote: 'Jaisalmer desert camp under the stars — priceless. The camel safari at sunset was the highlight of our honeymoon. Varish handled everything perfectly!', rating: 5, avatarColor1: '#4a2000', avatarColor2: '#e8940a', destImg: 'jaisalmer.jpg' },
    { id: 'r3', name: 'Mehul Desai', city: 'Vadodara, Gujarat', quote: 'Saputara in monsoon is breathtaking and Varish made it even more special. Professional guides, great hotels, and the whole trip was within budget. Highly recommended!', rating: 5, avatarColor1: '#0a2e15', avatarColor2: '#27ae60', destImg: 'saputara.jpg' }
  ],
  about: {
    title: 'We Don\'t Just Plan Trips.<br /><em>We Create Memories.</em>',
    desc: 'Since 2010, Varish Tour & Travels has been Gujarat\'s most trusted travel company. We believe every journey should be extraordinary — whether it\'s your first trip to the mountains or a royal desert adventure.',
    img1: 'kashmir.jpg', img2: 'jaisalmer.jpg',
    rating: '4.9 ★', ratingLabel: 'Average Rating',
    why1title: '100% Safe & Verified', why1desc: 'All accommodations, guides & vehicles are thoroughly vetted.',
    why2title: 'Best Price Guarantee', why2desc: 'Transparent pricing with zero hidden charges. We match any quote.',
    why3title: '24 × 7 Support', why3desc: 'Our experts are always a call away — before, during & after your trip.',
    why4title: 'Fully Customised', why4desc: 'No two trips are alike. We design every tour around your unique preferences.',
    stat1val: '5000+', stat1label: 'Happy Travelers',
    stat2val: '200+', stat2label: 'Destinations',
    stat3val: '29+', stat3label: 'Years of Trust'
  },
  contact: {
    phone: '+91 97377 03934',
    whatsapp: '919737703934',
    email: 'info@varishtravels.com',
    address: 'Jamalpur Patang Bazar, Kadiya Sheri',
    hours: 'Mon–Sat: 9AM–7PM'
  },
  company: {
    brand: 'Varish',
    subtitle: 'Tour & Travels',
    tagline: 'Crafting extraordinary travel experiences across India since 2010. Your journey is our passion.',
    copyright: '© 2024 Varish Tour & Travels. All rights reserved.',
    footerBottom: 'Made with ❤️ in Gujarat, India',
    facebook: '#',
    instagram: '#',
    youtube: '#'
  }
};

function getAdminData() {
  const stored = localStorage.getItem('varish_admin_data');
  if (stored) {
    try { return { ...ADMIN_DEFAULT, ...JSON.parse(stored) }; }
    catch(e) { return { ...ADMIN_DEFAULT }; }
  }
  return { ...ADMIN_DEFAULT };
}

// ── APPLY ADMIN DATA TO PAGE ──
function applyAdminData() {
  const data = getAdminData();

  // === HERO ===
  const h = data.hero;
  const heroBgImg = document.getElementById('hero-bg-img');
  if (heroBgImg && h.bgImg) heroBgImg.src = h.bgImg;

  const heroWelcomeText = document.getElementById('heroWelcomeText');
  if (heroWelcomeText && h.welcomeText) heroWelcomeText.textContent = h.welcomeText;

  const heroBadge = document.querySelector('.hero-badge span');
  if (heroBadge && h.badge) heroBadge.textContent = h.badge;

  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    heroTitle.innerHTML = `<em>${h.titleLine1}</em><span>${h.titleLine2}</span><strong>${h.titleLine3}</strong>`;
  }

  const heroDesc = document.querySelector('.hero-desc');
  if (heroDesc && h.desc) heroDesc.textContent = h.desc;

  const statTripsEl = document.getElementById('statTrips');
  const statDestsEl = document.getElementById('statDests');
  const statYearsEl = document.getElementById('statYears');
  if (statTripsEl) statTripsEl.textContent = h.stat1val;
  if (statDestsEl) statDestsEl.textContent = h.stat2val;
  if (statYearsEl) statYearsEl.textContent = h.stat3val;

  // Update stat labels
  const statItems = document.querySelectorAll('.hero-stats .stat-item');
  if (statItems[0]) statItems[0].querySelector('span').textContent = h.stat1label;
  if (statItems[1]) statItems[1].querySelector('span').textContent = h.stat2label;
  if (statItems[2]) statItems[2].querySelector('span').textContent = h.stat3label;

  // === DESTINATIONS ===
  const destGrid = document.querySelector('.dest-grid');
  if (destGrid && data.destinations.length > 0) {
    destGrid.innerHTML = data.destinations.map((d, i) => `
      <div class="dest-card ${i === 0 ? 'dest-large' : ''} reveal" id="dc-${d.id}">
        <img src="${d.img}" alt="${d.name}" class="dest-img" />
        <div class="dest-overlay"></div>
        <div class="dest-body">
          <div class="dest-top">
            <span class="dest-tag ${d.tagType === 'featured' ? 'dest-featured' : ''}">${d.tag}</span>
            <span class="dest-rating">★ ${d.rating}</span>
          </div>
          <div class="dest-bottom">
            <h3 class="dest-name">${d.name}</h3>
            <p class="dest-highlights">${d.highlights}</p>
            ${d.travelDate ? `
            <div class="dest-info-strip">
              <div class="dest-info-row"><span class="di-icon">📅</span><span><strong>Date:</strong> ${d.travelDate}</span></div>
              <div class="dest-info-row"><span class="di-icon">🎫</span><span><strong>Ticket:</strong> ${d.ticketPrice}</span></div>
              <div class="dest-info-row"><span class="di-icon">📞</span><span><strong>Phone:</strong> ${d.phone}</span></div>
              <div class="dest-info-row"><span class="di-icon">🚆</span><span><strong>Transport:</strong> ${d.transport}</span></div>
              <div class="dest-info-row"><span class="di-icon">🏢</span><span><strong>Office:</strong> ${d.office}</span></div>
            </div>` : ''}
            <div class="dest-footer">
              <div class="dest-meta">
                <span>${d.duration}</span>
                <span>From <strong>${d.price}</strong></span>
              </div>
              <button class="dest-btn" onclick="openModal('${d.name} Tour')">Explore →</button>
            </div>
          </div>
        </div>
      </div>
    `).join('');


  }

  // === HERO FLOATING DESTINATION CARDS ===
  const heroDestCards = document.getElementById('heroDestCards');
  if (heroDestCards && data.destinations.length > 0) {
    const showDests = data.destinations.slice(0, 3);
    heroDestCards.innerHTML = showDests.map(d => `
      <div class="hdest-card" onclick="document.getElementById('destinations').scrollIntoView({behavior:'smooth'})">
        <img src="${d.img}" alt="${d.name}" onerror="this.style.display='none'" />
        <div class="hdest-info">
          <strong>${d.name}</strong>
          <span>${d.tag}</span>
        </div>
      </div>
    `).join('');
  }

  // === MARQUEE ===
  const marqueeInner = document.querySelector('.marquee-inner');
  if (marqueeInner && data.destinations.length > 0) {
    const items = data.destinations.map(d => `<span>✦ ${d.name}</span>`).join('');
    marqueeInner.innerHTML = items + items; // Duplicate for seamless loop
  }

  // === PACKAGES ===
  const pkgGrid = document.querySelector('.pkg-grid');
  if (pkgGrid && data.packages.length > 0) {
    pkgGrid.innerHTML = data.packages.map(p => `
      <div class="pkg-card ${p.featured ? 'pkg-featured' : ''} reveal" id="pkg-${p.id}">
        ${p.badge ? `<div class="pkg-badge">${p.badge}</div>` : ''}
        <div class="pkg-tier">${p.tier}</div>
        <div class="pkg-price"><sup>₹</sup>${p.price}<sub>/person</sub></div>
        <div class="pkg-name">${p.name}</div>
        <div class="pkg-duration">${p.duration}</div>
        <div class="pkg-divider"></div>
        <ul class="pkg-features">
          ${p.features.map(f => `<li class="feat-${f.type}">${f.text}</li>`).join('')}
        </ul>
        <button class="pkg-btn ${p.featured ? 'pkg-btn-gold' : ''}" onclick="openModal('${p.name} (${p.tier})')">Book This Package</button>
      </div>
    `).join('');
  }

  // === REVIEWS ===
  const reviewsGrid = document.querySelector('.reviews-grid');
  if (reviewsGrid && data.reviews.length > 0) {
    reviewsGrid.innerHTML = data.reviews.map(r => `
      <div class="review-card reveal" id="rc-${r.id}">
        <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
        <p class="review-quote">"${r.quote}"</p>
        <div class="review-author">
          <div class="review-avatar" style="background: linear-gradient(135deg, ${r.avatarColor1}, ${r.avatarColor2})">${r.name.charAt(0)}</div>
          <div>
            <strong>${r.name}</strong>
            <span>${r.city}</span>
          </div>
        </div>
        ${r.destImg ? `<div class="review-dest-img"><img src="${r.destImg}" alt="" /></div>` : ''}
      </div>
    `).join('');
  }

  // === ABOUT ===
  const a = data.about;
  const aboutTitle = document.querySelector('#about .section-title');
  if (aboutTitle && a.title) aboutTitle.innerHTML = a.title;

  const aboutDesc = document.querySelector('.about-desc');
  if (aboutDesc && a.desc) aboutDesc.textContent = a.desc;

  const aboutImgMain = document.querySelector('.about-img-main img');
  const aboutImgSec = document.querySelector('.about-img-secondary img');
  if (aboutImgMain && a.img1) aboutImgMain.src = a.img1;
  if (aboutImgSec && a.img2) aboutImgSec.src = a.img2;

  const aboutStatsCard = document.querySelector('.about-stats-card');
  if (aboutStatsCard) {
    aboutStatsCard.innerHTML = `<strong>${a.rating}</strong><span>${a.ratingLabel}</span>`;
  }

  // Why-Us cards
  const whyCards = document.querySelectorAll('.why-card');
  const whyData = [
    { title: a.why1title, desc: a.why1desc },
    { title: a.why2title, desc: a.why2desc },
    { title: a.why3title, desc: a.why3desc },
    { title: a.why4title, desc: a.why4desc },
  ];
  whyCards.forEach((card, i) => {
    if (whyData[i]) {
      const strong = card.querySelector('strong');
      const p = card.querySelector('p');
      if (strong) strong.textContent = whyData[i].title;
      if (p) p.textContent = whyData[i].desc;
    }
  });

  // About stats
  const aboutNums = document.querySelectorAll('.about-num');
  const aboutStats = [
    { val: a.stat1val, label: a.stat1label },
    { val: a.stat2val, label: a.stat2label },
    { val: a.stat3val, label: a.stat3label },
  ];
  aboutNums.forEach((num, i) => {
    if (aboutStats[i]) {
      num.querySelector('strong').textContent = aboutStats[i].val;
      num.querySelector('span').textContent = aboutStats[i].label;
    }
  });

  // === CONTACT ===
  const c = data.contact;

  // Phone links
  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.href = 'tel:' + c.phone.replace(/\s/g, '');
    const spanEl = link.querySelector('span') || link.querySelector('div span');
    if (spanEl) spanEl.textContent = c.phone;
    // Header phone text
    if (link.classList.contains('header-phone')) {
      link.href = 'tel:' + c.phone.replace(/\s/g, '');
      const textNode = Array.from(link.childNodes).find(n => n.nodeType === 3);
      if (textNode) textNode.textContent = '\n          ' + c.phone + '\n        ';
    }
  });

  // Email
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.href = 'mailto:' + c.email;
    const spanEl = link.querySelector('div span');
    if (spanEl) spanEl.textContent = c.email;
  });

  // WhatsApp links
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.href = 'https://wa.me/' + c.whatsapp;
  });

  // Office info
  const ciOffice = document.getElementById('ci-office');
  if (ciOffice) {
    const span = ciOffice.querySelector('div span');
    if (span) span.innerHTML = `${c.address} &nbsp;|&nbsp; ${c.hours}`;
  }

  // Contact form destination dropdown — rebuild with current destinations
  const cfDest = document.getElementById('cf-dest');
  if (cfDest) {
    cfDest.innerHTML = '<option value="">Choose destination</option>';
    data.destinations.forEach(d => {
      cfDest.innerHTML += `<option>${d.name}</option>`;
    });
    cfDest.innerHTML += '<option>Custom / Multiple</option>';
  }

  // === COMPANY ===
  const co = data.company;

  // Brand names
  document.querySelectorAll('.logo-brand').forEach(el => el.textContent = co.brand);
  document.querySelectorAll('.logo-sub').forEach(el => el.textContent = co.subtitle);

  // Footer tagline
  const ftBrandP = document.querySelector('.footer-brand > p');
  if (ftBrandP) ftBrandP.textContent = co.tagline;

  // Footer bottom
  const ftBottom = document.querySelector('.footer-bottom-inner');
  if (ftBottom) {
    const spans = ftBottom.querySelectorAll('span');
    if (spans[0]) spans[0].textContent = co.copyright;
    if (spans[1]) spans[1].textContent = co.footerBottom;
  }

  // Social links
  const sfFb = document.getElementById('sf-fb');
  const sfIg = document.getElementById('sf-ig');
  const sfYt = document.getElementById('sf-yt');
  if (sfFb) sfFb.href = co.facebook || '#';
  if (sfIg) sfIg.href = co.instagram || '#';
  if (sfYt) sfYt.href = co.youtube || '#';

  // Footer destinations list
  const footerDestCol = document.querySelector('.footer-col ul');
  if (footerDestCol && data.destinations.length > 0) {
    footerDestCol.innerHTML = data.destinations.map(d =>
      `<li><a href="#destinations">${d.name}</a></li>`
    ).join('');
  }

  // Footer contact info
  const footerCols = document.querySelectorAll('.footer-col');
  if (footerCols.length >= 3) {
    const contactCol = footerCols[footerCols.length - 1];
    const contactUl = contactCol.querySelector('ul');
    if (contactUl) {
      contactUl.innerHTML = `
        <li>${c.phone}</li>
        <li>${c.email}</li>
        <li>${c.address}</li>
        <li>${c.hours}</li>
      `;
    }
  }

  // Re-observe newly added reveal elements
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObs.observe(el));
  }, 100);
}


/* ── PAGE LOADER ── */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
  }, 2600);
});

/* ── HEADER SCROLL ── */
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  lastScroll = y;
}, { passive: true });

/* ── HAMBURGER MENU ── */
const hamburger = document.getElementById('hamburger');
const mainNav   = document.getElementById('mainNav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mainNav.classList.toggle('open');
  document.body.style.overflow = mainNav.classList.contains('open') ? 'hidden' : '';
});

// Close nav when a link is clicked
mainNav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mainNav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ── ACTIVE NAV HIGHLIGHTING ── */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  const scrollPos = window.scrollY + 120;
  let current = '';
  sections.forEach(s => {
    if (s.offsetTop <= scrollPos) current = s.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

/* ── SMOOTH ANCHOR SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── SCROLL REVEAL ── */
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = (i % 4) * 100;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => revealObs.observe(el));

/* ── HERO BUTTONS ── */
const heroExploreBtn  = document.getElementById('heroExploreBtn');
const heroPackagesBtn = document.getElementById('heroPackagesBtn');
const headerBookBtn   = document.getElementById('headerBookBtn');
const customPlanBtn   = document.getElementById('customPlanBtn');

if (heroExploreBtn)  heroExploreBtn.addEventListener('click', () => scrollToSection('#destinations'));
if (heroPackagesBtn) heroPackagesBtn.addEventListener('click', () => scrollToSection('#packages'));
if (headerBookBtn)   headerBookBtn.addEventListener('click', () => openModal('General Tour Package'));
if (customPlanBtn)   customPlanBtn.addEventListener('click', () => scrollToSection('#contact'));

function scrollToSection(selector) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── BOOKING MODAL ── */
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose    = document.getElementById('modalClose');
const modalPkgName  = document.getElementById('modalPkgName');

function openModal(packageName) {
  if (modalPkgName) modalPkgName.textContent = packageName;
  
  // Pre-fill form if package is Kashmir or Jaisalmer
  const mName = document.getElementById('m-name');
  const mPhone = document.getElementById('m-phone');
  const mDate = document.getElementById('m-date');
  const mTravelers = document.getElementById('m-travelers');

  if (packageName) {
    const pkg = packageName.toLowerCase();
    if (pkg.includes('kashmir')) {
      if (mName) mName.value = 'nasir bhai chapple vale';
      if (mPhone) mPhone.value = '9737703934';
      if (mDate) mDate.value = '';
      if (mTravelers) mTravelers.value = '3–5 Persons';
    } else if (pkg.includes('jaisalmer')) {
      if (mName) mName.value = 'nasir bhai chapple vale';
      if (mPhone) mPhone.value = '9737703934';
      if (mDate) mDate.value = '';
      if (mTravelers) mTravelers.value = '3–5 Persons';
    } else {
      // Clear values for other packages
      if (mName) mName.value = '';
      if (mPhone) mPhone.value = '';
      if (mDate) mDate.value = '';
      if (mTravelers) mTravelers.value = '2 Persons'; // Default
    }
  }

  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

if (modalClose)    modalClose.addEventListener('click', closeModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', e => { if (e.target === modalBackdrop) closeModal(); });

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ── MODAL FORM SUBMIT ── */
const modalForm       = document.getElementById('modalForm');
const modalSubmitBtn  = document.getElementById('modalSubmitBtn');
const modalSubmitText = document.getElementById('modalSubmitText');

if (modalForm) {
  modalForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name  = document.getElementById('m-name')?.value.trim();
    const phone = document.getElementById('m-phone')?.value.trim();
    if (!name || !phone) {
      showToast('⚠️ Please fill in your name and phone number.');
      return;
    }
    modalSubmitBtn.disabled = true;
    modalSubmitText.textContent = 'Processing...';
    setTimeout(() => {
      closeModal();
      showToast('✅ Booking request sent! We\'ll call you within 2 hours.');
      modalForm.reset();
      modalSubmitBtn.disabled = false;
      modalSubmitText.textContent = 'Confirm Booking Request';
    }, 1600);
  });
}

/* ── CONTACT FORM SUBMIT ── */
const contactForm   = document.getElementById('contactForm');
const cfSubmitBtn   = document.getElementById('cfSubmitBtn');
const cfSubmitText  = document.getElementById('cfSubmitText');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name  = document.getElementById('cf-name')?.value.trim();
    const phone = document.getElementById('cf-phone')?.value.trim();
    if (!name || !phone) {
      showToast('⚠️ Please fill in your name and phone number.');
      return;
    }
    cfSubmitBtn.disabled = true;
    cfSubmitText.textContent = 'Sending...';
    setTimeout(() => {
      showToast('✅ Enquiry sent! We\'ll reach you within 2 hours.');
      contactForm.reset();
      cfSubmitBtn.disabled = false;
      cfSubmitText.textContent = 'Send Enquiry';
    }, 1600);
  });
}

/* ── TOAST NOTIFICATION ── */
let toastTimer;
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 4000);
}

/* ── NUMBER COUNTER ANIMATION ── */
function animateCount(el, target, suffix = '') {
  let start = 0;
  const duration = 2000;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = Math.floor(start).toLocaleString() + suffix;
    if (start >= target) clearInterval(timer);
  }, 16);
}

// Trigger hero stats counter on load
const statTrips = document.getElementById('statTrips');
const statDests = document.getElementById('statDests');
const statYears = document.getElementById('statYears');

const heroStatsEl = document.querySelector('.hero-stats');
if (heroStatsEl) {
  const statsObs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      // Extract numeric values from admin data for animation
      const data = getAdminData();
      const val1 = parseInt(data.hero.stat1val) || 5000;
      const val2 = parseInt(data.hero.stat2val) || 200;
      const val3 = parseInt(data.hero.stat3val) || 29;
      if (statTrips) animateCount(statTrips, val1, '+');
      if (statDests) animateCount(statDests, val2, '+');
      if (statYears) animateCount(statYears, val3, '+');
      statsObs.disconnect();
    }
  }, { threshold: 0.5 });
  statsObs.observe(heroStatsEl);
}

/* ── HERO IMAGE PARALLAX (subtle) ── */
const heroBgImg = document.getElementById('hero-bg-img');
window.addEventListener('scroll', () => {
  if (!heroBgImg) return;
  const y = window.scrollY;
  if (y < window.innerHeight) {
    heroBgImg.style.transform = `scale(1.05) translateY(${y * 0.25}px)`;
  }
}, { passive: true });

/* ── APPLY ADMIN DATA ON DOM READY ── */
document.addEventListener('DOMContentLoaded', () => {
  applyAdminData();
});

// Also apply immediately if DOM is already loaded
if (document.readyState !== 'loading') {
  applyAdminData();
}

/* ── DEV CONSOLE SIGNATURE ── */
console.log('%c✈ Varish Tour & Travels', 'color: #D4AF6A; font-size: 22px; font-weight: 800;');
console.log('%cPremium India Travel — Website loaded!', 'color: #8A8FA8; font-size: 14px;');
console.log('%c🔧 Admin Panel: Open admin.html to manage content', 'color: #22c55e; font-size: 12px;');
