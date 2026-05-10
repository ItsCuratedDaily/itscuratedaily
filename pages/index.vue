<template>
  <div class="home">
    <nav class="nav">
      <div class="nav-left">
        <button class="hamburger" @click="menuOpen = !menuOpen" :class="{ active: menuOpen }">
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

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="mobile-menu">
      <a href="#why" @click="menuOpen = false">Why Collaborate</a>
      <a href="#collab" @click="menuOpen = false">Collaborations</a>
      <a href="#amazon" @click="menuOpen = false">Amazon Finds</a>
      <a href="#target" @click="menuOpen = false">Target Finds</a>
      <a href="#blog" @click="menuOpen = false">From my Blog</a>
      <a href="#about" @click="menuOpen = false">Meet Elen</a>
      <a href="#recent" @click="menuOpen = false">Recent Posts</a>
    </div>

    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg"></div>
    </section>

    <!-- Why Collaborate -->
    <section class="section why-bg" id="why">
      <div class="wrap">
        <h2>Why Collaborate With Us?</h2>
        <p class="section-desc">Partner with ItsCuratedDaily for authentic, premium content</p>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-num">01</div>
            <h3>Authentic Audience</h3>
            <p>Real people with real purchasing power who trust recommendations.</p>
          </div>
          <div class="feature-card">
            <div class="feature-num">02</div>
            <h3>Premium Aesthetic</h3>
            <p>High-quality, luxury content that elevates your brand's presence.</p>
          </div>
          <div class="feature-card">
            <div class="feature-num">03</div>
            <h3>Conversion Focus</h3>
            <p>Amazon affiliate expertise with proven conversion rates.</p>
          </div>
          <div class="feature-card">
            <div class="feature-num">04</div>
            <h3>Full Transparency</h3>
            <p>Real-time analytics and performance tracking for every campaign.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Collaborations -->
    <section class="section collab-bg" id="collab">
      <div class="wrap">
        <h2>Recent Collaborations</h2>
        <p class="section-desc">Featured brand partnerships</p>
        <div class="grid">
          <img src="/assets/post-1.jpg" alt="Collaboration 1">
          <img src="/assets/post-2.jpg" alt="Collaboration 2">
          <img src="/assets/post-3.jpg" alt="Collaboration 3">
          <img src="/assets/post-4.jpg" alt="Collaboration 4">
        </div>
      </div>
    </section>

    <!-- Amazon Finds -->
    <section class="section amazon-bg" id="amazon">
      <div class="wrap">
        <h2>Amazon Finds</h2>
        <p class="section-desc">Carefully curated products we love</p>
        <div class="grid">
          <img src="/assets/post-1.jpg" alt="Amazon Find 1">
          <img src="/assets/post-2.jpg" alt="Amazon Find 2">
          <img src="/assets/post-3.jpg" alt="Amazon Find 3">
          <img src="/assets/post-4.jpg" alt="Amazon Find 4">
        </div>
      </div>
    </section>

    <!-- Target Finds -->
    <section class="section target-bg" id="target">
      <div class="wrap">
        <h2>Target Finds</h2>
        <p class="section-desc">Trending picks from Target</p>
        <div class="grid">
          <img src="/assets/post-1.jpg" alt="Target Find 1">
          <img src="/assets/post-2.jpg" alt="Target Find 2">
          <img src="/assets/post-3.jpg" alt="Target Find 3">
          <img src="/assets/post-4.jpg" alt="Target Find 4">
        </div>
      </div>
    </section>

    <!-- From my Blog -->
    <section class="section blog-bg" id="blog">
      <div class="wrap">
        <h2>From my Blog</h2>
        <p class="section-desc">Stories, insights, and inspiration</p>
        <div class="grid">
          <img src="/assets/post-1.jpg" alt="Blog 1">
          <img src="/assets/post-2.jpg" alt="Blog 2">
          <img src="/assets/post-3.jpg" alt="Blog 3">
          <img src="/assets/post-4.jpg" alt="Blog 4">
        </div>
      </div>
    </section>

    <!-- Meet Elen -->
    <section class="section meet-bg" id="about">
      <div class="wrap">
        <div class="about-grid">
          <img src="/assets/profile.jpg" alt="Elen">
          <div class="about-content">
            <h2>Meet Elen</h2>
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

    <!-- Recent Posts -->
    <section class="section recent-bg" id="recent">
      <div class="wrap">
        <h2>Recent Posts</h2>
        <p class="section-desc">Latest updates from ItsCuratedDaily</p>
        <div class="grid">
          <img src="/assets/post-1.jpg" alt="Recent 1">
          <img src="/assets/post-2.jpg" alt="Recent 2">
          <img src="/assets/post-3.jpg" alt="Recent 3">
          <img src="/assets/post-4.jpg" alt="Recent 4">
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer-new">
      <div class="footer-content">
        <div class="footer-image">
          <img src="/assets/profile.jpg" alt="Elen Hovsepian">
        </div>
        <div class="footer-columns">
          <div class="footer-column">
            <h3>About</h3>
            <ul>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#collab">Collaborations</a></li>
              <li><a href="#about">Contact Us</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Explore</h3>
            <ul>
              <li><a href="#why">Why Collaborate</a></li>
              <li><a href="#amazon">Amazon Finds</a></li>
              <li><a href="#target">Target Finds</a></li>
              <li><a href="#blog">From my Blog</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Connect</h3>
            <ul>
              <li><a href="https://instagram.com/itscurateddaily" target="_blank">Instagram</a></li>
              <li><a href="#about">Email</a></li>
              <li><a href="/">ItsCuratedDaily.com</a></li>
            </ul>
          </div>
        </div>
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
  --text-muted: #999;
  --accent: #8b7355;
  --accent-dark: #745c45;
  --white: #ffffff;
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
  padding: 8px;
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

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  background: white;
  border-bottom: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  z-index: 100;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.mobile-menu a {
  padding: 20px 40px;
  text-decoration: none;
  color: var(--text);
  font-size: 16px;
  border-bottom: 1px solid var(--border);
  transition: background-color 0.3s;
  cursor: pointer;
}

.mobile-menu a:hover {
  background-color: var(--primary);
}

.mobile-menu a:last-child {
  border-bottom: none;
}

/* Hero */
.hero {
  height: 400px;
  background-color: #d9d9d9;
}

/* Sections */
.section {
  padding: 100px 0;
}

.section h2 {
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 12px;
  letter-spacing: -1px;
}

.section-desc {
  font-size: 16px;
  color: var(--text-light);
  text-align: center;
  margin-bottom: 60px;
  font-weight: 300;
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

/* Background colors for each section */
.collab-bg {
  background-color: #ffffff;
}

.amazon-bg {
  background-color: #faf7f2;
}

.target-bg {
  background-color: #f5f3f0;
}

.blog-bg {
  background-color: #f0ebe5;
}

.meet-bg {
  background-color: #ebe6e0;
}

.recent-bg {
  background-color: #f8f6f3;
}

.why-bg {
  background-color: #f0ebe5;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.feature-card {
  text-align: center;
}

.feature-num {
  font-size: 48px;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 16px;
  display: block;
}

.feature-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 12px;
  letter-spacing: -0.5px;
}

.feature-card p {
  font-size: 14px;
  color: var(--text-light);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

/* Meet Elen */
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
  letter-spacing: -1px;
}

.subtitle {
  font-size: 16px;
  color: var(--accent);
  font-weight: 600;
  margin-bottom: 30px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.about-content p {
  font-size: 16px;
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 24px;
  font-weight: 400;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 50px;
  padding-top: 50px;
  border-top: 1px solid var(--border);
}

.stats h3 {
  font-size: 32px;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 8px;
}

.stats p {
  font-size: 13px;
  color: var(--text-muted);
  text-transform: uppercase;
  font-weight: 600;
}

/* Footer */
.footer-new {
  background: var(--primary);
  padding: 80px 60px;
  margin-top: 80px;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 100px;
  align-items: flex-start;
}

.footer-image {
  width: 280px;
  height: 350px;
  overflow: hidden;
  border-radius: 4px;
}

.footer-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.footer-columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
}

.footer-column h3 {
  font-family: 'Playfair Display', 'Didot', serif;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--text);
  margin-bottom: 24px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column li {
  margin-bottom: 12px;
}

.footer-column a {
  font-size: 13px;
  color: var(--text-light);
  text-decoration: none;
  transition: color 0.3s;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-column a:hover {
  color: var(--text);
}

@media (max-width: 768px) {
  .wrap {
    padding: 0 20px;
  }

  .section {
    padding: 60px 0;
  }

  .section h2 {
    font-size: 32px;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .footer-columns {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>
