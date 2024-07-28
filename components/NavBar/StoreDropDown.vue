<template>
  <div class="row">
    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
      <div class="w-100 p-2">
        <div class="menu-options"></div>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
      <div class="w-100 p-2">
        <div class="menu-options">
          <ul>
            <li><a href="#">Artarmon</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
      <div class="w-100 p-2">
        <div class="menu-options content-align-center">
          <ul>
            <li><a href="#">Burwood</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
      <div class="w-100 p-2">
        <div class="menu-options"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineComponent } from "vue";
const columns = ref(4);
const rows = ref(3);
</script>

<style scoped>
.menu-options {
}

.menu-options ul {
  display: flex;
  flex-direction: column;
}

.menu-options ul li a {
  color: #585858;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  border-radius: 4px;
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.5s ease;
  z-index: 9999;
}

.dropdown ul {
  list-style: none;
  margin: 0;
  padding: 4px 24px;
}

.dropdown ul li {
  transition: all 0.15s ease;
}

.dropdown li:hover {
  background-color: #ff4426;
}

.dropdown li:hover a {
  color: #fff;
}

.dropdown li a {
  padding: 0.5rem 1rem;
  display: block;
  color: #e9e9e9;
  text-decoration: none;
  transition: background-color 0.3s;
}

.master-heading {
  border-bottom: 2px solid #004f7b;
  margin-bottom: 10px;
}

.master-heading a {
  color: #ff4426;
}
.master-heading:hover {
  background-color: transparent;
}
</style>
