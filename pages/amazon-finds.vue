<template>
  <div class="page">
    <nav class="nav">
      <div class="nav-left">
        <a href="/" class="logo">ItsCuratedDaily</a>
      </div>
      <div class="nav-right">
        <span class="nav-icon">👤</span>
        <span class="nav-icon">🛍️</span>
      </div>
    </nav>

    <section class="hero-section">
      <img src="/assets/amazon-finds-hero.jpg" alt="Amazon Finds" class="hero-bg">
    </section>

    <section class="content">
      <div class="wrap">
        <div v-for="category in categories" :key="category.name" class="category-block">
          <h2>{{ category.name }}</h2>
          <div class="products-grid">
            <a v-for="product in category.products" :key="product.name" :href="product.link" target="_blank" class="product-card">
              <img :src="product.image" :alt="product.name" class="product-img">
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <span class="cta">View on Amazon →</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer-grid">
      <div class="footer-container">
        <div class="footer-logo">
          <h2>ItsCuratedDaily</h2>
        </div>
        
        <div class="footer-grid-cols">
          <div class="footer-col">
            <h3>READ</h3>
            <ul>
              <li><a href="/#blog">From My Blog</a></li>
              <li><a href="/#recent">Recent Posts</a></li>
              <li><a href="/#about">About</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h3>SHOP</h3>
            <ul>
              <li><a href="/amazon-finds">Amazon Finds</a></li>
              <li><a href="/#target">Target Finds</a></li>
              <li><a href="/#collab">Collaborations</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h3>SUPPORT</h3>
            <ul>
              <li><a href="/#contact">Contact</a></li>
              <li><a href="/#faq">Advertise With Us</a></li>
              <li><a href="/#contact">Press Kit</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h3>EXPLORE</h3>
            <ul>
              <li><a href="/#about">Meet Elen</a></li>
              <li><a href="/#why">Why Collaborate</a></li>
              <li><a href="https://instagram.com/itscurateddaily" target="_blank">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-socials">
            <a href="https://instagram.com/itscurateddaily" target="_blank" class="social-icon">📷</a>
            <a href="#" target="_blank" class="social-icon">📌</a>
          </div>
          <p class="footer-copy">&copy; 2026 <a href="/">ItsCuratedDaily</a></p>
          <p class="footer-credit">Site by <a href="#">Design</a></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: 'Travel Essentials',
          products: [
            { name: 'Travel Luggage', description: 'Durable carry-on bag', image: '/assets/post-1.jpg', link: 'https://amazon.com/s?k=travel+luggage' },
            { name: 'Travel Pillow', description: 'Memory foam support', image: '/assets/post-2.jpg', link: 'https://amazon.com/s?k=travel+pillow' },
            { name: 'Packing Cubes', description: 'Organize your items', image: '/assets/post-3.jpg', link: 'https://amazon.com/s?k=packing+cubes' },
            { name: 'Phone Charger', description: '20000mAh power bank', image: '/assets/post-4.jpg', link: 'https://amazon.com/s?k=portable+charger' }
          ]
        },
        {
          name: 'Home Essentials',
          products: [
            { name: 'Luxury Bedding', description: '400 thread count cotton', image: '/assets/post-1.jpg', link: 'https://amazon.com/s?k=luxury+bedding' },
            { name: 'Throw Pillows', description: 'Decorative comfort', image: '/assets/post-2.jpg', link: 'https://amazon.com/s?k=throw+pillows' },
            { name: 'Ambient Lighting', description: 'Smart LED lights', image: '/assets/post-3.jpg', link: 'https://amazon.com/s?k=ambient+lighting' },
            { name: 'Area Rug', description: 'Elegant floor accent', image: '/assets/post-4.jpg', link: 'https://amazon.com/s?k=area+rug' }
          ]
        },
        {
          name: 'Kids Essentials',
          products: [
            { name: 'Baby Stroller', description: 'Lightweight design', image: '/assets/post-1.jpg', link: 'https://amazon.com/s?k=baby+stroller' },
            { name: 'Educational Toys', description: 'Interactive learning', image: '/assets/post-2.jpg', link: 'https://amazon.com/s?k=educational+toys' },
            { name: 'Baby Monitor', description: 'HD video + audio', image: '/assets/post-3.jpg', link: 'https://amazon.com/s?k=baby+monitor' },
            { name: 'Kids Backpack', description: 'School ready', image: '/assets/post-4.jpg', link: 'https://amazon.com/s?k=kids+backpack' }
          ]
        },
        {
          name: 'Office Essentials',
          products: [
            { name: 'Ergonomic Chair', description: 'Comfortable support', image: '/assets/post-1.jpg', link: 'https://amazon.com/s?k=ergonomic+chair' },
            { name: 'Desk Organizer', description: 'Keep tidy', image: '/assets/post-2.jpg', link: 'https://amazon.com/s?k=desk+organizer' },
            { name: 'USB Hub', description: 'Multi-port connector', image: '/assets/post-3.jpg', link: 'https://amazon.com/s?k=usb+hub' },
            { name: 'Desk Lamp', description: 'LED with USB', image: '/assets/post-4.jpg', link: 'https://amazon.com/s?k=desk+lamp' }
          ]
        },
        {
          name: 'Makeup Favs',
          products: [
            { name: 'Brush Set', description: 'Professional quality', image: '/assets/post-1.jpg', link: 'https://amazon.com/s?k=makeup+brushes' },
            { name: 'LED Mirror', description: 'Adjustable lighting', image: '/assets/post-2.jpg', link: 'https://amazon.com/s?k=led+mirror' },
            { name: 'Makeup Primer', description: 'Long-lasting hold', image: '/assets/post-3.jpg', link: 'https://amazon.com/s?k=makeup+primer' },
            { name: 'Setting Spray', description: 'All-day wear', image: '/assets/post-4.jpg', link: 'https://amazon.com/s?k=setting+spray' }
          ]
        },
        {
          name: 'Beauty Essentials',
          products: [
            { name: 'Facial Cleanser', description: 'All skin types', image: '/assets/post-1.jpg', link: 'https://amazon.com/s?k=facial+cleanser' },
            { name: 'Moisturizer', description: 'Hydrating formula', image: '/assets/post-2.jpg', link: 'https://amazon.com/s?k=moisturizer' },
            { name: 'Face Mask', description: 'Weekly treatment', image: '/assets/post-3.jpg', link: 'https://amazon.com/s?k=face+mask' },
            { name: 'Hair Serum', description: 'Smoothing treatment', image: '/assets/post-4.jpg', link: 'https://amazon.com/s?k=hair+serum' }
          ]
        },
        {
          name: 'Kitchen Essentials',
          products: [
            { name: 'Cookware Set', description: 'Stainless steel', image: '/assets/post-1.jpg', link: 'https://amazon.com/s?k=cookware+set' },
            { name: 'Knife Set', description: 'Professional grade', image: '/assets/post-2.jpg', link: 'https://amazon.com/s?k=knife+set' },
            { name: 'Blender', description: 'High-powered', image: '/assets/post-3.jpg', link: 'https://amazon.com/s?k=blender' },
            { name: 'Food Storage', description: 'Glass containers', image: '/assets/post-4.jpg', link: 'https://amazon.com/s?k=food+storage' }
          ]
        },
        {
          name: 'Car Essentials',
          products: [
            { name: 'Phone Mount', description: 'Dashboard mount', image: '/assets/post-1.jpg', link: 'https://amazon.com/s?k=car+phone+mount' },
            { name: 'Air Freshener', description: 'Long-lasting scent', image: '/assets/post-2.jpg', link: 'https://amazon.com/s?k=air+freshener' },
            { name: 'Organizer', description: 'Storage pockets', image: '/assets/post-3.jpg', link: 'https://amazon.com/s?k=car+organizer' },
            { name: 'Dash Cam', description: '1080p recording', image: '/assets/post-4.jpg', link: 'https://amazon.com/s?k=dash+cam' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { width: 100%; max-width: 100%; overflow-x: hidden; }
.page { width: 100%; }

.nav {
  background: white;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-size: 24px;
  text-decoration: none;
  color: #1a1a1a;
  font-weight: 600;
  font-family: 'Playfair Display', serif;
  letter-spacing: 2px;
}

.nav-right {
  display: flex;
  gap: 20px;
}

.nav-icon {
  font-size: 20px;
  cursor: pointer;
}

.hero-section {
  position: relative;
  height: 700px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}

.hero-bg {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.content {
  padding: 80px 0;
}

.wrap {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.category-block {
  margin-bottom: 100px;
}

.category-block h2 {
  font-size: 36px;
  margin-bottom: 40px;
  color: #1a1a1a;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.product-card {
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s;
}

.product-card:hover {
  transform: translateY(-8px);
}

.product-img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-bottom: 16px;
  border-radius: 4px;
}

.product-card h3 {
  font-size: 16px;
  margin-bottom: 8px;
  color: #1a1a1a;
  font-weight: 600;
}

.product-card p {
  font-size: 13px;
  color: #666;
  margin-bottom: 12px;
}

.cta {
  font-size: 12px;
  color: #8b7355;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-grid {
  background-color: #e8dfd5;
  padding: 80px 60px;
  margin-top: 0;
  width: 100%;
  overflow-x: hidden;
}

.footer-container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 60px;
  box-sizing: border-box;
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
  .wrap { padding: 0 20px; }
  .nav { padding: 15px 20px; }
  .products-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; }
  .product-img { height: 180px; }
  .hero-section { height: 500px; }
  
  .footer-grid {
    padding: 40px 15px;
  }
  
  .footer-container {
    padding: 0;
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
</style>
