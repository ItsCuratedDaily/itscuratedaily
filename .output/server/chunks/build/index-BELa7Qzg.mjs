import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = publicAssetsURL("/assets/post-1.jpg");
const _imports_1 = publicAssetsURL("/assets/post-2.jpg");
const _imports_2 = publicAssetsURL("/assets/post-3.jpg");
const _imports_3 = publicAssetsURL("/assets/post-4.jpg");
const _imports_4 = publicAssetsURL("/assets/profile.jpg");
const _sfc_main = {
  data() {
    return {
      menuOpen: false
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-866b55cf><nav class="nav" data-v-866b55cf><div class="nav-left" data-v-866b55cf><button class="${ssrRenderClass([{ active: $data.menuOpen }, "hamburger"])}" data-v-866b55cf><span data-v-866b55cf></span><span data-v-866b55cf></span><span data-v-866b55cf></span></button></div><div class="nav-center" data-v-866b55cf><a href="/" class="logo" data-v-866b55cf>ItsCuratedDaily</a></div><div class="nav-right" data-v-866b55cf><span class="nav-icon" data-v-866b55cf>\u{1F464}</span><span class="nav-icon" data-v-866b55cf>\u{1F6CD}\uFE0F</span></div></nav>`);
  if ($data.menuOpen) {
    _push(`<div class="mobile-menu" data-v-866b55cf><a href="#why" data-v-866b55cf>Why Collaborate</a><a href="#collab" data-v-866b55cf>Collaborations</a><a href="#amazon" data-v-866b55cf>Amazon Finds</a><a href="#target" data-v-866b55cf>Target Finds</a><a href="#blog" data-v-866b55cf>From my Blog</a><a href="#about" data-v-866b55cf>Meet Elen</a><a href="#recent" data-v-866b55cf>Recent Posts</a></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<section class="hero" data-v-866b55cf><div class="hero-bg" data-v-866b55cf></div></section><section class="section why-bg" id="why" data-v-866b55cf><div class="wrap" data-v-866b55cf><h2 data-v-866b55cf>Why Collaborate With Us?</h2><p class="section-desc" data-v-866b55cf>Partner with ItsCuratedDaily for authentic, premium content</p><div class="features-grid" data-v-866b55cf><div class="feature-card" data-v-866b55cf><div class="feature-num" data-v-866b55cf>01</div><h3 data-v-866b55cf>Authentic Audience</h3><p data-v-866b55cf>Real people with real purchasing power who trust recommendations.</p></div><div class="feature-card" data-v-866b55cf><div class="feature-num" data-v-866b55cf>02</div><h3 data-v-866b55cf>Premium Aesthetic</h3><p data-v-866b55cf>High-quality, luxury content that elevates your brand&#39;s presence.</p></div><div class="feature-card" data-v-866b55cf><div class="feature-num" data-v-866b55cf>03</div><h3 data-v-866b55cf>Conversion Focus</h3><p data-v-866b55cf>Amazon affiliate expertise with proven conversion rates.</p></div><div class="feature-card" data-v-866b55cf><div class="feature-num" data-v-866b55cf>04</div><h3 data-v-866b55cf>Full Transparency</h3><p data-v-866b55cf>Real-time analytics and performance tracking for every campaign.</p></div></div></div></section><section class="section collab-bg" id="collab" data-v-866b55cf><div class="wrap" data-v-866b55cf><h2 data-v-866b55cf>Recent Collaborations</h2><p class="section-desc" data-v-866b55cf>Featured brand partnerships</p><div class="grid" data-v-866b55cf><img${ssrRenderAttr("src", _imports_0)} alt="Collaboration 1" data-v-866b55cf><img${ssrRenderAttr("src", _imports_1)} alt="Collaboration 2" data-v-866b55cf><img${ssrRenderAttr("src", _imports_2)} alt="Collaboration 3" data-v-866b55cf><img${ssrRenderAttr("src", _imports_3)} alt="Collaboration 4" data-v-866b55cf></div></div></section><section class="section amazon-bg" id="amazon" data-v-866b55cf><div class="wrap" data-v-866b55cf><h2 data-v-866b55cf>Amazon Finds</h2><p class="section-desc" data-v-866b55cf>Carefully curated products we love</p><div class="grid" data-v-866b55cf><img${ssrRenderAttr("src", _imports_0)} alt="Amazon Find 1" data-v-866b55cf><img${ssrRenderAttr("src", _imports_1)} alt="Amazon Find 2" data-v-866b55cf><img${ssrRenderAttr("src", _imports_2)} alt="Amazon Find 3" data-v-866b55cf><img${ssrRenderAttr("src", _imports_3)} alt="Amazon Find 4" data-v-866b55cf></div></div></section><section class="section target-bg" id="target" data-v-866b55cf><div class="wrap" data-v-866b55cf><h2 data-v-866b55cf>Target Finds</h2><p class="section-desc" data-v-866b55cf>Trending picks from Target</p><div class="grid" data-v-866b55cf><img${ssrRenderAttr("src", _imports_0)} alt="Target Find 1" data-v-866b55cf><img${ssrRenderAttr("src", _imports_1)} alt="Target Find 2" data-v-866b55cf><img${ssrRenderAttr("src", _imports_2)} alt="Target Find 3" data-v-866b55cf><img${ssrRenderAttr("src", _imports_3)} alt="Target Find 4" data-v-866b55cf></div></div></section><section class="section blog-bg" id="blog" data-v-866b55cf><div class="wrap" data-v-866b55cf><h2 data-v-866b55cf>From my Blog</h2><p class="section-desc" data-v-866b55cf>Stories, insights, and inspiration</p><div class="grid" data-v-866b55cf><img${ssrRenderAttr("src", _imports_0)} alt="Blog 1" data-v-866b55cf><img${ssrRenderAttr("src", _imports_1)} alt="Blog 2" data-v-866b55cf><img${ssrRenderAttr("src", _imports_2)} alt="Blog 3" data-v-866b55cf><img${ssrRenderAttr("src", _imports_3)} alt="Blog 4" data-v-866b55cf></div></div></section><section class="section meet-bg" id="about" data-v-866b55cf><div class="wrap" data-v-866b55cf><div class="about-grid" data-v-866b55cf><img${ssrRenderAttr("src", _imports_4)} alt="Elen" data-v-866b55cf><div class="about-content" data-v-866b55cf><h2 data-v-866b55cf>Meet Elen</h2><p class="subtitle" data-v-866b55cf>Creator | Curator | Entrepreneur</p><p data-v-866b55cf>Elen is a dedicated content creator with a passion for high-quality, luxury lifestyle content. With over 4,000 engaged followers, she specializes in carefully selected Amazon affiliate products.</p><p data-v-866b55cf>Built on authenticity and trust, ItsCuratedDaily partners with premium brands to create meaningful connections with an audience that values quality and real recommendations.</p><div class="stats" data-v-866b55cf><div data-v-866b55cf><h3 data-v-866b55cf>4,000+</h3><p data-v-866b55cf>Followers</p></div><div data-v-866b55cf><h3 data-v-866b55cf>85%+</h3><p data-v-866b55cf>Engagement</p></div><div data-v-866b55cf><h3 data-v-866b55cf>100%</h3><p data-v-866b55cf>Authentic</p></div></div></div></div></div></section><section class="section recent-bg" id="recent" data-v-866b55cf><div class="wrap" data-v-866b55cf><h2 data-v-866b55cf>Recent Posts</h2><p class="section-desc" data-v-866b55cf>Latest updates from ItsCuratedDaily</p><div class="grid" data-v-866b55cf><img${ssrRenderAttr("src", _imports_0)} alt="Recent 1" data-v-866b55cf><img${ssrRenderAttr("src", _imports_1)} alt="Recent 2" data-v-866b55cf><img${ssrRenderAttr("src", _imports_2)} alt="Recent 3" data-v-866b55cf><img${ssrRenderAttr("src", _imports_3)} alt="Recent 4" data-v-866b55cf></div></div></section><footer class="footer-grid" data-v-866b55cf><div class="footer-container" data-v-866b55cf><div class="footer-logo" data-v-866b55cf><h2 data-v-866b55cf>ItsCuratedDaily</h2></div><div class="footer-grid-cols" data-v-866b55cf><div class="footer-col" data-v-866b55cf><h3 data-v-866b55cf>READ</h3><ul data-v-866b55cf><li data-v-866b55cf><a href="#blog" data-v-866b55cf>From My Blog</a></li><li data-v-866b55cf><a href="#recent" data-v-866b55cf>Recent Posts</a></li><li data-v-866b55cf><a href="#about" data-v-866b55cf>About</a></li></ul></div><div class="footer-col" data-v-866b55cf><h3 data-v-866b55cf>SHOP</h3><ul data-v-866b55cf><li data-v-866b55cf><a href="#amazon" data-v-866b55cf>Amazon Finds</a></li><li data-v-866b55cf><a href="#target" data-v-866b55cf>Target Finds</a></li><li data-v-866b55cf><a href="#collab" data-v-866b55cf>Collaborations</a></li></ul></div><div class="footer-col" data-v-866b55cf><h3 data-v-866b55cf>SUPPORT</h3><ul data-v-866b55cf><li data-v-866b55cf><a href="#contact" data-v-866b55cf>Contact</a></li><li data-v-866b55cf><a href="#faq" data-v-866b55cf>Advertise With Us</a></li><li data-v-866b55cf><a href="#contact" data-v-866b55cf>Press Kit</a></li></ul></div><div class="footer-col" data-v-866b55cf><h3 data-v-866b55cf>EXPLORE</h3><ul data-v-866b55cf><li data-v-866b55cf><a href="#about" data-v-866b55cf>Meet Elen</a></li><li data-v-866b55cf><a href="#why" data-v-866b55cf>Why Collaborate</a></li><li data-v-866b55cf><a href="https://instagram.com/itscurateddaily" target="_blank" data-v-866b55cf>Instagram</a></li></ul></div></div><div class="footer-bottom" data-v-866b55cf><div class="footer-socials" data-v-866b55cf><a href="https://instagram.com/itscurateddaily" target="_blank" class="social-icon" data-v-866b55cf>\u{1F4F7}</a><a href="#" target="_blank" class="social-icon" data-v-866b55cf>\u{1F4CC}</a></div><p class="footer-copy" data-v-866b55cf>\xA9 2026 <a href="/" data-v-866b55cf>ItsCuratedDaily</a></p><p class="footer-credit" data-v-866b55cf>Site by <a href="#" data-v-866b55cf>Design</a></p></div></div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-866b55cf"]]);

export { index as default };
//# sourceMappingURL=index-BELa7Qzg.mjs.map
