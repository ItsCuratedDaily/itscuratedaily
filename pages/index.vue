<template>
  <div class="home">

    <!-- Hero -->
    <section class="hero">
      <img src="/assets/hero.jpg" alt="ItsCuratedDaily" class="hero-bg">
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
        <div class="grid grid-with-button">
          <img src="/assets/post-1.jpg" alt="Collaboration 1">
          <img src="/assets/post-2.jpg" alt="Collaboration 2">
          <img src="/assets/post-3.jpg" alt="Collaboration 3">
          <img src="/assets/post-4.jpg" alt="Collaboration 4">
        </div>
        <a href="/collaborations" class="see-more-btn">See More Collaborations</a>
      </div>
    </section>

    <!-- Amazon Finds -->
    <section class="section amazon-bg" id="amazon">
      <div class="wrap">
        <h2>Amazon Finds</h2>
        <p class="section-desc">Carefully curated products we love</p>
        <div class="grid grid-with-button">
          <img src="/assets/post-1.jpg" alt="Amazon Find 1">
          <img src="/assets/post-2.jpg" alt="Amazon Find 2">
          <img src="/assets/post-3.jpg" alt="Amazon Find 3">
          <img src="/assets/post-4.jpg" alt="Amazon Find 4">
        </div>
        <a href="/amazon-finds" class="see-more-btn">See More Amazon Finds</a>
      </div>
    </section>

    <!-- Target Finds -->
    <section class="section target-bg" id="target">
      <div class="wrap">
        <h2>Target Finds</h2>
        <p class="section-desc">Trending picks from Target</p>
        <div class="grid grid-with-button">
          <img src="/assets/post-1.jpg" alt="Target Find 1">
          <img src="/assets/post-2.jpg" alt="Target Find 2">
          <img src="/assets/post-3.jpg" alt="Target Find 3">
          <img src="/assets/post-4.jpg" alt="Target Find 4">
        </div>
        <a href="/target-finds" class="see-more-btn">See More Target Finds</a>
      </div>
    </section>

    <!-- From my Blog -->
    <section class="section blog-bg" id="blog">
      <div class="wrap">
        <h2>From my Blog</h2>
        <p class="section-desc">Stories, insights, and inspiration</p>
        <div class="grid grid-with-button">
          <img src="/assets/post-1.jpg" alt="Blog 1">
          <img src="/assets/post-2.jpg" alt="Blog 2">
          <img src="/assets/post-3.jpg" alt="Blog 3">
          <img src="/assets/post-4.jpg" alt="Blog 4">
        </div>
        <a href="/blog" class="see-more-btn">See More Blog Posts</a>
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
        <div class="grid grid-with-button">
          <img src="/assets/post-1.jpg" alt="Recent 1">
          <img src="/assets/post-2.jpg" alt="Recent 2">
          <img src="/assets/post-3.jpg" alt="Recent 3">
          <img src="/assets/post-4.jpg" alt="Recent 4">
        </div>
        <a href="/recent-posts" class="see-more-btn">See More Recent Posts</a>
      </div>
    </section>

    <!-- Footer -->
  </div>
</template>

<script>
export default {}
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
/* Hero */
.hero {
  height: 850px;
  overflow: hidden;
  position: relative;
}

.hero-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
  display: block;
}

@media (max-width: 768px) {
  .hero {
    height: 450px;
  }
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

.grid-with-button {
  margin-bottom: 40px;
}

.see-more-btn {
  display: inline-block;
  float: right;
  font-size: 14px;
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 12px 0;
  transition: opacity 0.3s;
}

.see-more-btn:hover {
  opacity: 0.7;
}

.wrap::after {
  content: '';
  display: table;
  clear: both;
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

/* Footer - Grid Layout (Nabela Style) */
.footer-grid {
  background-color: #e8dfd5;
  padding: 80px 60px;
  margin-top: 0;
}

.footer-container {
  max-width: 1600px;
  margin: 0 auto;
}

.footer-logo {
  text-align: center;
  margin-bottom: 80px;
}

.footer-logo h2 {
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: #ffffff;
}

.footer-grid-cols {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 80px;
  margin-bottom: 100px;
  padding-bottom: 80px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.footer-col h3 {
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #2a2a2a;
  margin-bottom: 30px;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col li {
  margin-bottom: 18px;
}

.footer-col a {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #2a2a2a;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: opacity 0.3s;
}

.footer-col a:hover {
  opacity: 0.6;
}

.footer-bottom {
  text-align: center;
}

.footer-socials {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;
}

.social-icon {
  font-size: 24px;
  text-decoration: none;
  opacity: 0.7;
  transition: opacity 0.3s;
}

.social-icon:hover {
  opacity: 1;
}

.footer-copy {
  font-size: 13px;
  color: #2a2a2a;
  margin: 0 0 8px 0;
}

.footer-copy a {
  text-decoration: none;
  color: #2a2a2a;
  font-weight: 600;
}

.footer-credit {
  font-size: 12px;
  color: #666;
  margin: 0;
}

.footer-credit a {
  color: #666;
  text-decoration: none;
}

@media (max-width: 768px) {
  .footer-grid {
    padding: 40px 20px;
  }
  
  .footer-logo h2 {
    font-size: 32px;
    letter-spacing: 4px;
  }
  
  .footer-grid-cols {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    margin-bottom: 60px;
    padding-bottom: 60px;
  }
  
  .footer-col h3 {
    font-size: 18px;
  }
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

  .see-more-btn {
    font-size: 12px;
    margin-top: 20px;
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
