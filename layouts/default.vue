<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script>
export default {
  components: {
    AppHeader: () => import('~/components/AppHeader.vue'),
    AppFooter: () => import('~/components/AppFooter.vue')
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');

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

html, body {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: var(--text);
  line-height: 1.6;
}

/* Shared wrap */
.wrap {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
}

@media (max-width: 768px) {
  .wrap {
    padding: 0 20px;
  }
}

/* Shared page hero banner (inner pages) */
.page-hero {
  background: var(--primary);
  padding: 60px 60px;
  text-align: center;
}

.page-hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  font-weight: 400;
  color: var(--text);
  margin-bottom: 12px;
  letter-spacing: 2px;
}

.page-hero p {
  font-size: 18px;
  color: var(--text-light);
}

@media (max-width: 768px) {
  .page-hero {
    padding: 40px 20px;
  }

  .page-hero h1 {
    font-size: 32px;
  }

  .page-hero p {
    font-size: 16px;
  }
}

/* Shared page content */
.page-content {
  padding: 80px 0;
  min-height: 300px;
}
</style>
