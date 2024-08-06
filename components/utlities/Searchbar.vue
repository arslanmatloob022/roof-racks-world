<template>
  <section>
    <div class="search-bar" :class="showContactNavBar ? 'large-search' : ''">
      <input
        type="text"
        placeholder="Search..."
        v-model="searchQuery"
        @input="handleInput"
      />
      <button @click="search">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </button>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
const showContactNavBar = ref(false);
const showHeader = ref(true);
const searchQuery = ref("");
const menuActive = ref(false);

const search = () => {};
const handleInput = () => {};

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  showContactNavBar.value = scrollTop >= 100; // Show ContactNavBar after scrolling down 100px
  showHeader.value = scrollTop >= 0; // Show Header only at the top of the page
};

const toggleMenu = () => {
  menuActive.value = !menuActive.value;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 2px solid #f2f2f2;
  padding: 4px;
  border-radius: 25px;
  width: 100%;
  width: fit-content;
}
.large-search {
  width: 600px;
}

.search-bar input {
  flex: 1;
  border: none;
  padding: 10px;
  font-size: 16px;
  outline: none;
  border-radius: 25px;
  width: 100%;
}

.search-bar button {
  background-color: #ff4426;
  border: none;
  color: white;
  padding: 10px 14px;
  border-radius: 25px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-bar button:hover {
  background-color: #242424;
}

@media (max-width: 768px) {
  .large-search {
    width: 300px;
  }
  .search-bar {
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    margin-right: 50%;
  }
}
</style>
