import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
import "/Users/agent/.openclaw/workspace/itscuratedaily-vercel/node_modules/ofetch/dist/node.mjs";
import "/Users/agent/.openclaw/workspace/itscuratedaily-vercel/node_modules/nuxt/node_modules/hookable/dist/index.mjs";
import "/Users/agent/.openclaw/workspace/itscuratedaily-vercel/node_modules/unctx/dist/index.mjs";
import "/Users/agent/.openclaw/workspace/itscuratedaily-vercel/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/agent/.openclaw/workspace/itscuratedaily-vercel/node_modules/defu/dist/defu.mjs";
import "/Users/agent/.openclaw/workspace/itscuratedaily-vercel/node_modules/ufo/dist/index.mjs";
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-86d46900><nav class="nav" data-v-86d46900><div class="nav-left" data-v-86d46900><button class="${ssrRenderClass([{ active: $data.menuOpen }, "hamburger"])}" data-v-86d46900><span data-v-86d46900></span><span data-v-86d46900></span><span data-v-86d46900></span></button></div><div class="nav-center" data-v-86d46900><a href="/" class="logo" data-v-86d46900>ItsCuratedDaily</a></div><div class="nav-right" data-v-86d46900><span class="nav-icon" data-v-86d46900>👤</span><span class="nav-icon" data-v-86d46900>🛍️</span></div></nav>`);
  if ($data.menuOpen) {
    _push(`<div class="mobile-menu" data-v-86d46900><a href="#collab" data-v-86d46900>Collaborations</a><a href="#amazon" data-v-86d46900>Amazon Finds</a><a href="#target" data-v-86d46900>Target Finds</a><a href="#blog" data-v-86d46900>From my Blog</a><a href="#about" data-v-86d46900>Meet Elen</a><a href="#recent" data-v-86d46900>Recent Posts</a></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<section class="hero" data-v-86d46900><div class="hero-bg" data-v-86d46900></div></section><section class="section collab-bg" id="collab" data-v-86d46900><div class="wrap" data-v-86d46900><h2 data-v-86d46900>Recent Collaborations</h2><p class="section-desc" data-v-86d46900>Featured brand partnerships</p><div class="grid" data-v-86d46900><img${ssrRenderAttr("src", _imports_0)} alt="Collaboration 1" data-v-86d46900><img${ssrRenderAttr("src", _imports_1)} alt="Collaboration 2" data-v-86d46900><img${ssrRenderAttr("src", _imports_2)} alt="Collaboration 3" data-v-86d46900><img${ssrRenderAttr("src", _imports_3)} alt="Collaboration 4" data-v-86d46900></div></div></section><section class="section amazon-bg" id="amazon" data-v-86d46900><div class="wrap" data-v-86d46900><h2 data-v-86d46900>Amazon Finds</h2><p class="section-desc" data-v-86d46900>Carefully curated products we love</p><div class="grid" data-v-86d46900><img${ssrRenderAttr("src", _imports_0)} alt="Amazon Find 1" data-v-86d46900><img${ssrRenderAttr("src", _imports_1)} alt="Amazon Find 2" data-v-86d46900><img${ssrRenderAttr("src", _imports_2)} alt="Amazon Find 3" data-v-86d46900><img${ssrRenderAttr("src", _imports_3)} alt="Amazon Find 4" data-v-86d46900></div></div></section><section class="section target-bg" id="target" data-v-86d46900><div class="wrap" data-v-86d46900><h2 data-v-86d46900>Target Finds</h2><p class="section-desc" data-v-86d46900>Trending picks from Target</p><div class="grid" data-v-86d46900><img${ssrRenderAttr("src", _imports_0)} alt="Target Find 1" data-v-86d46900><img${ssrRenderAttr("src", _imports_1)} alt="Target Find 2" data-v-86d46900><img${ssrRenderAttr("src", _imports_2)} alt="Target Find 3" data-v-86d46900><img${ssrRenderAttr("src", _imports_3)} alt="Target Find 4" data-v-86d46900></div></div></section><section class="section blog-bg" id="blog" data-v-86d46900><div class="wrap" data-v-86d46900><h2 data-v-86d46900>From my Blog</h2><p class="section-desc" data-v-86d46900>Stories, insights, and inspiration</p><div class="grid" data-v-86d46900><img${ssrRenderAttr("src", _imports_0)} alt="Blog 1" data-v-86d46900><img${ssrRenderAttr("src", _imports_1)} alt="Blog 2" data-v-86d46900><img${ssrRenderAttr("src", _imports_2)} alt="Blog 3" data-v-86d46900><img${ssrRenderAttr("src", _imports_3)} alt="Blog 4" data-v-86d46900></div></div></section><section class="section meet-bg" id="about" data-v-86d46900><div class="wrap" data-v-86d46900><div class="about-grid" data-v-86d46900><img${ssrRenderAttr("src", _imports_4)} alt="Elen" data-v-86d46900><div class="about-content" data-v-86d46900><h2 data-v-86d46900>Meet Elen</h2><p class="subtitle" data-v-86d46900>Creator | Curator | Entrepreneur</p><p data-v-86d46900>Elen is a dedicated content creator with a passion for high-quality, luxury lifestyle content. With over 4,000 engaged followers, she specializes in carefully selected Amazon affiliate products.</p><p data-v-86d46900>Built on authenticity and trust, ItsCuratedDaily partners with premium brands to create meaningful connections with an audience that values quality and real recommendations.</p><div class="stats" data-v-86d46900><div data-v-86d46900><h3 data-v-86d46900>4,000+</h3><p data-v-86d46900>Followers</p></div><div data-v-86d46900><h3 data-v-86d46900>85%+</h3><p data-v-86d46900>Engagement</p></div><div data-v-86d46900><h3 data-v-86d46900>100%</h3><p data-v-86d46900>Authentic</p></div></div></div></div></div></section><section class="section recent-bg" id="recent" data-v-86d46900><div class="wrap" data-v-86d46900><h2 data-v-86d46900>Recent Posts</h2><p class="section-desc" data-v-86d46900>Latest updates from ItsCuratedDaily</p><div class="grid" data-v-86d46900><img${ssrRenderAttr("src", _imports_0)} alt="Recent 1" data-v-86d46900><img${ssrRenderAttr("src", _imports_1)} alt="Recent 2" data-v-86d46900><img${ssrRenderAttr("src", _imports_2)} alt="Recent 3" data-v-86d46900><img${ssrRenderAttr("src", _imports_3)} alt="Recent 4" data-v-86d46900></div></div></section><footer class="footer-new" data-v-86d46900><div class="footer-content" data-v-86d46900><div class="footer-image" data-v-86d46900><img${ssrRenderAttr("src", _imports_4)} alt="Elen Hovsepian" data-v-86d46900></div><div class="footer-columns" data-v-86d46900><div class="footer-column" data-v-86d46900><h3 data-v-86d46900>About</h3><ul data-v-86d46900><li data-v-86d46900><a href="#about" data-v-86d46900>Our Story</a></li><li data-v-86d46900><a href="#collab" data-v-86d46900>Collaborations</a></li><li data-v-86d46900><a href="#about" data-v-86d46900>Contact Us</a></li></ul></div><div class="footer-column" data-v-86d46900><h3 data-v-86d46900>Shop</h3><ul data-v-86d46900><li data-v-86d46900><a href="#amazon" data-v-86d46900>Amazon Finds</a></li><li data-v-86d46900><a href="#target" data-v-86d46900>Target Finds</a></li><li data-v-86d46900><a href="#recent" data-v-86d46900>Latest Posts</a></li></ul></div><div class="footer-column" data-v-86d46900><h3 data-v-86d46900>Connect</h3><ul data-v-86d46900><li data-v-86d46900><a href="https://instagram.com/itscurateddaily" target="_blank" data-v-86d46900>Instagram</a></li><li data-v-86d46900><a href="#about" data-v-86d46900>Email</a></li><li data-v-86d46900><a href="/" data-v-86d46900>ItsCuratedDaily.com</a></li></ul></div></div></div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-86d46900"]]);
export {
  index as default
};
//# sourceMappingURL=index-BPs4OOYR.js.map
