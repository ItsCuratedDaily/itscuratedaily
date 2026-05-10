<template>
  <div>
    <section class="amazon-hero">
      <img src="/assets/amazon-finds-hero.jpg" alt="Amazon Finds" class="amazon-hero-img">
    </section>

    <section class="amazon-content">
      <div v-for="category in categories" :key="category.name" class="category-block">
        <div class="category-header wrap">
          <h2>{{ category.name }}</h2>
          <a :href="'/amazon-finds/' + category.slug" class="see-more-link">See More {{ category.name }} →</a>
        </div>
        <div class="scroll-row">
          <div class="scroll-inner">
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
          slug: 'travel-essentials',
          products: [
            { name: 'Travel Luggage', description: 'Durable carry-on bag', image: '/assets/post-1.jpg', link: 'https://amazon.com/s?k=travel+luggage' },
            { name: 'Travel Pillow', description: 'Memory foam support', image: '/assets/post-2.jpg', link: 'https://amazon.com/s?k=travel+pillow' },
            { name: 'Packing Cubes', description: 'Organize your items', image: '/assets/post-3.jpg', link: 'https://amazon.com/s?k=packing+cubes' },
            { name: 'Phone Charger', description: '20000mAh power bank', image: '/assets/post-4.jpg', link: 'https://amazon.com/s?k=portable+charger' }
          ]
        },
        {
          name: 'Home Essentials',
          slug: 'home-essentials',
          products: [
            { name: 'Tineco Floor ONE S5', description: 'Smart Cordless Wet Dry Vacuum Cleaner and Mop for Hard Floors, Digital Display, Long Run Time, Great for Sticky Messes and Pet Hair', image: '/assets/products/tineco-vacuum.jpg', link: 'https://www.amazon.com/s?k=Tineco+Floor+ONE+S5' },
            { name: 'Throw Pillows', description: 'Decorative comfort', image: '/assets/post-2.jpg', link: 'https://amazon.com/s?k=throw+pillows' },
            { name: 'Ambient Lighting', description: 'Smart LED lights', image: '/assets/post-3.jpg', link: 'https://amazon.com/s?k=ambient+lighting' },
            { name: 'Area Rug', description: 'Elegant floor accent', image: '/assets/post-4.jpg', link: 'https://amazon.com/s?k=area+rug' }
          ]
        },
        {
          name: 'Kids Essentials',
          slug: 'kids-essentials',
          products: [
            { name: 'Baby Stroller', description: 'Lightweight design', image: '/assets/post-1.jpg', link: 'https://amazon.com/s?k=baby+stroller' },
            { name: 'Educational Toys', description: 'Interactive learning', image: '/assets/post-2.jpg', link: 'https://amazon.com/s?k=educational+toys' },
            { name: 'Baby Monitor', description: 'HD video + audio', image: '/assets/post-3.jpg', link: 'https://amazon.com/s?k=baby+monitor' },
            { name: 'Kids Backpack', description: 'School ready', image: '/assets/post-4.jpg', link: 'https://amazon.com/s?k=kids+backpack' }
          ]
        },
        {
          name: 'Office Essentials',
          slug: 'office-essentials',
          products: [
            { name: 'Ergonomic Chair', description: 'Comfortable support', image: '/assets/post-1.jpg', link: 'https://amazon.com/s?k=ergonomic+chair' },
            { name: 'Desk Organizer', description: 'Keep tidy', image: '/assets/post-2.jpg', link: 'https://amazon.com/s?k=desk+organizer' },
            { name: 'USB Hub', description: 'Multi-port connector', image: '/assets/post-3.jpg', link: 'https://amazon.com/s?k=usb+hub' },
            { name: 'Desk Lamp', description: 'LED with USB', image: '/assets/post-4.jpg', link: 'https://amazon.com/s?k=desk+lamp' }
          ]
        },
        {
          name: 'Makeup Favs',
          slug: 'makeup-favs',
          products: [
            { name: 'Brush Set', description: 'Professional quality', image: '/assets/post-1.jpg', link: 'https://amazon.com/s?k=makeup+brushes' },
            { name: 'LED Mirror', description: 'Adjustable lighting', image: '/assets/post-2.jpg', link: 'https://amazon.com/s?k=led+mirror' },
            { name: 'Makeup Primer', description: 'Long-lasting hold', image: '/assets/post-3.jpg', link: 'https://amazon.com/s?k=makeup+primer' },
            { name: 'Setting Spray', description: 'All-day wear', image: '/assets/post-4.jpg', link: 'https://amazon.com/s?k=setting+spray' }
          ]
        },
        {
          name: 'Beauty Essentials',
          slug: 'beauty-essentials',
          products: [
            { name: 'Beauty Pie C-Wave LED Glove', description: 'Rejuvenating LED Treatment for Hands – Red + Near-Infrared Light Therapy for Age Spots, Pigmentation & Firming', image: '/assets/products/beauty-pie-led-glove.jpg', link: 'https://www.amazon.com/dp/B0FQJYSV7L' },
            { name: 'Moisturizer', description: 'Hydrating formula', image: '/assets/post-2.jpg', link: 'https://amazon.com/s?k=moisturizer' },
            { name: 'Face Mask', description: 'Weekly treatment', image: '/assets/post-3.jpg', link: 'https://amazon.com/s?k=face+mask' },
            { name: 'Hair Serum', description: 'Smoothing treatment', image: '/assets/post-4.jpg', link: 'https://amazon.com/s?k=hair+serum' }
          ]
        },
        {
          name: 'Kitchen Essentials',
          slug: 'kitchen-essentials',
          products: [
            { name: 'Lefton Pull-Down Kitchen Faucet', description: 'Pull-Down Kitchen Faucet with Temperature Display in Fahrenheit, 3 Water Outlet Modes, Matte Black', image: '/assets/products/kitchen-faucet.jpg', link: 'https://www.amazon.com/dp/B0FC1TR2FM' },
            { name: 'Jenaluca Herb Scissors', description: 'Herb Scissors with 5 Stainless Steel Blades, Cleaning Comb & Protective Cover', image: '/assets/products/herb-scissors.jpg', link: 'https://www.amazon.com/Jenaluca-Herb-Scissors-Blades-Cover/dp/B00LRKMK96/' },
            { name: 'Meat Claws Chicken Shredder', description: 'Chicken Shredder Tool for Pulled Pork, BBQ, Chicken & Meats — Sturdy & Easy to Use', image: '/assets/products/chicken-shredder.jpg', link: 'https://www.amazon.com/dp/B0FM81W47X' },
            { name: 'Elxis Portable Food Sealer', description: 'Portable Handheld Vacuum Food Sealer, Reusable, Keeps Food Fresh 6x Longer', image: '/assets/products/food-sealer.jpg', link: 'https://www.amazon.com/Elxis-Portable-handheld-Reusable-pressure/dp/B0GSR77ZPL/' }
          ]
        },
        {
          name: 'Car Essentials',
          slug: 'car-essentials',
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
  margin-bottom: 80px;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.category-header h2 {
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  font-weight: 400;
  color: var(--text);
}

.see-more-link {
  font-size: 13px;
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;
  transition: opacity 0.3s;
}

.see-more-link:hover {
  opacity: 0.7;
}

/* Horizontal scroll row */
.scroll-row {
  overflow-x: auto;
  padding: 0 60px 20px;
  scrollbar-width: thin;
  scrollbar-color: #ddd transparent;
}

.scroll-row::-webkit-scrollbar {
  height: 4px;
}

.scroll-row::-webkit-scrollbar-track {
  background: transparent;
}

.scroll-row::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 2px;
}

.scroll-inner {
  display: flex;
  gap: 24px;
  width: max-content;
}

.product-card {
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s;
  display: block;
  width: 260px;
  flex-shrink: 0;
}

.product-card:hover {
  transform: translateY(-6px);
}

.product-img {
  width: 100%;
  height: 240px;
  object-fit: contain;
  background: #ffffff;
  margin-bottom: 14px;
  border-radius: 4px;
  padding: 12px;
  border: 1px solid #f0f0f0;
}

.product-card h3 {
  font-size: 15px;
  margin-bottom: 8px;
  color: var(--text);
  font-weight: 600;
  line-height: 1.4;
}

.product-card p {
  font-size: 12px;
  color: var(--text-light);
  margin-bottom: 12px;
  line-height: 1.5;
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

  .scroll-row {
    padding: 0 20px 16px;
  }

  .product-card {
    width: 200px;
  }

  .product-img {
    height: 180px;
  }

  .category-header h2 {
    font-size: 26px;
  }
}
</style>
