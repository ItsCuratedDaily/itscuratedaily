import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _imports_0 = publicAssetsURL("/assets/profile.jpg");
const _imports_1 = publicAssetsURL("/assets/post-1.jpg");
const _imports_2 = publicAssetsURL("/assets/post-2.jpg");
const _imports_3 = publicAssetsURL("/assets/post-3.jpg");
const _imports_4 = publicAssetsURL("/assets/post-4.jpg");
const _sfc_main = {
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    goTo(id) {
      var _a;
      (_a = (void 0).getElementById(id)) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-bdf9e51f><nav class="nav" data-v-bdf9e51f><div class="nav-left" data-v-bdf9e51f><button class="hamburger" data-v-bdf9e51f><span data-v-bdf9e51f></span><span data-v-bdf9e51f></span><span data-v-bdf9e51f></span></button></div><div class="nav-center" data-v-bdf9e51f><a href="/" class="logo" data-v-bdf9e51f>ItsCuratedDaily</a></div><div class="nav-right" data-v-bdf9e51f><span class="nav-icon" data-v-bdf9e51f>\u{1F464}</span><span class="nav-icon" data-v-bdf9e51f>\u{1F6CD}\uFE0F</span></div></nav><section class="hero" data-v-bdf9e51f><div class="hero-bg" data-v-bdf9e51f></div></section><section class="about" id="about" data-v-bdf9e51f><div class="wrap" data-v-bdf9e51f><div class="about-grid" data-v-bdf9e51f><img${ssrRenderAttr("src", _imports_0)} alt="Elen" data-v-bdf9e51f><div class="about-content" data-v-bdf9e51f><h2 data-v-bdf9e51f>Meet Elen Hovsepian</h2><p class="subtitle" data-v-bdf9e51f>Creator | Curator | Entrepreneur</p><p data-v-bdf9e51f>Elen is a dedicated content creator with a passion for high-quality, luxury lifestyle content. With over 4,000 engaged followers, she specializes in carefully selected Amazon affiliate products.</p><p data-v-bdf9e51f>Built on authenticity and trust, ItsCuratedDaily partners with premium brands to create meaningful connections with an audience that values quality and real recommendations.</p><div class="stats" data-v-bdf9e51f><div data-v-bdf9e51f><h3 data-v-bdf9e51f>4,000+</h3><p data-v-bdf9e51f>Followers</p></div><div data-v-bdf9e51f><h3 data-v-bdf9e51f>85%+</h3><p data-v-bdf9e51f>Engagement</p></div><div data-v-bdf9e51f><h3 data-v-bdf9e51f>100%</h3><p data-v-bdf9e51f>Authentic</p></div></div></div></div></div></section><section class="why" data-v-bdf9e51f><div class="wrap" data-v-bdf9e51f><h2 data-v-bdf9e51f>Why Partner With ItsCuratedDaily?</h2><div class="features" data-v-bdf9e51f><div class="feature" data-v-bdf9e51f><div class="num" data-v-bdf9e51f>01</div><h3 data-v-bdf9e51f>Authentic Audience</h3><p data-v-bdf9e51f>Real people with real purchasing power who trust recommendations.</p></div><div class="feature" data-v-bdf9e51f><div class="num" data-v-bdf9e51f>02</div><h3 data-v-bdf9e51f>Premium Aesthetic</h3><p data-v-bdf9e51f>High-quality content that elevates your brand&#39;s presence.</p></div><div class="feature" data-v-bdf9e51f><div class="num" data-v-bdf9e51f>03</div><h3 data-v-bdf9e51f>Conversion Focus</h3><p data-v-bdf9e51f>Amazon affiliate expertise with proven conversion rates.</p></div><div class="feature" data-v-bdf9e51f><div class="num" data-v-bdf9e51f>04</div><h3 data-v-bdf9e51f>Full Transparency</h3><p data-v-bdf9e51f>Real-time analytics and performance tracking for every campaign.</p></div></div></div></section><section class="packages" id="packages" data-v-bdf9e51f><div class="wrap" data-v-bdf9e51f><h2 data-v-bdf9e51f>Partnership Packages</h2><div class="pkg-grid" data-v-bdf9e51f><div class="pkg" data-v-bdf9e51f><h3 data-v-bdf9e51f>Bronze</h3><p class="price" data-v-bdf9e51f>Starting at $XXX</p><ul data-v-bdf9e51f><li data-v-bdf9e51f>1-2 curated posts</li><li data-v-bdf9e51f>Basic analytics</li><li data-v-bdf9e51f>30-day campaign</li></ul><button class="btn-sec" data-v-bdf9e51f>Learn More</button></div><div class="pkg featured" data-v-bdf9e51f><span class="badge" data-v-bdf9e51f>Most Popular</span><h3 data-v-bdf9e51f>Silver</h3><p class="price" data-v-bdf9e51f>Starting at $XXX</p><ul data-v-bdf9e51f><li data-v-bdf9e51f>3-4 curated posts</li><li data-v-bdf9e51f>Advanced analytics</li><li data-v-bdf9e51f>30-day campaign</li><li data-v-bdf9e51f>Priority support</li></ul><button class="btn-pri" data-v-bdf9e51f>Get Started</button></div><div class="pkg" data-v-bdf9e51f><h3 data-v-bdf9e51f>Gold</h3><p class="price" data-v-bdf9e51f>Starting at $XXX</p><ul data-v-bdf9e51f><li data-v-bdf9e51f>5+ curated posts</li><li data-v-bdf9e51f>Full analytics</li><li data-v-bdf9e51f>60-day campaign</li><li data-v-bdf9e51f>Custom strategy</li></ul><button class="btn-sec" data-v-bdf9e51f>Learn More</button></div></div></div></section><section class="gallery" data-v-bdf9e51f><div class="wrap" data-v-bdf9e51f><h2 data-v-bdf9e51f>Our Content Style</h2><div class="grid" data-v-bdf9e51f><img${ssrRenderAttr("src", _imports_1)} alt="Post 1" data-v-bdf9e51f><img${ssrRenderAttr("src", _imports_2)} alt="Post 2" data-v-bdf9e51f><img${ssrRenderAttr("src", _imports_3)} alt="Post 3" data-v-bdf9e51f><img${ssrRenderAttr("src", _imports_4)} alt="Post 4" data-v-bdf9e51f></div></div></section><section class="cta" data-v-bdf9e51f><h2 data-v-bdf9e51f>Ready to Elevate Your Brand?</h2><p data-v-bdf9e51f>Partner with ItsCuratedDaily and reach thousands of engaged followers</p><button data-v-bdf9e51f>Start Your Campaign</button></section><section class="contact" id="contact" data-v-bdf9e51f><div class="wrap" data-v-bdf9e51f><h2 data-v-bdf9e51f>Get In Touch</h2><p data-v-bdf9e51f>Ready to work with us? Let&#39;s discuss your campaign.</p><div class="contact-btns" data-v-bdf9e51f><a href="mailto:contact@itscurateddaily.com" class="btn-pri" data-v-bdf9e51f>Email Us</a><a href="https://instagram.com/itscurateddaily" target="_blank" class="btn-sec" data-v-bdf9e51f>DM on Instagram</a></div></div></section><footer data-v-bdf9e51f><div class="wrap" data-v-bdf9e51f><div class="footer-grid" data-v-bdf9e51f><div data-v-bdf9e51f><h4 data-v-bdf9e51f>ItsCuratedDaily</h4><p data-v-bdf9e51f>Premium social media content creation.</p></div><div data-v-bdf9e51f><h4 data-v-bdf9e51f>Links</h4><ul data-v-bdf9e51f><li data-v-bdf9e51f><a href="#about" data-v-bdf9e51f>About</a></li><li data-v-bdf9e51f><a href="#packages" data-v-bdf9e51f>Packages</a></li><li data-v-bdf9e51f><a href="#contact" data-v-bdf9e51f>Contact</a></li></ul></div><div data-v-bdf9e51f><h4 data-v-bdf9e51f>Follow</h4><ul data-v-bdf9e51f><li data-v-bdf9e51f><a href="https://instagram.com/itscurateddaily" target="_blank" data-v-bdf9e51f>Instagram</a></li></ul></div></div><p class="copy" data-v-bdf9e51f>\xA9 2026 ItsCuratedDaily. All rights reserved.</p></div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-bdf9e51f"]]);

export { index as default };
//# sourceMappingURL=index-BMmZ_VnR.mjs.map
