// =====================================================
//  JEFFIZ RESTAURANT — Full Interactive Experience
// =====================================================

// ====== DATA ======

// Meal Data
const meals = {
  luxury: [
    {
      name: "Golden Truffle Steak",
      desc: "Prime wagyu with shaved black truffle & gold leaf",
      price: 89,
      original: 120,
      emoji: "🥩",
      discount: true
    },
    {
      name: "Diamond Lobster Platter",
      desc: "Cold-water lobster tail with champagne butter",
      price: 110,
      original: 150,
      emoji: "🦞",
      discount: true
    },
    {
      name: "Caviar & Blinis",
      desc: "Osetra caviar served with traditional accompaniments",
      price: 75,
      original: 95,
      emoji: "🐟",
      discount: false
    },
    {
      name: "Wagyu A5 Sashimi",
      desc: "Melt-in-your-mouth Japanese A5 wagyu",
      price: 95,
      original: 130,
      emoji: "🥓",
      discount: true
    },
    {
      name: "Saffron Risotto",
      desc: "Arborio rice steeped in saffron & parmesan foam",
      price: 48,
      original: 60,
      emoji: "🍚",
      discount: false
    },
    {
      name: "Champagne Oysters",
      desc: "Fresh oysters with champagne mignonette",
      price: 65,
      original: 85,
      emoji: "🦪",
      discount: true
    },
    {
      name: "Foie Gras Terrine",
      desc: "Duck foie gras with fig compote & brioche",
      price: 72,
      original: 90,
      emoji: "🍞",
      discount: false
    },
    {
      name: "Truffle Mac & Cheese",
      desc: "Lobster mac with black truffle & gruyère",
      price: 58,
      original: 78,
      emoji: "🧀",
      discount: true
    }
  ],
  affordable: [
    {
      name: "Classic Burger Delight",
      desc: "Angus beef, cheddar, caramelized onions",
      price: 14,
      original: 18,
      emoji: "🍔",
      discount: true
    },
    {
      name: "Budget Pasta Bowl",
      desc: "Penne arrabbiata with fresh basil",
      price: 11,
      original: null,
      emoji: "🍝",
      discount: false
    },
    {
      name: "Loaded Nachos",
      desc: "Tortilla chips with cheese, salsa & guacamole",
      price: 12,
      original: 16,
      emoji: "🫓",
      discount: true
    },
    {
      name: "Chicken Tikka Wrap",
      desc: "Spiced chicken with mint yogurt in a warm wrap",
      price: 10,
      original: null,
      emoji: "🌯",
      discount: false
    },
    {
      name: "Fish & Chips",
      desc: "Beer-battered cod with crispy fries & tartar",
      price: 13,
      original: 17,
      emoji: "🐟",
      discount: true
    },
    {
      name: "Margherita Pizza",
      desc: "Classic tomato, mozzarella & basil",
      price: 11,
      original: null,
      emoji: "🍕",
      discount: false
    },
    {
      name: "BBQ Ribs Platter",
      desc: "Smoked pork ribs with coleslaw & cornbread",
      price: 16,
      original: 22,
      emoji: "🍖",
      discount: true
    },
    {
      name: "Falafel Bowl",
      desc: "Crispy falafel with hummus, tabbouleh & pita",
      price: 10,
      original: null,
      emoji: "🧆",
      discount: false
    }
  ]
};

// Reviews Data
const reviews = [
  {
    name: "Sarah M.",
    role: "Regular Diner",
    avatar: "SM",
    stars: 5,
    text: "Jeffiz made our FIFA night unforgettable! The discount deal was incredible, and the Golden Truffle Steak was out of this world.⚽🔥"
  },
  {
    name: "James T.",
    role: "Food Blogger",
    avatar: "JT",
    stars: 5,
    text: "The blend of luxury and affordability is genius. I had the Wagyu Sashimi and a Classic Burger — both perfect. The AI visuals of the meals are so accurate!"
  },
  {
    name: "Emily R.",
    role: "Couple's Date Night",
    avatar: "ER",
    stars: 5,
    text: "We booked the romantic dining experience with candlelight. It was magical! Jeffiz is our new go-to spot. 💕"
  },
  {
    name: "Carlos D.",
    role: "World Cup Fan",
    avatar: "CD",
    stars: 4,
    text: "Watched the match here with friends. Great atmosphere, huge screens, and the nachos & burgers were top-tier. Will be back!"
  },
  {
    name: "Aisha K.",
    role: "Foodie & Traveler",
    avatar: "AK",
    stars: 5,
    text: "1000+ meals to choose from, all with beautiful AI visuals — I was skeptical until I tasted the food. Jeffiz delivers on every level."
  }
];

// Quiz result descriptions
const quizResults = {
  luxury: {
    label: "Luxury Connoisseur 🍷",
    desc: "You have exquisite taste! You'd love our premium selection — truffle steaks, caviar, and champagne await you. Indulge in the finest dining experience Jeffiz has to offer."
  },
  affordable: {
    label: "Comfort Food Lover 🍔",
    desc: "You know value when you see it! Our affordable menu is packed with flavor and heart. Classic burgers, loaded nachos, and more — all with that World Cup discount!"
  }
};

// ====== LOADING SCREEN ======
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading-overlay').classList.add('hidden');
    initScrollAnimations();
    populateMenu();
    populateReviews();
    createParticles();
  }, 1500);
});

// ====== NAVIGATION ======
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navAnchors = document.querySelectorAll('.nav-links a');

// Scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  updateActiveNav();
});

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 150;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  navAnchors.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) {
      a.classList.add('active');
    }
  });
}

// Hamburger toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close nav on link click
navAnchors.forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ====== SCROLL ANIMATIONS ======
function initScrollAnimations() {
  const slideElements = document.querySelectorAll('.slide-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  slideElements.forEach(el => observer.observe(el));
}

// ====== PARTICLES ======
function createParticles() {
  const container = document.getElementById('particles');
  const symbols = ['⚽', '🏆', '🌟', '✨', '🥩', '🍔', '🍷', '🎉'];
  for (let i = 0; i < 15; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = symbols[i % symbols.length];
    p.style.left = Math.random() * 100 + '%';
    p.style.fontSize = (0.8 + Math.random() * 1.5) + 'rem';
    p.style.animationDuration = (8 + Math.random() * 12) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    container.appendChild(p);
  }
}

// ====== MENU ======
function populateMenu() {
  // Luxury
  const luxuryGrid = document.getElementById('luxury-grid');
  meals.luxury.forEach((item, i) => {
    const card = createMenuCard(item, i);
    luxuryGrid.appendChild(card);
  });

  // Affordable
  const affordableGrid = document.getElementById('affordable-grid');
  meals.affordable.forEach((item, i) => {
    const card = createMenuCard(item, i + meals.luxury.length);
    affordableGrid.appendChild(card);
  });

  // Tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const cat = this.dataset.category;
      document.getElementById('luxury-grid').classList.toggle('hidden', cat !== 'luxury');
      document.getElementById('affordable-grid').classList.toggle('hidden', cat !== 'affordable');
    });
  });
}

function createMenuCard(item, index) {
  const card = document.createElement('div');
  card.className = 'menu-card';
  card.style.animationDelay = (index * 0.1) + 's';

  card.innerHTML = `
    <div class="menu-card-image">
      <div class="placeholder-img">${item.emoji}</div>
      ${item.discount ? '<span class="fifa-discount">⚽ World Cup Deal</span>' : ''}
    </div>
    <div class="menu-card-body">
      <h3>${item.name}</h3>
      <p class="menu-desc">${item.desc}</p>
      <div class="menu-price">
        $${item.price}
        ${item.original ? `<span class="original">$${item.original}</span>` : ''}
      </div>
    </div>
  `;
  return card;
}

// ====== BOOKING SYSTEM ======
function openBooking(type) {
  document.getElementById('booking-type').value = type;
  document.getElementById('booking-title').textContent = 
    type === 'romantic' ? '💕 Romantic Candlelight Booking' : '👨‍👩‍👧‍👦 Group & Family Booking';
  document.getElementById('booking-modal').classList.add('show');
}

function closeBooking() {
  document.getElementById('booking-modal').classList.remove('show');
}

function closeConfirm() {
  document.getElementById('confirm-modal').classList.remove('show');
}

// Booking form submit
document.getElementById('booking-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const type = document.getElementById('booking-type').value;
  const name = document.getElementById('b-name').value;
  const date = document.getElementById('b-date').value;
  const time = document.getElementById('b-time').value;
  const guests = document.getElementById('b-guests').value;

  // Set confirm message
  const msg = type === 'romantic'
    ? `✨ ${name}, your romantic candlelit table for ${guests} is reserved on ${date} at ${time}. Love is in the air! 💕`
    : `🎉 ${name}, your table for ${guests} is reserved on ${date} at ${time}. Get ready for an amazing experience! ⚽`;
  document.getElementById('confirm-message').textContent = msg;

  closeBooking();
  setTimeout(() => {
    document.getElementById('confirm-modal').classList.add('show');
  }, 300);
  this.reset();
});

// Close modals on backdrop click
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('show');
    }
  });
});

// ====== QUIZ SYSTEM ======
let currentQuestion = 1;
let scores = { luxury: 0, affordable: 0 };

document.querySelectorAll('.quiz-opt').forEach(opt => {
  opt.addEventListener('click', function() {
    const value = this.dataset.value;
    scores[value]++;
    
    // Visual feedback
    const parent = this.closest('.quiz-question');
    parent.querySelectorAll('.quiz-opt').forEach(b => b.classList.remove('selected'));
    this.classList.add('selected');

    setTimeout(() => {
      const nextQ = parent.dataset.q;
      if (nextQ < 4) {
        showQuestion(parseInt(nextQ) + 1);
      } else {
        showResult();
      }
    }, 400);
  });
});

function showQuestion(q) {
  document.querySelectorAll('.quiz-question').forEach(el => el.classList.remove('active'));
  document.querySelector(`.quiz-question[data-q="${q}"]`).classList.add('active');
  currentQuestion = q;
}

function showResult() {
  document.querySelectorAll('.quiz-question').forEach(el => el.classList.remove('active'));
  const result = document.getElementById('quiz-result');
  result.classList.remove('hidden');

  const winner = scores.luxury > scores.affordable ? 'luxury' : 'affordable';
  const data = quizResults[winner];
  document.getElementById('result-type').textContent = data.label;
  document.getElementById('result-desc').textContent = data.desc;
}

function resetQuiz() {
  scores = { luxury: 0, affordable: 0 };
  currentQuestion = 1;
  document.getElementById('quiz-result').classList.add('hidden');
  document.querySelectorAll('.quiz-question').forEach(el => el.classList.remove('active'));
  document.querySelector('.quiz-question[data-q="1"]').classList.add('active');
  document.querySelectorAll('.quiz-opt').forEach(b => b.classList.remove('selected'));
}

// ====== REVIEWS SLIDER ======
let currentReview = 0;

function populateReviews() {
  const slider = document.getElementById('reviews-slider');
  const dotsContainer = document.getElementById('slider-dots');

  reviews.forEach((review, index) => {
    // Card
    const card = document.createElement('div');
    card.className = `review-card${index === 0 ? ' active' : ''}`;
    card.innerHTML = `
      <div class="review-avatar">${review.avatar}</div>
      <h4>${review.name}</h4>
      <p class="review-role">${review.role}</p>
      <div class="review-stars">${'★'.repeat(review.stars)}${'☆'.repeat(5 - review.stars)}</div>
      <blockquote>"${review.text}"</blockquote>
    `;
    slider.appendChild(card);

    // Dot
    const dot = document.createElement('div');
    dot.className = `dot${index === 0 ? ' active' : ''}`;
    dot.addEventListener('click', () => goToReview(index));
    dotsContainer.appendChild(dot);
  });
}

function goToReview(index) {
  const cards = document.querySelectorAll('.review-card');
  const dots = document.querySelectorAll('.dot');
  cards.forEach(c => c.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  cards[index].classList.add('active');
  dots[index].classList.add('active');
  currentReview = index;
}

function nextReview() {
  const next = (currentReview + 1) % reviews.length;
  goToReview(next);
}

function prevReview() {
  const prev = (currentReview - 1 + reviews.length) % reviews.length;
  goToReview(prev);
}

// Auto-slide reviews
setInterval(() => {
  nextReview();
}, 5000);

// ====== SMOOTH SCROLL FIX FOR FIXED HEADER ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

console.log('🍽️ Jeffiz — Ready to serve! ⚽');