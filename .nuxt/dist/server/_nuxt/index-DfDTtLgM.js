import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
import "/Users/agent/.openclaw/workspace/itscuratedaily-vercel/node_modules/ofetch/dist/node.mjs";
import "/Users/agent/.openclaw/workspace/itscuratedaily-vercel/node_modules/nuxt/node_modules/hookable/dist/index.mjs";
import "/Users/agent/.openclaw/workspace/itscuratedaily-vercel/node_modules/unctx/dist/index.mjs";
import "/Users/agent/.openclaw/workspace/itscuratedaily-vercel/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/agent/.openclaw/workspace/itscuratedaily-vercel/node_modules/defu/dist/defu.mjs";
import "/Users/agent/.openclaw/workspace/itscuratedaily-vercel/node_modules/ufo/dist/index.mjs";
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
      (void 0).getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-bf23aba1><nav class="nav" data-v-bf23aba1><div class="nav-left" data-v-bf23aba1><button class="hamburger" data-v-bf23aba1><span data-v-bf23aba1></span><span data-v-bf23aba1></span><span data-v-bf23aba1></span></button></div><div class="nav-center" data-v-bf23aba1><a href="/" class="logo" data-v-bf23aba1>ItsCuratedDaily</a></div><div class="nav-right" data-v-bf23aba1><span class="nav-icon" data-v-bf23aba1>👤</span><span class="nav-icon" data-v-bf23aba1>🛍️</span></div></nav>`);
  if ($data.menuOpen) {
    _push(`<div class="mobile-menu" data-v-bf23aba1><a href="#about" data-v-bf23aba1>About</a><a href="#packages" data-v-bf23aba1>Packages</a><a href="#contact" data-v-bf23aba1>Contact</a></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<section class="hero" data-v-bf23aba1><div class="hero-bg" data-v-bf23aba1></div></section><section class="about" id="about" data-v-bf23aba1><div class="wrap" data-v-bf23aba1><div class="about-grid" data-v-bf23aba1><img${ssrRenderAttr("src", _imports_0)} alt="Elen" data-v-bf23aba1><div class="about-content" data-v-bf23aba1><h2 data-v-bf23aba1>Meet Elen Hovsepian</h2><p class="subtitle" data-v-bf23aba1>Creator | Curator | Entrepreneur</p><p data-v-bf23aba1>Elen is a dedicated content creator with a passion for high-quality, luxury lifestyle content. With over 4,000 engaged followers, she specializes in carefully selected Amazon affiliate products.</p><p data-v-bf23aba1>Built on authenticity and trust, ItsCuratedDaily partners with premium brands to create meaningful connections with an audience that values quality and real recommendations.</p><div class="stats" data-v-bf23aba1><div data-v-bf23aba1><h3 data-v-bf23aba1>4,000+</h3><p data-v-bf23aba1>Followers</p></div><div data-v-bf23aba1><h3 data-v-bf23aba1>85%+</h3><p data-v-bf23aba1>Engagement</p></div><div data-v-bf23aba1><h3 data-v-bf23aba1>100%</h3><p data-v-bf23aba1>Authentic</p></div></div></div></div></div></section><section class="why" data-v-bf23aba1><div class="wrap" data-v-bf23aba1><h2 data-v-bf23aba1>Why Partner With ItsCuratedDaily?</h2><div class="features" data-v-bf23aba1><div class="feature" data-v-bf23aba1><div class="num" data-v-bf23aba1>01</div><h3 data-v-bf23aba1>Authentic Audience</h3><p data-v-bf23aba1>Real people with real purchasing power who trust recommendations.</p></div><div class="feature" data-v-bf23aba1><div class="num" data-v-bf23aba1>02</div><h3 data-v-bf23aba1>Premium Aesthetic</h3><p data-v-bf23aba1>High-quality content that elevates your brand&#39;s presence.</p></div><div class="feature" data-v-bf23aba1><div class="num" data-v-bf23aba1>03</div><h3 data-v-bf23aba1>Conversion Focus</h3><p data-v-bf23aba1>Amazon affiliate expertise with proven conversion rates.</p></div><div class="feature" data-v-bf23aba1><div class="num" data-v-bf23aba1>04</div><h3 data-v-bf23aba1>Full Transparency</h3><p data-v-bf23aba1>Real-time analytics and performance tracking for every campaign.</p></div></div></div></section><section class="packages" id="packages" data-v-bf23aba1><div class="wrap" data-v-bf23aba1><h2 data-v-bf23aba1>Partnership Packages</h2><div class="pkg-grid" data-v-bf23aba1><div class="pkg" data-v-bf23aba1><h3 data-v-bf23aba1>Bronze</h3><p class="price" data-v-bf23aba1>Starting at $XXX</p><ul data-v-bf23aba1><li data-v-bf23aba1>1-2 curated posts</li><li data-v-bf23aba1>Basic analytics</li><li data-v-bf23aba1>30-day campaign</li></ul><button class="btn-sec" data-v-bf23aba1>Learn More</button></div><div class="pkg featured" data-v-bf23aba1><span class="badge" data-v-bf23aba1>Most Popular</span><h3 data-v-bf23aba1>Silver</h3><p class="price" data-v-bf23aba1>Starting at $XXX</p><ul data-v-bf23aba1><li data-v-bf23aba1>3-4 curated posts</li><li data-v-bf23aba1>Advanced analytics</li><li data-v-bf23aba1>30-day campaign</li><li data-v-bf23aba1>Priority support</li></ul><button class="btn-pri" data-v-bf23aba1>Get Started</button></div><div class="pkg" data-v-bf23aba1><h3 data-v-bf23aba1>Gold</h3><p class="price" data-v-bf23aba1>Starting at $XXX</p><ul data-v-bf23aba1><li data-v-bf23aba1>5+ curated posts</li><li data-v-bf23aba1>Full analytics</li><li data-v-bf23aba1>60-day campaign</li><li data-v-bf23aba1>Custom strategy</li></ul><button class="btn-sec" data-v-bf23aba1>Learn More</button></div></div></div></section><section class="gallery" data-v-bf23aba1><div class="wrap" data-v-bf23aba1><h2 data-v-bf23aba1>Our Content Style</h2><div class="grid" data-v-bf23aba1><img${ssrRenderAttr("src", _imports_1)} alt="Post 1" data-v-bf23aba1><img${ssrRenderAttr("src", _imports_2)} alt="Post 2" data-v-bf23aba1><img${ssrRenderAttr("src", _imports_3)} alt="Post 3" data-v-bf23aba1><img${ssrRenderAttr("src", _imports_4)} alt="Post 4" data-v-bf23aba1></div></div></section><section class="cta" data-v-bf23aba1><h2 data-v-bf23aba1>Ready to Elevate Your Brand?</h2><p data-v-bf23aba1>Partner with ItsCuratedDaily and reach thousands of engaged followers</p><button data-v-bf23aba1>Start Your Campaign</button></section><section class="contact" id="contact" data-v-bf23aba1><div class="wrap" data-v-bf23aba1><h2 data-v-bf23aba1>Get In Touch</h2><p data-v-bf23aba1>Ready to work with us? Let&#39;s discuss your campaign.</p><div class="contact-btns" data-v-bf23aba1><a href="mailto:contact@itscurateddaily.com" class="btn-pri" data-v-bf23aba1>Email Us</a><a href="https://instagram.com/itscurateddaily" target="_blank" class="btn-sec" data-v-bf23aba1>DM on Instagram</a></div></div></section><footer data-v-bf23aba1><div class="wrap" data-v-bf23aba1><div class="footer-grid" data-v-bf23aba1><div data-v-bf23aba1><h4 data-v-bf23aba1>ItsCuratedDaily</h4><p data-v-bf23aba1>Premium social media content creation.</p></div><div data-v-bf23aba1><h4 data-v-bf23aba1>Links</h4><ul data-v-bf23aba1><li data-v-bf23aba1><a href="#about" data-v-bf23aba1>About</a></li><li data-v-bf23aba1><a href="#packages" data-v-bf23aba1>Packages</a></li><li data-v-bf23aba1><a href="#contact" data-v-bf23aba1>Contact</a></li></ul></div><div data-v-bf23aba1><h4 data-v-bf23aba1>Follow</h4><ul data-v-bf23aba1><li data-v-bf23aba1><a href="https://instagram.com/itscurateddaily" target="_blank" data-v-bf23aba1>Instagram</a></li></ul></div></div><p class="copy" data-v-bf23aba1>© 2026 ItsCuratedDaily. All rights reserved.</p></div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-bf23aba1"]]);
export {
  index as default
};
//# sourceMappingURL=index-DfDTtLgM.js.map
