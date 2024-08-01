<template>
  <div>
    <ContactNavBar class="ContactNavBar" v-if="showContactNavBar" />
    <!-- <ContactNavBar /> -->
    <Header v-if="showHeader" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
import Header from "~/components/NavBar/Header.vue";
import Footer from "~/components/Footer.vue";
import ContactNavBar from "~/components/NavBar/ContactNavBar.vue";

const showContactNavBar = ref(false);
const showHeader = ref(true);

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  showContactNavBar.value = scrollTop >= 100; // Show ContactNavBar after scrolling down 100px
  showHeader.value = scrollTop >= 0; // Show Header only at the top of the page
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
