<template>
  <div>
    <MainSlider />
    <Services />
    <CategorySlider />

    <BrandSlider />
    <SpecialProducts />
    <PopularSlider />
    <Stores class="mt-5" />
    <ContactForm />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ContactForm from "~/components/ContactForm.vue";
import Store from "~/components/Store.vue";
import Stores from "~/components/Stores.vue";

export default Vue.extend({});
</script>
