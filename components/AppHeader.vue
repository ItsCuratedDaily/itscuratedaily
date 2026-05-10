<template>
  <div>
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
      <a href="/amazon-finds" @click="menuOpen = false">Amazon Finds</a>
      <a href="/target-finds" @click="menuOpen = false">Target Finds</a>
      <a href="/collaborations" @click="menuOpen = false">Collaborations</a>
      <a href="/blog" @click="menuOpen = false">From my Blog</a>
      <a href="/recent-posts" @click="menuOpen = false">Recent Posts</a>
      <a href="/#why" @click="menuOpen = false">Why Collaborate</a>
      <a href="/#about" @click="menuOpen = false">Meet Elen</a>
    </div>
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
.nav {
  background: white;
  border-bottom: 1px solid #ddd;
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
  flex: 0 0 auto;
}

.nav-center {
  flex: 1;
  text-align: center;
}

.nav-right {
  display: flex;
  gap: 20px;
  flex: 0 0 auto;
}

.hamburger {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: #1a1a1a;
  transition: all 0.3s;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
}

.mobile-menu {
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  background: white;
  padding: 20px 40px;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 99;
}

.mobile-menu a {
  text-decoration: none;
  color: #1a1a1a;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
}

.mobile-menu a:last-child {
  border-bottom: none;
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

.nav-icon {
  font-size: 20px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav {
    padding: 15px 20px;
  }
  
  .mobile-menu {
    padding: 15px 20px;
    top: 60px;
  }
  
  .logo {
    font-size: 20px;
  }
  
  .nav-icon {
    font-size: 18px;
  }
}
</style>
