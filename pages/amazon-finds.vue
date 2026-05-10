<template>
  <div>
    <section class="amazon-hero">
      <img src="/assets/amazon-finds-hero.jpg" alt="Amazon Finds" class="amazon-hero-img">
    </section>

    <section class="amazon-content">
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
            { name: 'Lefton Pull-Down Kitchen Faucet', description: 'Pull-Down Kitchen Faucet with Temperature Display in Fahrenheit, 3 Water Outlet Modes, Matte Black', image: '/assets/products/kitchen-faucet.jpg', link: 'https://www.amazon.com/dp/B0FC1TR2FM' },
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
.amazon-hero {
  width: 100%;
  line-height: 0;
}

.amazon-hero-img {
  width: 100%;
  height: auto;
  display: block;
}

.amazon-content {
  padding: 80px 0;
}

.category-block {
  margin-bottom: 100px;
}

.category-block h2 {
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 40px;
  color: var(--text);
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
  display: block;
}

.product-card:hover {
  transform: translateY(-8px);
}

.product-img {
  width: 100%;
  height: 250px;
  object-fit: contain;
  background: #f8f8f8;
  margin-bottom: 16px;
  border-radius: 4px;
  padding: 12px;
}

.product-card h3 {
  font-size: 16px;
  margin-bottom: 8px;
  color: var(--text);
  font-weight: 600;
}

.product-card p {
  font-size: 13px;
  color: var(--text-light);
  margin-bottom: 12px;
}

.cta {
  font-size: 12px;
  color: var(--accent);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .amazon-hero {
    width: 100%;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .product-img {
    height: 180px;
  }
}
</style>
