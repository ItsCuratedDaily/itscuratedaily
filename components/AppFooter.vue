<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-logo">
        <h2>ItsCuratedDaily</h2>
      </div>

      <div class="footer-cols">
        <div class="footer-col">
          <h3>READ</h3>
          <ul>
            <li><a href="/blog">From My Blog</a></li>
            <li><a href="/recent-posts">Recent Posts</a></li>
            <li><a href="/#about">About</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>SHOP</h3>
          <ul>
            <li><a href="/amazon-finds">Amazon Finds</a></li>
            <li><a href="/target-finds">Target Finds</a></li>
            <li><a href="/collaborations">Collaborations</a></li>
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
          <a href="https://instagram.com/itscurateddaily" target="_blank">📷</a>
          <a href="#" target="_blank">📌</a>
        </div>
        <p class="footer-copy">&copy; 2026 <a href="/">ItsCuratedDaily</a></p>
        <p class="footer-credit">Site by <a href="#">Design</a></p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style>
.footer {
  background-color: #e8dfd5;
  padding: 80px 60px;
  width: 100%;
}

.footer-inner {
  max-width: 1400px;
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

.footer-cols {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 80px;
  margin-bottom: 80px;
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
  font-size: 24px;
}

.footer-socials a {
  text-decoration: none;
  opacity: 0.7;
  transition: opacity 0.3s;
}

.footer-socials a:hover {
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
  .footer {
    padding: 40px 20px;
  }

  .footer-logo h2 {
    font-size: 32px;
    letter-spacing: 4px;
  }

  .footer-cols {
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
