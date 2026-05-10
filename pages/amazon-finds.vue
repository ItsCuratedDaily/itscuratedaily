<template>
  <div>
    <section class="amazon-hero">
      <img src="/assets/amazon-finds-hero.jpg" alt="Amazon Finds" class="amazon-hero-img">
    </section>

    <section class="amazon-content">
      <div v-for="category in categories" :key="category.name" class="category-block">
        <div class="category-header wrap">
          <h2>{{ category.name }}</h2>
        </div>
        <div class="products-grid wrap">
          <a v-for="product in category.products.slice(0, 4)" :key="product.name" :href="product.link" target="_blank" class="product-card">
            <img :src="product.image" :alt="product.name" class="product-img">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <span class="cta">View on Amazon →</span>
          </a>
        </div>
        <div class="see-more-row wrap">
          <a :href="'/amazon-finds/' + category.slug" class="see-more-link">See More {{ category.name }} →</a>
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
          name: 'Kitchen Essentials',
          slug: 'kitchen-essentials',
          products: [
            { name: 'Lefton Pull-Down Kitchen Faucet', description: 'Pull-Down Kitchen Faucet with Temperature Display in Fahrenheit, 3 Water Outlet Modes, Matte Black', image: '/assets/products/kitchen-faucet.jpg', link: 'https://www.amazon.com/dp/B0FC1TR2FM' },
            { name: 'Jenaluca Herb Scissors', description: 'Herb Scissors with 5 Stainless Steel Blades, Cleaning Comb & Protective Cover', image: '/assets/products/herb-scissors.jpg', link: 'https://www.amazon.com/Jenaluca-Herb-Scissors-Blades-Cover/dp/B00LRKMK96/' },
            { name: 'Chicken Shredder Claws', description: 'Meat Shredder Tool for Pulled Pork, BBQ, Chicken & Meats — Sturdy & Easy to Use', image: '/assets/products/chicken-shredder.jpg', link: 'https://www.amazon.com/dp/B0FM81W47X' },
            { name: 'Elxis Portable Food Sealer', description: 'Portable Handheld Vacuum Food Sealer, Reusable, Keeps Food Fresh 6x Longer', image: '/assets/products/food-sealer.jpg', link: 'https://www.amazon.com/Elxis-Portable-handheld-Reusable-pressure/dp/B0GSR77ZPL/' },
            { name: 'Silicone Splatter Guard', description: 'Silicone Splatter Guard Lid for Frying Pans, Grease Splash Shield', image: '/assets/products/splatter-guard.jpg', link: 'https://www.amazon.com/dp/B01LVV7MMU' },
            { name: 'Foldable Splatter Screen', description: 'Foldable Silicone Splatter Screen with Handle, Easy to Store', image: '/assets/products/splatter-screen.jpg', link: 'https://www.amazon.com/dp/B0FGW4VVPC' },
            { name: 'Glass Oil & Vinegar Dispensers', description: 'Glass Oil and Vinegar Dispenser Bottle Set for Kitchen Cooking', image: '/assets/products/oil-dispenser-bottles.jpg', link: 'https://www.amazon.com/dp/B0D363RXP1' },
            { name: 'Glass Carafe Set', description: 'Glass Carafe Set with Lids & Chalkboard Labels for Juice, Water & Beverages', image: '/assets/products/glass-carafes.jpg', link: 'https://www.amazon.com/dp/B099RDK2ZV' },
            { name: 'Breville Juice Fountain', description: 'Breville Juice Fountain Compact 700-Watt Centrifugal Juicer', image: '/assets/products/breville-juicer.jpg', link: 'https://www.amazon.com/Breville-BJE200XL-Fountain-700-Watt-Extractor/dp/B000MDHH06/' },
            { name: 'Marble Banana Holder', description: 'Modern Marble Base Banana Holder Stand for Kitchen Counter Decor', image: '/assets/products/banana-holder.jpg', link: 'https://www.amazon.com/dp/B0BPFL9D74' }
          ]
        },
        {
          name: 'Home Essentials',
          slug: 'home-essentials',
          products: [
            { name: 'Tineco Floor ONE S5', description: 'Smart Cordless Wet Dry Vacuum Cleaner and Mop for Hard Floors, Digital Display, Long Run Time', image: '/assets/products/tineco-vacuum.jpg', link: 'https://www.amazon.com/s?k=Tineco+Floor+ONE+S5' },
            { name: 'Purriko Q8 Odor Eliminator', description: 'Portable Odour Removal Box, Smart Air Purifier for Home, Pet & Fridge Odors', image: '/assets/products/purriko-odor-box.jpg', link: 'https://www.amazon.com/dp/B09VZ11WHK' },
            { name: 'Motion Sensor Cabinet Lights', description: 'Wireless LED Under Cabinet Lights with Motion Sensor, 3-Pack, Easy Install', image: '/assets/products/motion-sensor-lights.jpg', link: 'https://www.amazon.com/dp/B0DFM5VNTC' },
            { name: 'Anti-Slip Rug Grippers', description: 'Rug Grippers Anti-Slip Rug Tape for Hardwood Floors, Washable & Reusable', image: '/assets/products/rug-grippers.jpg', link: 'https://www.amazon.com/dp/B08313QV22' },
            { name: 'Air Shim Inflatable Bags', description: 'Inflatable Shim Bags 2-Pack for Leveling Doors, Windows & Furniture', image: '/assets/products/air-shim.jpg', link: 'https://www.amazon.com/dp/B09F34QGB6' },
            { name: 'Smoked Glass Cloche', description: 'Decorative Smoked Glass Cloche with Gold Lion Accent for Home Decor', image: '/assets/products/glass-cloche.jpg', link: 'https://www.amazon.com/dp/B0FKJPDQJ5' },
            { name: 'HOTO Cordless Handheld Vacuum', description: 'Portable Handheld Vacuum Cleaner with 6 Attachments, Powerful Suction for Car & Home', image: '/assets/products/hoto-handheld-vacuum.jpg', link: 'https://www.amazon.com/dp/B0F53HMTX5' }
          ]
        },
        {
          name: 'Beauty Essentials',
          slug: 'beauty-essentials',
          products: [
            { name: 'Beauty Pie C-Wave LED Glove', description: 'Rejuvenating LED Treatment for Hands – Red + Near-Infrared Light Therapy for Age Spots, Pigmentation & Firming', image: '/assets/products/beauty-pie-led-glove.jpg', link: 'https://www.amazon.com/dp/B0FQJYSV7L' },
            { name: 'COMFIER Hand Massager', description: 'Cordless Hand Massager with Heat & Compression for Arthritis, Carpal Tunnel, Wrist & Finger Relief', image: '/assets/products/comfier-hand-massager.jpg', link: 'https://www.amazon.com/dp/B0DLKQWYJ3' },
            { name: 'COMFIER Scalp Massager', description: 'Electric Scalp Massager with Heat for Hair Growth, Stress Relief & Deep Relaxation', image: '/assets/products/comfier-scalp-massager.jpg', link: 'https://www.amazon.com/dp/B0D47C6X5H' },
            { name: 'HairStixies Hair Collectors', description: 'Adhesive Hair Collector Pads for Shower Drain, Prevents Clogging', image: '/assets/products/hairstixies.jpg', link: 'https://www.amazon.com/HairStixies-Prevention-Adhesive-Collector-Catchers/dp/B0D932T37X/' },
            { name: 'Mouthwash Dispenser', description: 'Mouthwash Dispenser Bottle with Cup & Bamboo Base, 350ml, Elegant Bathroom Organizer', image: '/assets/products/mouthwash-dispenser.jpg', link: 'https://www.amazon.com/dp/B0DQGHJDHT' },
            { name: 'WanTMei Spray Brush', description: 'Clean Spray Comb Hair Brush — Dampens Hair for Styling, Eliminates Static', image: '/assets/products/spray-brush.jpg', link: 'https://www.amazon.com/dp/B0GT5B7XQ9' },
            { name: 'UV Toothbrush Sterilizer', description: 'Wall-Mounted UV Toothbrush Sterilizer with LED Display, Kills 99.9% of Bacteria', image: '/assets/products/uv-toothbrush-sterilizer.jpg', link: 'https://www.amazon.com/dp/B0F5PQTYTL' }
          ]
        },
        {
          name: 'Makeup Favs',
          slug: 'makeup-favs',
          products: [
            { name: '30X LED Makeup Mirror', description: 'Lighted Makeup Mirror with 3 Color Modes, 1X/10X/30X Magnification, USB Rechargeable', image: '/assets/products/led-makeup-mirror.jpg', link: 'https://www.amazon.com/dp/B0G4WK3FD7' },
            { name: 'Prime Prometics Powder', description: 'Pressed Powder Compact for Flawless Coverage, Natural Finish, All Skin Types', image: '/assets/products/prime-prometics-powder.jpg', link: 'https://www.amazon.com/dp/B0G3Y86V86' }
          ]
        },
        {
          name: 'Travel Essentials',
          slug: 'travel-essentials',
          products: [
            { name: 'AirTag Holder with Keychain', description: 'Molosleeve AirTag Holder Case with Carabiner Keychain, Soft Silicone Cover', image: '/assets/products/airtag-holder.jpg', link: 'https://www.amazon.com/dp/B0F4K9VYC2' },
            { name: 'Travel Refillable Containers', description: 'TSA-Approved Travel Size Refillable Containers Set for Lotion, Cleanser & Shampoo', image: '/assets/products/travel-containers.jpg', link: 'https://www.amazon.com/dp/B0F8J9WG22' },
            { name: 'Travel Pump Bottles Set', description: 'Refillable Travel Pump Bottles for Facial Cleanser, Body Soap, Conditioner & Cream', image: '/assets/products/travel-pump-bottles.jpg', link: 'https://www.amazon.com/dp/B0BRTQM9NZ' },
            { name: 'RORRY Portable Power Bank', description: 'Compact Power Bank with Built-in USB-C & Lightning Cables, Carabiner Ring, 10000mAh', image: '/assets/products/rorry-power-bank.jpg', link: 'https://www.amazon.com/dp/B0FQP7QGG7' }
          ]
        },
        {
          name: 'Fitness Favorites',
          slug: 'fitness-favorites',
          products: [
            { name: 'WEGYM Soft Dumbbells', description: 'Neoprene Coated Soft Dumbbells Set 2/3/5/8 lbs, Non-Slip Grip for Home Workouts', image: '/assets/products/wegym-dumbbells.jpg', link: 'https://www.amazon.com/dp/B0D2HH8BJH' },
            { name: 'WEGYM Dumbbell Rack', description: 'Compact Dumbbell Storage Rack Stand, Keeps Your Workout Space Tidy & Organized', image: '/assets/products/wegym-dumbbell-rack.jpg', link: 'https://www.amazon.com/dp/B0D1XDBWGM' }
          ]
        },
        {
          name: 'Kids Essentials',
          slug: 'kids-essentials',
          products: [
            { name: 'Fridababy Paci Weaning System', description: 'Dentist-Designed 5-Step Pacifier Weaning System, BPA-Free Silicone, for Babies & Toddlers', image: '/assets/products/fridababy-paci-weaning.jpg', link: 'https://www.amazon.com/dp/B0823DZYQY' },
            { name: 'Dinosaur Kids Smart Camera', description: 'Kids Digital Camera with Dinosaur Case, 8GB SD Card, Dual Lens, Screen Protector & Lanyard', image: '/assets/products/kids-dino-camera.jpg', link: 'https://www.amazon.com/dp/B0D5C8QZD3' },
            { name: 'Baby Monitor', description: 'HD video + audio', image: '/assets/post-3.jpg', link: 'https://amazon.com/s?k=baby+monitor' },
            { name: 'Kids Backpack', description: 'School ready', image: '/assets/post-4.jpg', link: 'https://amazon.com/s?k=kids+backpack' }
          ]
        },
        {
          name: 'Office Essentials',
          slug: 'office-essentials',
          products: [
            { name: 'LED Whiteboard Desk Pad', description: 'Glowing LED Light Whiteboard Desk Pad with Ambient Warm Light, Dry Erase Surface for Notes & To-Dos', image: '/assets/products/led-whiteboard-desk-pad.jpg', link: 'https://www.amazon.com/dp/B0CPDD1D6Z' },
            { name: 'Ergonomic Chair', description: 'Comfortable support', image: '/assets/post-2.jpg', link: 'https://amazon.com/s?k=ergonomic+chair' },
            { name: 'Desk Organizer', description: 'Keep tidy', image: '/assets/post-3.jpg', link: 'https://amazon.com/s?k=desk+organizer' },
            { name: 'USB Hub', description: 'Multi-port connector', image: '/assets/post-4.jpg', link: 'https://amazon.com/s?k=usb+hub' }
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
  margin-bottom: 30px;
}

.category-header h2 {
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  font-weight: 400;
  color: var(--text);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 20px;
}

.see-more-row {
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;
  padding-bottom: 40px;
}

.see-more-link {
  font-size: 13px;
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: opacity 0.3s;
}

.see-more-link:hover {
  opacity: 0.7;
}

.product-card {
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s;
  display: block;
}

.product-card:hover {
  transform: translateY(-6px);
}

.product-img {
  width: 100%;
  height: 260px;
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

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .product-img {
    height: 180px;
  }

  .category-header h2 {
    font-size: 26px;
  }
}
</style>
