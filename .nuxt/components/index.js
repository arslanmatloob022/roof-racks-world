export { default as BrandSlider } from '../../components/BrandSlider.vue'
export { default as CategorySlider } from '../../components/CategorySlider.vue'
export { default as ContactForm } from '../../components/ContactForm.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as MainSlider } from '../../components/MainSlider.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as PopularSlider } from '../../components/PopularSlider.vue'
export { default as Services } from '../../components/Services.vue'
export { default as SpecialProducts } from '../../components/SpecialProducts.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as VisitingSection } from '../../components/VisitingSection.vue'
export { default as NavBarContactNavBar } from '../../components/NavBar/ContactNavBar.vue'
export { default as NavBarHeader } from '../../components/NavBar/Header.vue'
export { default as NavBarInStoreDropDown } from '../../components/NavBar/InStoreDropDown.vue'
export { default as NavBarShopDropDown } from '../../components/NavBar/ShopDropDown.vue'
export { default as NavBarStoreDropDown } from '../../components/NavBar/StoreDropDown.vue'
export { default as UtlitiesSearchbar } from '../../components/utlities/Searchbar.vue'

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
