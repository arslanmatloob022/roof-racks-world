<template>
  <section>
    <div class="search-bar">
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
<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    handleInput() {
      // Handle input change if needed
    },
    search() {
      // Handle search functionality
      console.log("Searching for: " + this.searchQuery);
      // Add your search logic here
    },
  },
};
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
</style>
