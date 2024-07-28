<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <img
        class="w-100"
        height="85"
        width="218"
        src="https://cdn.flowrix.app/85a5f8ac/uploads/2024/07/logo.webp"
        alt="Roof Rack and Towbar World"
      />
    </div>
    <div class="navbar-mobile-logo">
      <img
        class="w-100"
        height="85"
        width="218"
        src="@/images/mobile-logo.png"
        alt="Roof Rack and Towbar World"
      />
    </div>

    <div class="navbar-links" :class="{ active: menuActive }">
      <ul>
        <li
          @mouseover="openDropdown('shop')"
          @mouseleave="closeDropdown('shop')"
        >
          <a>Shop</a>
          <div v-show="dropdowns.shop" class="dropdown">
            <ShopDropDown />
          </div>
        </li>
        <li
          @mouseover="openDropdown('inStoreServices')"
          @mouseleave="closeDropdown('inStoreServices')"
        >
          <a>In-Store Services</a>
          <div class="dropdown" v-show="dropdowns.inStoreServices">
            <InStoreDropDown />
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
            <StoreDropDown />
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
      <div class="is-flex">
        <img style="height: 32px" src="@/images/car-100.png" alt="" srcset="" />
        <div class="flex-column">
          <button class="profile-icon">My Garage</button>
          <button class="profile-icon">Select Your Car</button>
        </div>
      </div>
      <button class="menu-icon" @click="toggleMenu">
        <fa :icon="['fas', 'bars']" />
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ShopDropDown from "@/components/NavBar/ShopDropDown.vue";
import InStoreDropDown from "@/components/NavBar/InStoreDropDown.vue";
import StoreDropDown from "@/components/NavBar/StoreDropDown.vue";

const dropdowns = ref({
  shop: false,
  inStoreServices: false,
  brands: false,
  visualiser: false,
  stores: false,
  contact: false,
});

const menuActive = ref(false);

const openDropdown = (key: string) => {
  dropdowns.value[key] = true;
};

const closeDropdown = (key: string) => {
  dropdowns.value[key] = false;
};

const toggleMenu = () => {
  menuActive.value = !menuActive.value;
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ff4426;
  color: #fff;
}

.navbar-logo img {
  height: 40px;
}

.navbar-mobile-logo {
  margin-right: 60px;
}
.navbar-mobile-logo img {
  display: none;

  height: 34px;
  width: 34px;
  border-radius: 50%;
}

.navbar-links {
  flex: 1;
  display: flex;
  align-items: center;
  z-index: 9999;
}

.navbar-links ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-links li {
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
  background-color: #e7e7e7;
  color: #ff4426;
}

.dropdown {
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 6px;
  transform: translateY(-1.6%);
  background-color: #ffffff;
  border-radius: 4px;
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
  gap: 12px;
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
  color: #fff;
  font-size: 10px;
}

.navbar-actions .profile-icon:first-child {
  background: none;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 15px;
}

.navbar-actions .profile-icon img {
  height: 36px;
  width: 36px;
  border-radius: 6px;
}

.navbar-actions .menu-icon {
  display: none;
  background: #555;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  color: #fff;
}

.navbar-actions .menu-icon i {
  color: #ffffff;
  z-index: 9999;
  font-size: large;
}

/* Dropdown menu transition */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: max-height 0.5s ease, opacity 0.5s ease;
}
.dropdown-enter,
.dropdown-leave-to {
  max-height: 200px;
  opacity: 1;
}
.dropdown-enter-to,
.dropdown-leave {
  max-height: 0;
  opacity: 0;
}

.flex-column {
  display: flex;
  flex-direction: column;
}
.is-flex {
  display: flex;
  align-items: last baseline;
}
/* Media Queries */
@media (max-width: 768px) {
  .navbar-links {
    display: none;
    position: absolute;
    flex-direction: column;
    align-items: center;
    z-index: 9999;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #ff4426;
    padding: 1rem;
  }
  .navbar-links ul {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .dropdown {
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 6px;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 0 12px 1px #999;
    transition: max-height 0.5s ease, opacity 0.5s ease;
    z-index: 9999;
  }
  .navbar-links li {
    margin: 0;
    width: 100vw;
    position: relative;
  }

  .navbar-links.active {
    display: flex;
  }

  .navbar-actions .menu-icon {
    display: block;
  }
  .navbar-actions input {
    width: 160px;
    height: 34px;
    border-radius: 12px;
  }
  .navbar-actions .profile-icon {
    display: block;
  }
  .navbar-actions .profile-icon img {
    height: 34px;
    width: 34px;
    border-radius: 50%;
  }
  .navbar-logo img {
    display: none;
  }
  .navbar-mobile-logo img {
    display: block;
  }
}
</style>
