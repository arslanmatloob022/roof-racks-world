<template>
  <div>
    <ContactNavBar class="ContactNavBar" v-if="showContactNavBar" />
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount, watch } from "vue";
import Header from "~/components/NavBar/Header.vue";
import Footer from "~/components/Footer.vue";
import ContactNavBar from "~/components/NavBar/ContactNavBar.vue";

const showContactNavBar = ref(false);
const showHeader = ref(true);

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollHeight;
  if (scrollTop > 0) {
    showContactNavBar.value = true; // Show ContactNavBar when scrolling down
  } else {
    showContactNavBar.value = false; // Hide ContactNavBar when scrolled to the top
  }

  showHeader.value = scrollTop > 0; // Show Header only when scrolled down
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Your layout styles here */
.ContactNavBar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
}
</style>
