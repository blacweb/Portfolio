const categories = [
  { name: 'Electronics', img: 'media/elevate your electronics/Fuji_Defect_Reduction_1x_Tablets._SY116_CB549022351_.jpg' },
  { name: 'Fashion',     img: 'media/hero section media/fashion trends/LSS23_SPRING_DT_CAT_CARD_1_x1._SY116_CB595261253_.jpg' },
  { name: 'Home',        img: 'media/hero section media/home essentials/Bedding_1x._SY116_CB563137408_.jpg' },
  { name: 'Books',       img: 'media/Books/Fuji_Defect_Reduction_1x_Childrens_Books._SY116_CB549022351_.jpg' },
  { name: 'Toys',        img: 'media/Best seller in toys/71lhVag75AL._AC_SY200_.jpg' },
  { name: 'Beauty',      img: 'media/Popular beauty products/51nR7ndiTZL._AC_SY200_.jpg' },
  { name: 'Grocery',     img: 'media/hero section media/refresh space/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg' },
];

const products = [
  {
    id: 1, name: 'Apple AirPods Pro (2nd Gen) with Active Noise Cancellation',
    brand: 'Apple', category: 'Electronics', rating: 4.7, reviews: 89423,
    price: 189.99, oldPrice: 249.00, badge: '-24%', prime: true, stock: true,
    images: [
      'https://images.unsplash.com/photo-1588423771073-b8903fead714?w=600&q=80',
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&q=80',
    ],
    desc: 'Experience next-level Active Noise Cancellation that blocks out even more of the world around you. Transparency mode lets you hear and connect naturally with the world. A new chip enables powerful features including Adaptive Audio.',
    features: ['Active Noise Cancellation','Transparency Mode','Adaptive Audio','Personalized Spatial Audio','Up to 30 hours total battery life'],
  },
  {
    id: 2, name: 'Samsung 65" QLED 4K Smart TV with Alexa Built-in',
    brand: 'Samsung', category: 'Electronics', rating: 4.5, reviews: 34210,
    price: 997.99, oldPrice: 1299.99, badge: '-23%', prime: true, stock: true,
    images: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80',
      'https://images.unsplash.com/photo-1571415060716-baff5f717c56?w=600&q=80',
    ],
    desc: 'Quantum Dot technology produces over a billion colors, making every scene look vivid and lifelike. The Quantum Processor 4K uses AI to upscale any content to 4K resolution automatically.',
    features: ['QLED 4K Display','Quantum Processor 4K','Alexa & Google Built-in','120Hz refresh rate','Object Tracking Sound'],
  },
  {
    id: 3, name: 'Sony WH-1000XM5 Wireless Noise Canceling Headphones',
    brand: 'Sony', category: 'Electronics', rating: 4.8, reviews: 52310,
    price: 278.00, oldPrice: 349.99, badge: '-21%', prime: true, stock: true,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80',
    ],
    desc: 'Industry-leading noise canceling with two processors and eight microphones. Crystal clear hands-free calling. Up to 30-hour battery life with quick charge (3 min charge = 3 hours playback).',
    features: ['Industry-leading ANC','30-hour battery life','Quick Charge (3min = 3hr)','8 microphones for clear calls','Multi-device connect'],
  },
  {
    id: 4, name: 'Apple MacBook Pro 14" M3 Chip, 18GB RAM, 512GB SSD',
    brand: 'Apple', category: 'Electronics', rating: 4.9, reviews: 12890,
    price: 1599.00, oldPrice: 1999.00, badge: '-20%', prime: true, stock: true,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80',
      'https://images.unsplash.com/photo-1611186871525-a2e4d63b6ce7?w=600&q=80',
    ],
    desc: 'The M3 chip with hardware-accelerated ray tracing delivers a massive leap in graphics performance. The Liquid Retina XDR display is the world\'s most advanced laptop display.',
    features: ['Apple M3 Chip','18GB Unified Memory','512GB SSD','Liquid Retina XDR 14"','Up to 18h battery'],
  },
  {
    id: 5, name: 'Levi\'s Men\'s 501 Original Fit Jeans — Classic Straight Leg',
    brand: "Levi's", category: 'Fashion', rating: 4.4, reviews: 78900,
    price: 49.99, oldPrice: 69.50, badge: '-28%', prime: true, stock: true,
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80',
      'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=600&q=80',
    ],
    desc: 'The original jeans since 1873. The 501 Original Fit is a timeless classic made with 100% cotton denim. Straight leg cut with button fly.',
    features: ['100% Cotton Denim','Button Fly','Straight Leg','Classic 5-pocket styling','Sizes 28–44'],
  },
  {
    id: 6, name: 'Nike Air Max 270 React Sneakers — Men\'s Running Shoes',
    brand: 'Nike', category: 'Fashion', rating: 4.6, reviews: 45600,
    price: 89.99, oldPrice: 150.00, badge: '-40%', prime: false, stock: true,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600&q=80',
    ],
    desc: 'The Nike Air Max 270 React combines two of Nike\'s most popular cushioning innovations for a lightweight, responsive feel with massive Air heel unit.',
    features: ['Max Air 270 heel unit','React foam midsole','Breathable upper','Rubber outsole','Available sizes 6–15'],
  },
  {
    id: 7, name: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker, 6 Quart',
    brand: 'Instant Pot', category: 'Home', rating: 4.7, reviews: 234000,
    price: 59.99, oldPrice: 99.95, badge: '-40%', prime: true, stock: true,
    images: [
      'https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&q=80',
      'https://images.unsplash.com/photo-1612428958840-d9aae3b1d7e5?w=600&q=80',
    ],
    desc: 'The most popular multi-cooker in the world. Replace 7 kitchen appliances: Pressure Cooker, Slow Cooker, Rice Cooker, Steamer, Sauté, Yogurt Maker & Warmer.',
    features: ['7-in-1 Multi-Cooker','6 Quart capacity','14 smart programs','Dishwasher safe parts','UL safety certified'],
  },
  {
    id: 8, name: 'Dyson V15 Detect Cordless Vacuum Cleaner with Laser Dust Detection',
    brand: 'Dyson', category: 'Home', rating: 4.8, reviews: 18720,
    price: 449.99, oldPrice: 649.99, badge: '-31%', prime: true, stock: true,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80',
    ],
    desc: 'Laser Dust Detection illuminates invisible dust on hard floors. Acoustic piezo sensor counts and sizes dust particles, auto-adjusting suction power up to 230 AW.',
    features: ['Laser Dust Detection','230AW suction','HEPA filtration','60-min battery','LCD screen display'],
  },
  {
    id: 9, name: 'Atomic Habits — An Easy & Proven Way to Build Good Habits',
    brand: 'James Clear', category: 'Books', rating: 4.8, reviews: 112300,
    price: 14.99, oldPrice: 27.00, badge: '-44%', prime: true, stock: true,
    images: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80',
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&q=80',
    ],
    desc: 'A #1 New York Times bestseller. No matter your goals, Atomic Habits offers a proven framework for improving — every day. James Clear reveals practical strategies for forming good habits.',
    features: ['#1 NYT Bestseller','320 pages','Paperback edition','Also available as eBook','Ships same day'],
  },
  {
    id: 10, name: 'LEGO Star Wars Millennium Falcon 75257 Building Kit, 1353 Pieces',
    brand: 'LEGO', category: 'Toys', rating: 4.9, reviews: 28400,
    price: 119.99, oldPrice: 159.99, badge: '-25%', prime: true, stock: true,
    images: [
      'https://images.unsplash.com/photo-1587502537745-84b86da1204f?w=600&q=80',
      'https://images.unsplash.com/photo-1563654736-9ef7e73ec4a3?w=600&q=80',
    ],
    desc: 'Build your own Millennium Falcon with this LEGO Star Wars set! Includes 7 minifigures: Han Solo, Chewbacca, Leia, C-3PO, 2 Porgs and BB-8.',
    features: ['1353 pieces','7 minifigures included','Rotating gun turrets','Foldable landing legs','Ages 9+'],
  },
  {
    id: 11, name: 'Bowflex SelectTech 552 Adjustable Dumbbells (Pair)',
    brand: 'Bowflex', category: 'Sports', rating: 4.7, reviews: 42100,
    price: 299.00, oldPrice: 549.00, badge: '-46%', prime: true, stock: true,
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    ],
    desc: 'Replaces 15 sets of weights. Each dumbbell adjusts from 5 to 52.5 lbs in 2.5-lb increments up to the first 25 lbs using a dial system.',
    features: ['5–52.5 lbs each','Replaces 15 sets','Dial-adjust system','Space efficient','2-year warranty'],
  },
  {
    id: 12, name: 'Maybelline New York Fit Me Matte + Poreless Foundation',
    brand: 'Maybelline', category: 'Beauty', rating: 4.5, reviews: 67800,
    price: 7.49, oldPrice: 12.99, badge: '-42%', prime: true, stock: true,
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
    ],
    desc: 'Fits your skin tone, fits your texture. Matte + Poreless foundation provides a natural, matte finish that controls oil and minimizes the appearance of pores.',
    features: ['Matte + Poreless finish','Oil control','40 shades available','Dermatologist tested','SPF 22'],
  },
  {
    id: 13, name: 'Samsung Galaxy S24 Ultra 256GB — Titanium Black (Unlocked)',
    brand: 'Samsung', category: 'Electronics', rating: 4.7, reviews: 24500,
    price: 1199.99, oldPrice: 1299.99, badge: 'PRIME', prime: true, stock: true,
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&q=80',
      'https://images.unsplash.com/photo-1583475716059-da25b2ed9b26?w=600&q=80',
    ],
    desc: 'The most powerful Galaxy S24 Ultra features a built-in S Pen, 200MP camera, and the latest Snapdragon 8 Gen 3 processor with AI-powered photography.',
    features: ['200MP main camera','Built-in S Pen','12GB RAM / 256GB','Snapdragon 8 Gen 3','5000mAh battery'],
  },
  {
    id: 14, name: 'KitchenAid Artisan 5-Qt. Stand Mixer — Empire Red',
    brand: 'KitchenAid', category: 'Home', rating: 4.8, reviews: 32100,
    price: 349.99, oldPrice: 499.99, badge: '-30%', prime: true, stock: true,
    images: [
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
      'https://images.unsplash.com/photo-1556909114-d8a8d5e19e05?w=600&q=80',
    ],
    desc: 'Your stand mixer does it all: mix, knead, whip, mash, and more. The 5-quart bowl accommodates 9 dozen cookies in a single batch. 10 speeds for mixing.',
    features: ['5-Quart stainless bowl','10-speed motor','59 attachments possible','Planetary mixing action','Includes 3 attachments'],
  },
  {
    id: 15, name: 'Kindle Paperwhite (16GB) — 6.8" Display, Adjustable Warm Light',
    brand: 'Amazon', category: 'Electronics', rating: 4.7, reviews: 88900,
    price: 99.99, oldPrice: 139.99, badge: '-29%', prime: true, stock: true,
    images: [
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80',
    ],
    desc: 'The thinnest, lightest Kindle Paperwhite with a 6.8" display and adjustable warm light. Waterproof so you can read in the bath or by the pool.',
    features: ['6.8" display','Adjustable warm light','16GB storage','Waterproof (IPX8)','Up to 10 weeks battery'],
  },
  {
    id: 16, name: 'Nutella Hazelnut Spread with Cocoa, 35.3 oz Jar',
    brand: 'Nutella', category: 'Grocery', rating: 4.8, reviews: 54300,
    price: 8.98, oldPrice: 11.99, badge: '-25%', prime: true, stock: true,
    images: [
      'https://images.unsplash.com/photo-1585478259715-4c8de5e41f1c?w=600&q=80',
      'https://images.unsplash.com/photo-1543515972-c5fd01adffc9?w=600&q=80',
    ],
    desc: 'The original hazelnut spread with cocoa. Made with quality ingredients, Nutella is perfect for breakfast or snack time. Spread it on toast, pancakes, waffles, or just a spoon.',
    features: ['35.3oz jar','No artificial colors','Made with real hazelnuts','No artificial preservatives','Kosher certified'],
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   STATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
let cart = [];
let currentSlide = 0;
let filteredProducts = [...products];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   HERO SLIDER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function goSlide(n) {
  currentSlide = n;
  document.getElementById('heroSlides').style.transform = `translateX(-${n * 100}%)`;
  document.querySelectorAll('.hero-dot').forEach((d, i) => d.classList.toggle('active', i === n));
}
function slideHero(dir) {
  const total = document.querySelectorAll('.hero-slide').length;
  goSlide((currentSlide + dir + total) % total);
}
setInterval(() => slideHero(1), 5000);

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   RENDER CATEGORIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function renderCategories() {
  const grid = document.getElementById('catGrid');
  grid.innerHTML = categories.map(c => `
    <div class="deal-card" onclick="filterCat('${c.name}')">
      <img src="${c.img}" alt="${c.name}" loading="lazy" />
      <div class="cat-name">${c.name}</div>
      <div class="see-more">See more →</div>
    </div>
  `).join('');
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   RENDER PRODUCTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function renderProducts(list) {
  const grid = document.getElementById('productsGrid');
  if (!list.length) {
    grid.innerHTML = '<p style="font-size:16px;color:#555;grid-column:1/-1;padding:40px 0">No products found. Try a different search.</p>';
    return;
  }
  grid.innerHTML = list.map(p => {
    const dollars = Math.floor(p.price);
    const cents = (p.price % 1).toFixed(2).slice(1);
    const inCart = cart.some(c => c.id === p.id);
    return `
      <div class="product-card" onclick="openProduct(${p.id})">
        ${p.badge ? `<span class="badge ${p.badge === 'PRIME' ? 'prime' : ''}">${p.badge}</span>` : ''}
        <div class="product-img-wrap">
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy" />
        </div>
        <div class="product-name">${p.name}</div>
        <div class="stars">
          ${renderStars(p.rating)}
          <span class="review-count">(${p.reviews.toLocaleString()})</span>
        </div>
        <div class="price-row">
          <span class="price-cur">$</span>
          <span class="price-main">${dollars}</span>
          <span class="price-cents">${cents}</span>
          ${p.oldPrice ? `<span class="price-old">$${p.oldPrice.toFixed(2)}</span>` : ''}
        </div>
        ${p.prime ? '<div class="prime-tag">✓ Prime FREE Delivery</div>' : ''}
        ${p.stock ? '<div class="stock-tag">In Stock</div>' : '<div style="color:#c00;font-size:12px">Out of Stock</div>'}
        <button class="btn-cart ${inCart ? 'added' : ''}" id="cartBtn${p.id}"
          onclick="event.stopPropagation(); addToCart(${p.id})">
          ${inCart ? '✓ Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    `;
  }).join('');
}

function renderStars(r) {
  const full = Math.floor(r), half = r % 1 >= 0.5;
  let s = '';
  for (let i = 0; i < full; i++) s += '<span class="star-fill">★</span>';
  if (half) s += '<span class="star-fill" style="opacity:.5">★</span>';
  return s;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function filterCat(cat) {
  filteredProducts = products.filter(p => p.category === cat);
  document.getElementById('productHeading').textContent = cat;
  renderProducts(filteredProducts);
  window.scrollTo({ top: document.getElementById('main').offsetTop - 100, behavior: 'smooth' });
}

function filterProducts() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  filteredProducts = q
    ? products.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
    : [...products];
  document.getElementById('productHeading').textContent = q ? `Results for "${q}"` : 'Featured Products';
  renderProducts(filteredProducts);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PRODUCT PAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function openProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  document.getElementById('prodMainImg').src = p.images[0];
  document.getElementById('prodMainImg').alt = p.name;

  // Thumbnails
  const thumbs = document.getElementById('prodThumbs');
  thumbs.innerHTML = p.images.map((img, i) => `
    <img class="prod-thumb ${i === 0 ? 'active' : ''}" src="${img}" alt="View ${i+1}"
      onclick="switchImg(this, '${img}')" />
  `).join('');

  const dollars = Math.floor(p.price), cents = (p.price % 1).toFixed(2).slice(1);
  const inCart = cart.some(c => c.id === p.id);

  document.getElementById('prodInfo').innerHTML = `
    <div class="brand">Visit the ${p.brand} Store</div>
    <h1>${p.name}</h1>
    <div class="stars">${renderStars(p.rating)} <span class="review-count">${p.reviews.toLocaleString()} ratings</span></div>
    <hr style="border:none;border-top:1px solid #ddd">
    <div class="price-big"><sup style="font-size:16px">$</sup>${dollars}<sup style="font-size:16px">${cents}</sup></div>
    ${p.oldPrice ? `<div class="saving">You Save: $${(p.oldPrice - p.price).toFixed(2)} (${p.badge})</div>` : ''}
    ${p.prime ? '<div class="prime-tag" style="font-size:14px">✓ Prime FREE Delivery</div>' : ''}
    <hr style="border:none;border-top:1px solid #ddd">
    <div class="desc">${p.desc}</div>
    <ul class="features">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
    <hr style="border:none;border-top:1px solid #ddd">
    <div class="ship-info">
      <strong>Delivery:</strong> FREE Prime delivery<br>
      <strong>Ships from:</strong> Amazon<br>
      <strong>Sold by:</strong> ${p.brand} via Amazon<br>
      <strong>Returns:</strong> Eligible for Return, Refund or Replacement within 30 days
    </div>
    <div class="qty-row">
      <span>Qty:</span>
      <button class="qty-btn" onclick="changeQty(-1)">−</button>
      <span class="qty-val" id="prodQty">1</span>
      <button class="qty-btn" onclick="changeQty(1)">+</button>
    </div>
    <button class="btn-add-big ${inCart ? '' : ''}" id="prodAddBtn" onclick="addToCartFromProd(${p.id})">
      ${inCart ? '✓ Added to Cart' : 'Add to Cart'}
    </button>
    <button class="btn-buy-now" onclick="addToCartFromProd(${p.id}); openCheckout()">Buy Now</button>
  `;

  document.getElementById('product-page').classList.add('active');
  document.body.style.overflow = 'hidden';
  window.scrollTo(0, 0);
}

function switchImg(el, src) {
  document.getElementById('prodMainImg').src = src;
  document.querySelectorAll('.prod-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

let prodQty = 1;
function changeQty(d) {
  prodQty = Math.max(1, prodQty + d);
  const el = document.getElementById('prodQty');
  if (el) el.textContent = prodQty;
}

function addToCartFromProd(id) {
  const p = products.find(x => x.id === id);
  addToCart(id, prodQty);
  const btn = document.getElementById('prodAddBtn');
  if (btn) { btn.textContent = '✓ Added to Cart'; btn.style.background = 'var(--amazon-green)'; btn.style.color = '#fff'; }
}

function showHome() {
  document.getElementById('product-page').classList.remove('active');
  document.body.style.overflow = '';
  prodQty = 1;
  renderProducts(filteredProducts);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CART
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function addToCart(id, qty = 1) {
  const p = products.find(x => x.id === id);
  const existing = cart.find(c => c.id === id);
  if (existing) { existing.qty += qty; }
  else { cart.push({ ...p, qty }); }
  updateCartCount();
  showToast(`🛒 ${p.name.slice(0, 40)}... added to cart`);
  const btn = document.getElementById(`cartBtn${id}`);
  if (btn) { btn.textContent = '✓ Added to Cart'; btn.classList.add('added'); }
}

function updateCartCount() {
  const total = cart.reduce((s, c) => s + c.qty, 0);
  document.querySelectorAll('[id^="cartCount"]').forEach(el => el.textContent = total);
}

function openCart() {
  renderCart();
  document.getElementById('cart-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cart-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

function renderCart() {
  const body = document.getElementById('cartBody');
  if (!cart.length) {
    body.innerHTML = '<div class="cart-empty">🛒<br><br>Your cart is empty.<br>Start shopping to add items!</div>';
    document.getElementById('cartTotal').textContent = '$0.00';
    return;
  }
  body.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.images[0]}" alt="${item.name}" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
        <div class="cart-item-qty">
          <button class="ci-qty-btn" onclick="changeCartQty(${item.id}, -1)">−</button>
          <span>${item.qty}</span>
          <button class="ci-qty-btn" onclick="changeCartQty(${item.id}, 1)">+</button>
          <span class="ci-remove" onclick="removeFromCart(${item.id})">Remove</span>
        </div>
      </div>
    </div>
  `).join('');
  const sub = cart.reduce((s, c) => s + c.price * c.qty, 0);
  document.getElementById('cartTotal').textContent = `$${sub.toFixed(2)}`;
}

function changeCartQty(id, d) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + d);
  updateCartCount();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartCount();
  renderCart();
  renderProducts(filteredProducts);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CHECKOUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function openCheckout() {
  if (!cart.length) { showToast('Your cart is empty!'); return; }
  closeCart();
  renderCheckout();
  document.getElementById('checkout-page').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeCheckout() {
  document.getElementById('checkout-page').classList.remove('active');
  document.body.style.overflow = '';
}

function renderCheckout() {
  const items = document.getElementById('checkoutItems');
  items.innerHTML = cart.map(item => `
    <div class="checkout-item">
      <img src="${item.images[0]}" alt="${item.name}" />
      <div class="checkout-item-name">${item.name.slice(0, 40)}... ×${item.qty}</div>
      <div class="checkout-item-price">$${(item.price * item.qty).toFixed(2)}</div>
    </div>
  `).join('');
  const sub = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const tax = sub * 0.08;
  document.getElementById('checkoutSubtotal').textContent = `$${sub.toFixed(2)}`;
  document.getElementById('checkoutTax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('checkoutTotal').textContent = `$${(sub + tax).toFixed(2)}`;
}

function placeOrder() {
  const orderNum = 'AMZ-' + Math.random().toString(36).substring(2, 10).toUpperCase();
  document.getElementById('successOrderNum').textContent = `Order #${orderNum}`;
  document.getElementById('checkout-page').classList.remove('active');
  document.getElementById('success-page').classList.add('active');
  cart = [];
  updateCartCount();
}

function finishOrder() {
  document.getElementById('success-page').classList.remove('active');
  document.body.style.overflow = '';
  renderProducts(filteredProducts);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   TOAST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   INIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
renderCategories();
renderProducts(products);