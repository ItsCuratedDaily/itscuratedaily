<template>
  <div class="home">
    <nav class="nav">
      <div class="nav-left">
        <button class="hamburger" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="nav-center">
        <a href="/" class="logo">ItsCuratedDaily</a>
      </div>
      <div class="nav-right">
        <span class="nav-icon">👤</span>
        <span class="nav-icon">🛍️</span>
      </div>
    </nav>

    <section class="hero">
      <div class="hero-bg"></div>
    </section>

    <section class="about" id="about">
      <div class="wrap">
        <div class="about-grid">
          <img src="/assets/profile.jpg" alt="Elen">
          <div class="about-content">
            <h2>Meet Elen Hovsepian</h2>
            <p class="subtitle">Creator | Curator | Entrepreneur</p>
            <p>Elen is a dedicated content creator with a passion for high-quality, luxury lifestyle content. With over 4,000 engaged followers, she specializes in carefully selected Amazon affiliate products.</p>
            <p>Built on authenticity and trust, ItsCuratedDaily partners with premium brands to create meaningful connections with an audience that values quality and real recommendations.</p>
            <div class="stats">
              <div><h3>4,000+</h3><p>Followers</p></div>
              <div><h3>85%+</h3><p>Engagement</p></div>
              <div><h3>100%</h3><p>Authentic</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="why">
      <div class="wrap">
        <h2>Why Partner With ItsCuratedDaily?</h2>
        <div class="features">
          <div class="feature">
            <div class="num">01</div>
            <h3>Authentic Audience</h3>
            <p>Real people with real purchasing power who trust recommendations.</p>
          </div>
          <div class="feature">
            <div class="num">02</div>
            <h3>Premium Aesthetic</h3>
            <p>High-quality content that elevates your brand's presence.</p>
          </div>
          <div class="feature">
            <div class="num">03</div>
            <h3>Conversion Focus</h3>
            <p>Amazon affiliate expertise with proven conversion rates.</p>
          </div>
          <div class="feature">
            <div class="num">04</div>
            <h3>Full Transparency</h3>
            <p>Real-time analytics and performance tracking for every campaign.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="packages" id="packages">
      <div class="wrap">
        <h2>Partnership Packages</h2>
        <div class="pkg-grid">
          <div class="pkg">
            <h3>Bronze</h3>
            <p class="price">Starting at $XXX</p>
            <ul>
              <li>1-2 curated posts</li>
              <li>Basic analytics</li>
              <li>30-day campaign</li>
            </ul>
            <button @click="goTo('contact')" class="btn-sec">Learn More</button>
          </div>
          <div class="pkg featured">
            <span class="badge">Most Popular</span>
            <h3>Silver</h3>
            <p class="price">Starting at $XXX</p>
            <ul>
              <li>3-4 curated posts</li>
              <li>Advanced analytics</li>
              <li>30-day campaign</li>
              <li>Priority support</li>
            </ul>
            <button @click="goTo('contact')" class="btn-pri">Get Started</button>
          </div>
          <div class="pkg">
            <h3>Gold</h3>
            <p class="price">Starting at $XXX</p>
            <ul>
              <li>5+ curated posts</li>
              <li>Full analytics</li>
              <li>60-day campaign</li>
              <li>Custom strategy</li>
            </ul>
            <button @click="goTo('contact')" class="btn-sec">Learn More</button>
          </div>
        </div>
      </div>
    </section>

    <section class="gallery">
      <div class="wrap">
        <h2>Our Content Style</h2>
        <div class="grid">
          <img src="/assets/post-1.jpg" alt="Post 1">
          <img src="/assets/post-2.jpg" alt="Post 2">
          <img src="/assets/post-3.jpg" alt="Post 3">
          <img src="/assets/post-4.jpg" alt="Post 4">
        </div>
      </div>
    </section>

    <section class="cta">
      <h2>Ready to Elevate Your Brand?</h2>
      <p>Partner with ItsCuratedDaily and reach thousands of engaged followers</p>
      <button @click="goTo('contact')">Start Your Campaign</button>
    </section>

    <section class="contact" id="contact">
      <div class="wrap">
        <h2>Get In Touch</h2>
        <p>Ready to work with us? Let's discuss your campaign.</p>
        <div class="contact-btns">
          <a href="mailto:contact@itscurateddaily.com" class="btn-pri">Email Us</a>
          <a href="https://instagram.com/itscurateddaily" target="_blank" class="btn-sec">DM on Instagram</a>
        </div>
      </div>
    </section>

    <footer>
      <div class="wrap">
        <div class="footer-grid">
          <div>
            <h4>ItsCuratedDaily</h4>
            <p>Premium social media content creation.</p>
          </div>
          <div>
            <h4>Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
            <ul>
              <li><a href="https://instagram.com/itscurateddaily" target="_blank">Instagram</a></li>
            </ul>
          </div>
        </div>
        <p class="copy">&copy; 2026 ItsCuratedDaily. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    goTo(id) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');
</style>

<style scoped>
:root {
  --primary: #f8f6f3;
  --secondary: #e8dfd8;
  --text: #1a1a1a;
  --text-light: #666;
  --accent: #8b7355;
  --accent-dark: #745c45;
  --border: #e0d7d0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: var(--text);
  line-height: 1.6;
}

.wrap {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
}

/* Nav */
.nav {
  background: white;
  border-bottom: 1px solid var(--border);
  padding: 24px 40px;
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.nav-left {
  flex: 1;
  display: flex;
  align-items: center;
}

.hamburger {
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: auto;
  height: auto;
  justify-content: center;
  align-items: center;
  z-index: 101;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2.5px;
  background-color: #1a1a1a;
  transition: all 0.3s ease;
}

.nav-center {
  flex: 1;
  text-align: center;
}

.logo {
  font-family: 'Playfair Display', 'Didot', 'Bodoni', serif;
  font-weight: 400;
  font-size: 26px;
  letter-spacing: 6px;
  color: #1a1a1a;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.3s;
  display: inline-block;
}

.logo:hover {
  opacity: 0.7;
}

.nav-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;
}

.nav-icon {
  font-size: 20px;
  cursor: pointer;
}

/* Hero */
.hero {
  height: 400px;
  background-color: #d9d9d9;
}

/* About */
.about {
  padding: 120px 0;
  border-bottom: 1px solid var(--border);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  align-items: center;
}

.about-grid img {
  width: 100%;
  height: auto;
}

.about-content h2 {
  font-size: 44px;
  font-weight: 700;
  margin-bottom: 12px;
}

.subtitle {
  font-size: 16px;
  color: var(--accent);
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.about-content p {
  font-size: 16px;
  color: var(--text-light);
  margin-bottom: 20px;
  line-height: 1.8;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid var(--border);
}

.stats h3 {
  font-size: 28px;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 8px;
}

.stats p {
  font-size: 12px;
  color: var(--text-light);
  text-transform: uppercase;
  font-weight: 600;
  margin: 0;
}

/* Why */
.why {
  padding: 120px 0;
  background: var(--primary);
}

.why h2 {
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
}

.features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
}

.feature {
  transition: transform 0.3s;
}

.feature:hover {
  transform: translateX(8px);
}

.num {
  font-size: 48px;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 12px;
}

.feature h3 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
}

.feature p {
  font-size: 15px;
  color: var(--text-light);
  line-height: 1.7;
}

/* Packages */
.packages {
  padding: 120px 0;
  border-bottom: 1px solid var(--border);
}

.packages h2 {
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
}

.pkg-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.pkg {
  border: 1px solid var(--border);
  padding: 40px;
  text-align: center;
  position: relative;
  transition: all 0.3s;
}

.pkg:hover {
  border-color: var(--accent);
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
}

.pkg.featured {
  background: var(--primary);
  transform: scale(1.02);
}

.badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--accent);
  color: white;
  padding: 6px 16px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
}

.pkg h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
}

.price {
  font-size: 28px;
  color: var(--accent);
  font-weight: 700;
  margin-bottom: 24px;
}

.pkg ul {
  list-style: none;
  text-align: center;
  margin-bottom: 32px;
}

.pkg li {
  font-size: 14px;
  color: var(--text-light);
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
}

.pkg li:last-child {
  border-bottom: none;
}

.btn-pri, .btn-sec {
  border: none;
  padding: 12px 28px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  display: inline-block;
}

.btn-pri {
  background: var(--accent);
  color: white;
}

.btn-pri:hover {
  background: var(--accent-dark);
}

.btn-sec {
  background: transparent;
  color: var(--text);
  border: 2px solid var(--text);
}

.btn-sec:hover {
  background: var(--text);
  color: white;
}

/* Gallery */
.gallery {
  padding: 120px 0;
  background: var(--primary);
  border-bottom: 1px solid var(--border);
}

.gallery h2 {
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.grid img:hover {
  transform: scale(1.05);
}

/* CTA */
.cta {
  background: linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%);
  color: white;
  padding: 120px 40px;
  text-align: center;
}

.cta h2 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
}

.cta p {
  font-size: 18px;
  margin-bottom: 40px;
}

.cta button {
  background: var(--accent);
  color: white;
  border: none;
  padding: 14px 40px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
}

.cta button:hover {
  background: var(--accent-dark);
}

/* Contact */
.contact {
  padding: 120px 0;
  border-bottom: 1px solid var(--border);
  text-align: center;
}

.contact h2 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
}

.contact p {
  font-size: 16px;
  color: var(--text-light);
  margin-bottom: 40px;
}

.contact-btns {
  display: flex;
  gap: 20px;
  justify-content: center;
}

/* Footer */
footer {
  background: var(--primary);
  border-top: 1px solid var(--border);
  padding: 60px 0 30px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--border);
}

footer h4 {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 16px;
}

footer p {
  font-size: 14px;
  color: var(--text-light);
}

footer ul {
  list-style: none;
}

footer li {
  margin-bottom: 10px;
}

footer a {
  font-size: 14px;
  color: var(--text-light);
  text-decoration: none;
  transition: color 0.3s;
}

footer a:hover {
  color: var(--accent);
}

.copy {
  text-align: center;
  font-size: 12px;
  color: #999;
}

@media (max-width: 768px) {
  .wrap { padding: 0 20px; }
  .about-grid { grid-template-columns: 1fr; gap: 40px; }
  .features { grid-template-columns: 1fr; }
  .pkg-grid { grid-template-columns: 1fr; }
  .grid { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: 1fr; gap: 30px; }
}
</style>
