export const BrandSlider = () => import('../../components/BrandSlider.vue' /* webpackChunkName: "components/brand-slider" */).then(c => wrapFunctional(c.default || c))
export const CategorySlider = () => import('../../components/CategorySlider.vue' /* webpackChunkName: "components/category-slider" */).then(c => wrapFunctional(c.default || c))
export const ContactForm = () => import('../../components/ContactForm.vue' /* webpackChunkName: "components/contact-form" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const MainSlider = () => import('../../components/MainSlider.vue' /* webpackChunkName: "components/main-slider" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const PopularSlider = () => import('../../components/PopularSlider.vue' /* webpackChunkName: "components/popular-slider" */).then(c => wrapFunctional(c.default || c))
export const Services = () => import('../../components/Services.vue' /* webpackChunkName: "components/services" */).then(c => wrapFunctional(c.default || c))
export const SpecialProducts = () => import('../../components/SpecialProducts.vue' /* webpackChunkName: "components/special-products" */).then(c => wrapFunctional(c.default || c))
export const Store = () => import('../../components/Store.vue' /* webpackChunkName: "components/store" */).then(c => wrapFunctional(c.default || c))
export const Stores = () => import('../../components/Stores.vue' /* webpackChunkName: "components/stores" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const VisitingSection = () => import('../../components/VisitingSection.vue' /* webpackChunkName: "components/visiting-section" */).then(c => wrapFunctional(c.default || c))
export const NavBarContactNavBar = () => import('../../components/NavBar/ContactNavBar.vue' /* webpackChunkName: "components/nav-bar-contact-nav-bar" */).then(c => wrapFunctional(c.default || c))
export const NavBarHeader = () => import('../../components/NavBar/Header.vue' /* webpackChunkName: "components/nav-bar-header" */).then(c => wrapFunctional(c.default || c))
export const NavBarInStoreDropDown = () => import('../../components/NavBar/InStoreDropDown.vue' /* webpackChunkName: "components/nav-bar-in-store-drop-down" */).then(c => wrapFunctional(c.default || c))
export const NavBarShopDropDown = () => import('../../components/NavBar/ShopDropDown.vue' /* webpackChunkName: "components/nav-bar-shop-drop-down" */).then(c => wrapFunctional(c.default || c))
export const NavBarStoreDropDown = () => import('../../components/NavBar/StoreDropDown.vue' /* webpackChunkName: "components/nav-bar-store-drop-down" */).then(c => wrapFunctional(c.default || c))
export const UtlitiesSearchbar = () => import('../../components/utlities/Searchbar.vue' /* webpackChunkName: "components/utlities-searchbar" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
