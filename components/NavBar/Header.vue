
<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <img data-v-b70ed3ee="" class="w-100" height="85" width="218" src="https://cdn.flowrix.app/85a5f8ac/uploads/2024/07/logo.webp" alt="Roof Rack and Towbar World"></img>

    </div>
    <div class="navbar-links">
      <ul>
        <li
          @mouseover="openDropdown('shop')"
          @mouseleave="closeDropdown('shop')"
        >
          <a >Shop</a>
          <!-- v-show="dropdowns.shop" -->
        </li>
        <div  class="dropdown">
          <ShopDropDown  />
        </div>
        <li
          @mouseover="openDropdown('inStoreServices')"
          @mouseleave="closeDropdown('inStoreServices')"
        >
          <a href="#">In-Store Services</a>
          <div class="dropdown" v-show="dropdowns.inStoreServices">
            <ul>
              <li><a href="#">In-Store Services Link 1</a></li>
              <li><a href="#">In-Store Services Link 2</a></li>
              <li><a href="#">In-Store Services Link 3</a></li>
            </ul>
          </div>
        </li>
        <li
          @mouseover="openDropdown('brands')"
          @mouseleave="closeDropdown('brands')"
        >
          <a href="#">Brands</a>
        </li>
        <li
          @mouseover="openDropdown('visualiser')"
          @mouseleave="closeDropdown('visualiser')"
        >
          <a href="#">Visualiser</a>
        </li>
        <li
          @mouseover="openDropdown('stores')"
          @mouseleave="closeDropdown('stores')"
        >
          <a href="#">Stores</a>
          <div class="dropdown" v-show="dropdowns.stores">
            <ul>
              <li><a href="#">Stores Link 1</a></li>
              <li><a href="#">Stores Link 2</a></li>
              <li><a href="#">Stores Link 3</a></li>
            </ul>
          </div>
        </li>
        <li
          @mouseover="openDropdown('contact')"
          @mouseleave="closeDropdown('contact')"
        >
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
    <div class="navbar-actions">
      <input type="text" placeholder="Search..." />
      <button class="profile-icon">
        <img src="path-to-your-profile-icon.png" alt="Profile" />
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, defineComponent } from 'vue';
import ShopDropDown from "@/components/NavBar/ShopDropDown.vue";
const dropdowns = ref({
      shop: false,
      inStoreServices: false,
      brands: false,
      visualiser: false,
      stores: false,
      contact: false,
    });

    const openDropdown = (key: string) => {
      dropdowns.value[key] = true;
      console.log('key ',dropdowns.value[key], key )
    };

    const closeDropdown = (key: string) => {
      dropdowns.value[key] = false;
    };
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
  
}

.navbar-logo img {
  height: 40px;
}

.navbar-links {
  flex: 1;
}

.navbar-links ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-links li {
  position: relative;
  margin: 0 1rem;
}

.navbar-links a {
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: block;
  transition: background-color 0.3s;
  border-radius: 4px;
}

.navbar-links a:hover {
  background-color: #555;
}

.dropdown {
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  padding: 6px;
  background-color: #ffffff;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 12px 1px #999;
  transition: max-height 0.5s ease, opacity 0.5s ease;
  z-index: 9999;
}

.dropdown ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.dropdown li a {
  padding: 0.5rem 1rem;
  display: block;
  color: #e9e9e9;
  text-decoration: none;
  transition: background-color 0.3s;
}

.dropdown li a:hover {
  background-color: #555;
}

.navbar-actions {
  display: flex;
  align-items: center;
}

.navbar-actions input {
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  margin-right: 1rem;
}

.navbar-actions .profile-icon {
  background: none;
  border: none;
  cursor: pointer;
}

.navbar-actions .profile-icon img {
  height: 30px;
  width: 30px;
}

/* Dropdown menu transition */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: max-height 0.5s ease, opacity 0.5s ease;
}
.dropdown-enter,
.dropdown-leave-to {
  max-height: 200px; /* Adjust according to your content */
  opacity: 1;
}
.dropdown-enter-to,
.dropdown-leave {
  max-height: 0;
  opacity: 0;
}
</style>
