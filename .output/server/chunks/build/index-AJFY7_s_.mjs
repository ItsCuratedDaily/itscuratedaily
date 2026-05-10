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
  methods: {
    goTo(id) {
      var _a;
      (_a = (void 0).getElementById(id)) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-fde692a6><nav class="nav" data-v-fde692a6><div class="nav-left" data-v-fde692a6><a href="#about" class="nav-link" data-v-fde692a6>About</a><a href="#packages" class="nav-link" data-v-fde692a6>Packages</a><a href="#contact" class="nav-link" data-v-fde692a6>Contact</a></div><div class="nav-center" data-v-fde692a6><div class="logo" data-v-fde692a6>ItsCuratedDaily</div></div><div class="nav-right" data-v-fde692a6></div></nav><section class="hero" data-v-fde692a6><div class="hero-bg" data-v-fde692a6></div></section><section class="about" id="about" data-v-fde692a6><div class="wrap" data-v-fde692a6><div class="about-grid" data-v-fde692a6><img${ssrRenderAttr("src", _imports_0)} alt="Elen" data-v-fde692a6><div class="about-content" data-v-fde692a6><h2 data-v-fde692a6>Meet Elen Hovsepian</h2><p class="subtitle" data-v-fde692a6>Creator | Curator | Entrepreneur</p><p data-v-fde692a6>Elen is a dedicated content creator with a passion for high-quality, luxury lifestyle content. With over 4,000 engaged followers, she specializes in carefully selected Amazon affiliate products.</p><p data-v-fde692a6>Built on authenticity and trust, ItsCuratedDaily partners with premium brands to create meaningful connections with an audience that values quality and real recommendations.</p><div class="stats" data-v-fde692a6><div data-v-fde692a6><h3 data-v-fde692a6>4,000+</h3><p data-v-fde692a6>Followers</p></div><div data-v-fde692a6><h3 data-v-fde692a6>85%+</h3><p data-v-fde692a6>Engagement</p></div><div data-v-fde692a6><h3 data-v-fde692a6>100%</h3><p data-v-fde692a6>Authentic</p></div></div></div></div></div></section><section class="why" data-v-fde692a6><div class="wrap" data-v-fde692a6><h2 data-v-fde692a6>Why Partner With ItsCuratedDaily?</h2><div class="features" data-v-fde692a6><div class="feature" data-v-fde692a6><div class="num" data-v-fde692a6>01</div><h3 data-v-fde692a6>Authentic Audience</h3><p data-v-fde692a6>Real people with real purchasing power who trust recommendations.</p></div><div class="feature" data-v-fde692a6><div class="num" data-v-fde692a6>02</div><h3 data-v-fde692a6>Premium Aesthetic</h3><p data-v-fde692a6>High-quality content that elevates your brand&#39;s presence.</p></div><div class="feature" data-v-fde692a6><div class="num" data-v-fde692a6>03</div><h3 data-v-fde692a6>Conversion Focus</h3><p data-v-fde692a6>Amazon affiliate expertise with proven conversion rates.</p></div><div class="feature" data-v-fde692a6><div class="num" data-v-fde692a6>04</div><h3 data-v-fde692a6>Full Transparency</h3><p data-v-fde692a6>Real-time analytics and performance tracking for every campaign.</p></div></div></div></section><section class="packages" id="packages" data-v-fde692a6><div class="wrap" data-v-fde692a6><h2 data-v-fde692a6>Partnership Packages</h2><div class="pkg-grid" data-v-fde692a6><div class="pkg" data-v-fde692a6><h3 data-v-fde692a6>Bronze</h3><p class="price" data-v-fde692a6>Starting at $XXX</p><ul data-v-fde692a6><li data-v-fde692a6>1-2 curated posts</li><li data-v-fde692a6>Basic analytics</li><li data-v-fde692a6>30-day campaign</li></ul><button class="btn-sec" data-v-fde692a6>Learn More</button></div><div class="pkg featured" data-v-fde692a6><span class="badge" data-v-fde692a6>Most Popular</span><h3 data-v-fde692a6>Silver</h3><p class="price" data-v-fde692a6>Starting at $XXX</p><ul data-v-fde692a6><li data-v-fde692a6>3-4 curated posts</li><li data-v-fde692a6>Advanced analytics</li><li data-v-fde692a6>30-day campaign</li><li data-v-fde692a6>Priority support</li></ul><button class="btn-pri" data-v-fde692a6>Get Started</button></div><div class="pkg" data-v-fde692a6><h3 data-v-fde692a6>Gold</h3><p class="price" data-v-fde692a6>Starting at $XXX</p><ul data-v-fde692a6><li data-v-fde692a6>5+ curated posts</li><li data-v-fde692a6>Full analytics</li><li data-v-fde692a6>60-day campaign</li><li data-v-fde692a6>Custom strategy</li></ul><button class="btn-sec" data-v-fde692a6>Learn More</button></div></div></div></section><section class="gallery" data-v-fde692a6><div class="wrap" data-v-fde692a6><h2 data-v-fde692a6>Our Content Style</h2><div class="grid" data-v-fde692a6><img${ssrRenderAttr("src", _imports_1)} alt="Post 1" data-v-fde692a6><img${ssrRenderAttr("src", _imports_2)} alt="Post 2" data-v-fde692a6><img${ssrRenderAttr("src", _imports_3)} alt="Post 3" data-v-fde692a6><img${ssrRenderAttr("src", _imports_4)} alt="Post 4" data-v-fde692a6></div></div></section><section class="cta" data-v-fde692a6><h2 data-v-fde692a6>Ready to Elevate Your Brand?</h2><p data-v-fde692a6>Partner with ItsCuratedDaily and reach thousands of engaged followers</p><button data-v-fde692a6>Start Your Campaign</button></section><section class="contact" id="contact" data-v-fde692a6><div class="wrap" data-v-fde692a6><h2 data-v-fde692a6>Get In Touch</h2><p data-v-fde692a6>Ready to work with us? Let&#39;s discuss your campaign.</p><div class="contact-btns" data-v-fde692a6><a href="mailto:contact@itscurateddaily.com" class="btn-pri" data-v-fde692a6>Email Us</a><a href="https://instagram.com/itscurateddaily" target="_blank" class="btn-sec" data-v-fde692a6>DM on Instagram</a></div></div></section><footer data-v-fde692a6><div class="wrap" data-v-fde692a6><div class="footer-grid" data-v-fde692a6><div data-v-fde692a6><h4 data-v-fde692a6>ItsCuratedDaily</h4><p data-v-fde692a6>Premium social media content creation.</p></div><div data-v-fde692a6><h4 data-v-fde692a6>Links</h4><ul data-v-fde692a6><li data-v-fde692a6><a href="#about" data-v-fde692a6>About</a></li><li data-v-fde692a6><a href="#packages" data-v-fde692a6>Packages</a></li><li data-v-fde692a6><a href="#contact" data-v-fde692a6>Contact</a></li></ul></div><div data-v-fde692a6><h4 data-v-fde692a6>Follow</h4><ul data-v-fde692a6><li data-v-fde692a6><a href="https://instagram.com/itscurateddaily" target="_blank" data-v-fde692a6>Instagram</a></li></ul></div></div><p class="copy" data-v-fde692a6>\xA9 2026 ItsCuratedDaily. All rights reserved.</p></div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-fde692a6"]]);

export { index as default };
//# sourceMappingURL=index-AJFY7_s_.mjs.map
