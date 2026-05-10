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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-87d9ff61><nav class="nav" data-v-87d9ff61><div class="nav-left" data-v-87d9ff61><button class="${ssrRenderClass([{ active: $data.menuOpen }, "hamburger"])}" data-v-87d9ff61><span data-v-87d9ff61></span><span data-v-87d9ff61></span><span data-v-87d9ff61></span></button></div><div class="nav-center" data-v-87d9ff61><a href="/" class="logo" data-v-87d9ff61>ItsCuratedDaily</a></div><div class="nav-right" data-v-87d9ff61><span class="nav-icon" data-v-87d9ff61>\u{1F464}</span><span class="nav-icon" data-v-87d9ff61>\u{1F6CD}\uFE0F</span></div></nav>`);
  if ($data.menuOpen) {
    _push(`<div class="mobile-menu" data-v-87d9ff61><a href="#why" data-v-87d9ff61>Why Collaborate</a><a href="#collab" data-v-87d9ff61>Collaborations</a><a href="#amazon" data-v-87d9ff61>Amazon Finds</a><a href="#target" data-v-87d9ff61>Target Finds</a><a href="#blog" data-v-87d9ff61>From my Blog</a><a href="#about" data-v-87d9ff61>Meet Elen</a><a href="#recent" data-v-87d9ff61>Recent Posts</a></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<section class="hero" data-v-87d9ff61><div class="hero-bg" data-v-87d9ff61></div></section><section class="section why-bg" id="why" data-v-87d9ff61><div class="wrap" data-v-87d9ff61><h2 data-v-87d9ff61>Why Collaborate With Us?</h2><p class="section-desc" data-v-87d9ff61>Partner with ItsCuratedDaily for authentic, premium content</p><div class="features-grid" data-v-87d9ff61><div class="feature-card" data-v-87d9ff61><div class="feature-num" data-v-87d9ff61>01</div><h3 data-v-87d9ff61>Authentic Audience</h3><p data-v-87d9ff61>Real people with real purchasing power who trust recommendations.</p></div><div class="feature-card" data-v-87d9ff61><div class="feature-num" data-v-87d9ff61>02</div><h3 data-v-87d9ff61>Premium Aesthetic</h3><p data-v-87d9ff61>High-quality, luxury content that elevates your brand&#39;s presence.</p></div><div class="feature-card" data-v-87d9ff61><div class="feature-num" data-v-87d9ff61>03</div><h3 data-v-87d9ff61>Conversion Focus</h3><p data-v-87d9ff61>Amazon affiliate expertise with proven conversion rates.</p></div><div class="feature-card" data-v-87d9ff61><div class="feature-num" data-v-87d9ff61>04</div><h3 data-v-87d9ff61>Full Transparency</h3><p data-v-87d9ff61>Real-time analytics and performance tracking for every campaign.</p></div></div></div></section><section class="section collab-bg" id="collab" data-v-87d9ff61><div class="wrap" data-v-87d9ff61><h2 data-v-87d9ff61>Recent Collaborations</h2><p class="section-desc" data-v-87d9ff61>Featured brand partnerships</p><div class="grid" data-v-87d9ff61><img${ssrRenderAttr("src", _imports_0)} alt="Collaboration 1" data-v-87d9ff61><img${ssrRenderAttr("src", _imports_1)} alt="Collaboration 2" data-v-87d9ff61><img${ssrRenderAttr("src", _imports_2)} alt="Collaboration 3" data-v-87d9ff61><img${ssrRenderAttr("src", _imports_3)} alt="Collaboration 4" data-v-87d9ff61></div></div></section><section class="section amazon-bg" id="amazon" data-v-87d9ff61><div class="wrap" data-v-87d9ff61><h2 data-v-87d9ff61>Amazon Finds</h2><p class="section-desc" data-v-87d9ff61>Carefully curated products we love</p><div class="grid" data-v-87d9ff61><img${ssrRenderAttr("src", _imports_0)} alt="Amazon Find 1" data-v-87d9ff61><img${ssrRenderAttr("src", _imports_1)} alt="Amazon Find 2" data-v-87d9ff61><img${ssrRenderAttr("src", _imports_2)} alt="Amazon Find 3" data-v-87d9ff61><img${ssrRenderAttr("src", _imports_3)} alt="Amazon Find 4" data-v-87d9ff61></div></div></section><section class="section target-bg" id="target" data-v-87d9ff61><div class="wrap" data-v-87d9ff61><h2 data-v-87d9ff61>Target Finds</h2><p class="section-desc" data-v-87d9ff61>Trending picks from Target</p><div class="grid" data-v-87d9ff61><img${ssrRenderAttr("src", _imports_0)} alt="Target Find 1" data-v-87d9ff61><img${ssrRenderAttr("src", _imports_1)} alt="Target Find 2" data-v-87d9ff61><img${ssrRenderAttr("src", _imports_2)} alt="Target Find 3" data-v-87d9ff61><img${ssrRenderAttr("src", _imports_3)} alt="Target Find 4" data-v-87d9ff61></div></div></section><section class="section blog-bg" id="blog" data-v-87d9ff61><div class="wrap" data-v-87d9ff61><h2 data-v-87d9ff61>From my Blog</h2><p class="section-desc" data-v-87d9ff61>Stories, insights, and inspiration</p><div class="grid" data-v-87d9ff61><img${ssrRenderAttr("src", _imports_0)} alt="Blog 1" data-v-87d9ff61><img${ssrRenderAttr("src", _imports_1)} alt="Blog 2" data-v-87d9ff61><img${ssrRenderAttr("src", _imports_2)} alt="Blog 3" data-v-87d9ff61><img${ssrRenderAttr("src", _imports_3)} alt="Blog 4" data-v-87d9ff61></div></div></section><section class="section meet-bg" id="about" data-v-87d9ff61><div class="wrap" data-v-87d9ff61><div class="about-grid" data-v-87d9ff61><img${ssrRenderAttr("src", _imports_4)} alt="Elen" data-v-87d9ff61><div class="about-content" data-v-87d9ff61><h2 data-v-87d9ff61>Meet Elen</h2><p class="subtitle" data-v-87d9ff61>Creator | Curator | Entrepreneur</p><p data-v-87d9ff61>Elen is a dedicated content creator with a passion for high-quality, luxury lifestyle content. With over 4,000 engaged followers, she specializes in carefully selected Amazon affiliate products.</p><p data-v-87d9ff61>Built on authenticity and trust, ItsCuratedDaily partners with premium brands to create meaningful connections with an audience that values quality and real recommendations.</p><div class="stats" data-v-87d9ff61><div data-v-87d9ff61><h3 data-v-87d9ff61>4,000+</h3><p data-v-87d9ff61>Followers</p></div><div data-v-87d9ff61><h3 data-v-87d9ff61>85%+</h3><p data-v-87d9ff61>Engagement</p></div><div data-v-87d9ff61><h3 data-v-87d9ff61>100%</h3><p data-v-87d9ff61>Authentic</p></div></div></div></div></div></section><section class="section recent-bg" id="recent" data-v-87d9ff61><div class="wrap" data-v-87d9ff61><h2 data-v-87d9ff61>Recent Posts</h2><p class="section-desc" data-v-87d9ff61>Latest updates from ItsCuratedDaily</p><div class="grid" data-v-87d9ff61><img${ssrRenderAttr("src", _imports_0)} alt="Recent 1" data-v-87d9ff61><img${ssrRenderAttr("src", _imports_1)} alt="Recent 2" data-v-87d9ff61><img${ssrRenderAttr("src", _imports_2)} alt="Recent 3" data-v-87d9ff61><img${ssrRenderAttr("src", _imports_3)} alt="Recent 4" data-v-87d9ff61></div></div></section><footer class="footer-new" data-v-87d9ff61><div class="footer-content" data-v-87d9ff61><div class="footer-image" data-v-87d9ff61><img${ssrRenderAttr("src", _imports_4)} alt="Elen Hovsepian" data-v-87d9ff61></div><div class="footer-columns" data-v-87d9ff61><div class="footer-column" data-v-87d9ff61><h3 data-v-87d9ff61>About</h3><ul data-v-87d9ff61><li data-v-87d9ff61><a href="#about" data-v-87d9ff61>Our Story</a></li><li data-v-87d9ff61><a href="#collab" data-v-87d9ff61>Collaborations</a></li><li data-v-87d9ff61><a href="#about" data-v-87d9ff61>Contact Us</a></li></ul></div><div class="footer-column" data-v-87d9ff61><h3 data-v-87d9ff61>Explore</h3><ul data-v-87d9ff61><li data-v-87d9ff61><a href="#why" data-v-87d9ff61>Why Collaborate</a></li><li data-v-87d9ff61><a href="#amazon" data-v-87d9ff61>Amazon Finds</a></li><li data-v-87d9ff61><a href="#target" data-v-87d9ff61>Target Finds</a></li><li data-v-87d9ff61><a href="#blog" data-v-87d9ff61>From my Blog</a></li></ul></div><div class="footer-column" data-v-87d9ff61><h3 data-v-87d9ff61>Connect</h3><ul data-v-87d9ff61><li data-v-87d9ff61><a href="https://instagram.com/itscurateddaily" target="_blank" data-v-87d9ff61>Instagram</a></li><li data-v-87d9ff61><a href="#about" data-v-87d9ff61>Email</a></li><li data-v-87d9ff61><a href="/" data-v-87d9ff61>ItsCuratedDaily.com</a></li></ul></div></div></div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-87d9ff61"]]);

export { index as default };
//# sourceMappingURL=index-D6oVbgHM.mjs.map
