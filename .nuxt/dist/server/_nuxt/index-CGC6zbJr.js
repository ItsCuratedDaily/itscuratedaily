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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-74c3db0a><nav class="nav" data-v-74c3db0a><div class="nav-left" data-v-74c3db0a><button class="hamburger" data-v-74c3db0a><span data-v-74c3db0a></span><span data-v-74c3db0a></span><span data-v-74c3db0a></span></button></div><div class="nav-center" data-v-74c3db0a><a href="/" class="logo" data-v-74c3db0a>ItsCuratedDaily</a></div><div class="nav-right" data-v-74c3db0a><span class="nav-icon" data-v-74c3db0a>👤</span><span class="nav-icon" data-v-74c3db0a>🛍️</span></div></nav>`);
  if ($data.menuOpen) {
    _push(`<div class="mobile-menu" data-v-74c3db0a><a href="#about" data-v-74c3db0a>About</a><a href="#packages" data-v-74c3db0a>Packages</a><a href="#contact" data-v-74c3db0a>Contact</a></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<section class="hero" data-v-74c3db0a><div class="hero-bg" data-v-74c3db0a></div></section><section class="about" id="about" data-v-74c3db0a><div class="wrap" data-v-74c3db0a><div class="about-grid" data-v-74c3db0a><img${ssrRenderAttr("src", _imports_0)} alt="Elen" data-v-74c3db0a><div class="about-content" data-v-74c3db0a><h2 data-v-74c3db0a>Meet Elen Hovsepian</h2><p class="subtitle" data-v-74c3db0a>Creator | Curator | Entrepreneur</p><p data-v-74c3db0a>Elen is a dedicated content creator with a passion for high-quality, luxury lifestyle content. With over 4,000 engaged followers, she specializes in carefully selected Amazon affiliate products.</p><p data-v-74c3db0a>Built on authenticity and trust, ItsCuratedDaily partners with premium brands to create meaningful connections with an audience that values quality and real recommendations.</p><div class="stats" data-v-74c3db0a><div data-v-74c3db0a><h3 data-v-74c3db0a>4,000+</h3><p data-v-74c3db0a>Followers</p></div><div data-v-74c3db0a><h3 data-v-74c3db0a>85%+</h3><p data-v-74c3db0a>Engagement</p></div><div data-v-74c3db0a><h3 data-v-74c3db0a>100%</h3><p data-v-74c3db0a>Authentic</p></div></div></div></div></div></section><section class="why" data-v-74c3db0a><div class="wrap" data-v-74c3db0a><h2 data-v-74c3db0a>Why Partner With ItsCuratedDaily?</h2><div class="features" data-v-74c3db0a><div class="feature" data-v-74c3db0a><div class="num" data-v-74c3db0a>01</div><h3 data-v-74c3db0a>Authentic Audience</h3><p data-v-74c3db0a>Real people with real purchasing power who trust recommendations.</p></div><div class="feature" data-v-74c3db0a><div class="num" data-v-74c3db0a>02</div><h3 data-v-74c3db0a>Premium Aesthetic</h3><p data-v-74c3db0a>High-quality content that elevates your brand&#39;s presence.</p></div><div class="feature" data-v-74c3db0a><div class="num" data-v-74c3db0a>03</div><h3 data-v-74c3db0a>Conversion Focus</h3><p data-v-74c3db0a>Amazon affiliate expertise with proven conversion rates.</p></div><div class="feature" data-v-74c3db0a><div class="num" data-v-74c3db0a>04</div><h3 data-v-74c3db0a>Full Transparency</h3><p data-v-74c3db0a>Real-time analytics and performance tracking for every campaign.</p></div></div></div></section><section class="packages" id="packages" data-v-74c3db0a><div class="wrap" data-v-74c3db0a><h2 data-v-74c3db0a>Partnership Packages</h2><div class="pkg-grid" data-v-74c3db0a><div class="pkg" data-v-74c3db0a><h3 data-v-74c3db0a>Bronze</h3><p class="price" data-v-74c3db0a>Starting at $XXX</p><ul data-v-74c3db0a><li data-v-74c3db0a>1-2 curated posts</li><li data-v-74c3db0a>Basic analytics</li><li data-v-74c3db0a>30-day campaign</li></ul><button class="btn-sec" data-v-74c3db0a>Learn More</button></div><div class="pkg featured" data-v-74c3db0a><span class="badge" data-v-74c3db0a>Most Popular</span><h3 data-v-74c3db0a>Silver</h3><p class="price" data-v-74c3db0a>Starting at $XXX</p><ul data-v-74c3db0a><li data-v-74c3db0a>3-4 curated posts</li><li data-v-74c3db0a>Advanced analytics</li><li data-v-74c3db0a>30-day campaign</li><li data-v-74c3db0a>Priority support</li></ul><button class="btn-pri" data-v-74c3db0a>Get Started</button></div><div class="pkg" data-v-74c3db0a><h3 data-v-74c3db0a>Gold</h3><p class="price" data-v-74c3db0a>Starting at $XXX</p><ul data-v-74c3db0a><li data-v-74c3db0a>5+ curated posts</li><li data-v-74c3db0a>Full analytics</li><li data-v-74c3db0a>60-day campaign</li><li data-v-74c3db0a>Custom strategy</li></ul><button class="btn-sec" data-v-74c3db0a>Learn More</button></div></div></div></section><section class="gallery" data-v-74c3db0a><div class="wrap" data-v-74c3db0a><h2 data-v-74c3db0a>Our Content Style</h2><div class="grid" data-v-74c3db0a><img${ssrRenderAttr("src", _imports_1)} alt="Post 1" data-v-74c3db0a><img${ssrRenderAttr("src", _imports_2)} alt="Post 2" data-v-74c3db0a><img${ssrRenderAttr("src", _imports_3)} alt="Post 3" data-v-74c3db0a><img${ssrRenderAttr("src", _imports_4)} alt="Post 4" data-v-74c3db0a></div></div></section><section class="cta" data-v-74c3db0a><h2 data-v-74c3db0a>Ready to Elevate Your Brand?</h2><p data-v-74c3db0a>Partner with ItsCuratedDaily and reach thousands of engaged followers</p><button data-v-74c3db0a>Start Your Campaign</button></section><section class="contact" id="contact" data-v-74c3db0a><div class="wrap" data-v-74c3db0a><h2 data-v-74c3db0a>Get In Touch</h2><p data-v-74c3db0a>Ready to work with us? Let&#39;s discuss your campaign.</p><div class="contact-btns" data-v-74c3db0a><a href="mailto:contact@itscurateddaily.com" class="btn-pri" data-v-74c3db0a>Email Us</a><a href="https://instagram.com/itscurateddaily" target="_blank" class="btn-sec" data-v-74c3db0a>DM on Instagram</a></div></div></section><footer class="footer-new" data-v-74c3db0a><div class="footer-content" data-v-74c3db0a><div class="footer-image" data-v-74c3db0a><img${ssrRenderAttr("src", _imports_0)} alt="Elen Hovsepian" data-v-74c3db0a></div><div class="footer-columns" data-v-74c3db0a><div class="footer-column" data-v-74c3db0a><h3 data-v-74c3db0a>About</h3><ul data-v-74c3db0a><li data-v-74c3db0a><a href="#about" data-v-74c3db0a>Our Story</a></li><li data-v-74c3db0a><a href="#packages" data-v-74c3db0a>Services</a></li><li data-v-74c3db0a><a href="#contact" data-v-74c3db0a>Contact Us</a></li></ul></div><div class="footer-column" data-v-74c3db0a><h3 data-v-74c3db0a>Packages</h3><ul data-v-74c3db0a><li data-v-74c3db0a><a href="#packages" data-v-74c3db0a>Bronze</a></li><li data-v-74c3db0a><a href="#packages" data-v-74c3db0a>Silver</a></li><li data-v-74c3db0a><a href="#packages" data-v-74c3db0a>Gold</a></li><li data-v-74c3db0a><a href="#contact" data-v-74c3db0a>Custom</a></li></ul></div><div class="footer-column" data-v-74c3db0a><h3 data-v-74c3db0a>Connect</h3><ul data-v-74c3db0a><li data-v-74c3db0a><a href="https://instagram.com/itscurateddaily" target="_blank" data-v-74c3db0a>Instagram</a></li><li data-v-74c3db0a><a href="#contact" data-v-74c3db0a>Email</a></li><li data-v-74c3db0a><a href="/" data-v-74c3db0a>ItsCuratedDaily.com</a></li></ul></div></div></div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-74c3db0a"]]);
export {
  index as default
};
//# sourceMappingURL=index-CGC6zbJr.js.map
