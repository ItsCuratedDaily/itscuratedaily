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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-ab3463af><nav class="nav" data-v-ab3463af><div class="nav-left" data-v-ab3463af><button class="hamburger" data-v-ab3463af><span data-v-ab3463af></span><span data-v-ab3463af></span><span data-v-ab3463af></span></button></div><div class="nav-center" data-v-ab3463af><div class="logo" data-v-ab3463af>ItsCuratedDaily</div></div><div class="nav-right" data-v-ab3463af><span class="nav-icon" data-v-ab3463af>\u{1F464}</span><span class="nav-icon" data-v-ab3463af>\u{1F6CD}\uFE0F</span></div></nav><section class="hero" data-v-ab3463af><div class="hero-bg" data-v-ab3463af></div></section><section class="about" id="about" data-v-ab3463af><div class="wrap" data-v-ab3463af><div class="about-grid" data-v-ab3463af><img${ssrRenderAttr("src", _imports_0)} alt="Elen" data-v-ab3463af><div class="about-content" data-v-ab3463af><h2 data-v-ab3463af>Meet Elen Hovsepian</h2><p class="subtitle" data-v-ab3463af>Creator | Curator | Entrepreneur</p><p data-v-ab3463af>Elen is a dedicated content creator with a passion for high-quality, luxury lifestyle content. With over 4,000 engaged followers, she specializes in carefully selected Amazon affiliate products.</p><p data-v-ab3463af>Built on authenticity and trust, ItsCuratedDaily partners with premium brands to create meaningful connections with an audience that values quality and real recommendations.</p><div class="stats" data-v-ab3463af><div data-v-ab3463af><h3 data-v-ab3463af>4,000+</h3><p data-v-ab3463af>Followers</p></div><div data-v-ab3463af><h3 data-v-ab3463af>85%+</h3><p data-v-ab3463af>Engagement</p></div><div data-v-ab3463af><h3 data-v-ab3463af>100%</h3><p data-v-ab3463af>Authentic</p></div></div></div></div></div></section><section class="why" data-v-ab3463af><div class="wrap" data-v-ab3463af><h2 data-v-ab3463af>Why Partner With ItsCuratedDaily?</h2><div class="features" data-v-ab3463af><div class="feature" data-v-ab3463af><div class="num" data-v-ab3463af>01</div><h3 data-v-ab3463af>Authentic Audience</h3><p data-v-ab3463af>Real people with real purchasing power who trust recommendations.</p></div><div class="feature" data-v-ab3463af><div class="num" data-v-ab3463af>02</div><h3 data-v-ab3463af>Premium Aesthetic</h3><p data-v-ab3463af>High-quality content that elevates your brand&#39;s presence.</p></div><div class="feature" data-v-ab3463af><div class="num" data-v-ab3463af>03</div><h3 data-v-ab3463af>Conversion Focus</h3><p data-v-ab3463af>Amazon affiliate expertise with proven conversion rates.</p></div><div class="feature" data-v-ab3463af><div class="num" data-v-ab3463af>04</div><h3 data-v-ab3463af>Full Transparency</h3><p data-v-ab3463af>Real-time analytics and performance tracking for every campaign.</p></div></div></div></section><section class="packages" id="packages" data-v-ab3463af><div class="wrap" data-v-ab3463af><h2 data-v-ab3463af>Partnership Packages</h2><div class="pkg-grid" data-v-ab3463af><div class="pkg" data-v-ab3463af><h3 data-v-ab3463af>Bronze</h3><p class="price" data-v-ab3463af>Starting at $XXX</p><ul data-v-ab3463af><li data-v-ab3463af>1-2 curated posts</li><li data-v-ab3463af>Basic analytics</li><li data-v-ab3463af>30-day campaign</li></ul><button class="btn-sec" data-v-ab3463af>Learn More</button></div><div class="pkg featured" data-v-ab3463af><span class="badge" data-v-ab3463af>Most Popular</span><h3 data-v-ab3463af>Silver</h3><p class="price" data-v-ab3463af>Starting at $XXX</p><ul data-v-ab3463af><li data-v-ab3463af>3-4 curated posts</li><li data-v-ab3463af>Advanced analytics</li><li data-v-ab3463af>30-day campaign</li><li data-v-ab3463af>Priority support</li></ul><button class="btn-pri" data-v-ab3463af>Get Started</button></div><div class="pkg" data-v-ab3463af><h3 data-v-ab3463af>Gold</h3><p class="price" data-v-ab3463af>Starting at $XXX</p><ul data-v-ab3463af><li data-v-ab3463af>5+ curated posts</li><li data-v-ab3463af>Full analytics</li><li data-v-ab3463af>60-day campaign</li><li data-v-ab3463af>Custom strategy</li></ul><button class="btn-sec" data-v-ab3463af>Learn More</button></div></div></div></section><section class="gallery" data-v-ab3463af><div class="wrap" data-v-ab3463af><h2 data-v-ab3463af>Our Content Style</h2><div class="grid" data-v-ab3463af><img${ssrRenderAttr("src", _imports_1)} alt="Post 1" data-v-ab3463af><img${ssrRenderAttr("src", _imports_2)} alt="Post 2" data-v-ab3463af><img${ssrRenderAttr("src", _imports_3)} alt="Post 3" data-v-ab3463af><img${ssrRenderAttr("src", _imports_4)} alt="Post 4" data-v-ab3463af></div></div></section><section class="cta" data-v-ab3463af><h2 data-v-ab3463af>Ready to Elevate Your Brand?</h2><p data-v-ab3463af>Partner with ItsCuratedDaily and reach thousands of engaged followers</p><button data-v-ab3463af>Start Your Campaign</button></section><section class="contact" id="contact" data-v-ab3463af><div class="wrap" data-v-ab3463af><h2 data-v-ab3463af>Get In Touch</h2><p data-v-ab3463af>Ready to work with us? Let&#39;s discuss your campaign.</p><div class="contact-btns" data-v-ab3463af><a href="mailto:contact@itscurateddaily.com" class="btn-pri" data-v-ab3463af>Email Us</a><a href="https://instagram.com/itscurateddaily" target="_blank" class="btn-sec" data-v-ab3463af>DM on Instagram</a></div></div></section><footer data-v-ab3463af><div class="wrap" data-v-ab3463af><div class="footer-grid" data-v-ab3463af><div data-v-ab3463af><h4 data-v-ab3463af>ItsCuratedDaily</h4><p data-v-ab3463af>Premium social media content creation.</p></div><div data-v-ab3463af><h4 data-v-ab3463af>Links</h4><ul data-v-ab3463af><li data-v-ab3463af><a href="#about" data-v-ab3463af>About</a></li><li data-v-ab3463af><a href="#packages" data-v-ab3463af>Packages</a></li><li data-v-ab3463af><a href="#contact" data-v-ab3463af>Contact</a></li></ul></div><div data-v-ab3463af><h4 data-v-ab3463af>Follow</h4><ul data-v-ab3463af><li data-v-ab3463af><a href="https://instagram.com/itscurateddaily" target="_blank" data-v-ab3463af>Instagram</a></li></ul></div></div><p class="copy" data-v-ab3463af>\xA9 2026 ItsCuratedDaily. All rights reserved.</p></div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ab3463af"]]);

export { index as default };
//# sourceMappingURL=index-BxEHpqQp.mjs.map
