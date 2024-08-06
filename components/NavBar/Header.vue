<template>
  <div class="main-nav">
    <div class="logo hide-on-mobile">
      <img
        class="w-100"
        height="85"
        width="218"
        src="https://cdn.flowrix.app/85a5f8ac/uploads/2024/07/logo.webp"
        alt="Roof Rack and Towbar World"
      />
    </div>
    <div class="menu">
      <ContactNavBar />
      <nav class="navbar">
        <!-- <div class="navbar-logo">
          <img
            class="w-100"
            height="85"
            width="218"
            src="https://cdn.flowrix.app/85a5f8ac/uploads/2024/07/logo.webp"
            alt="Roof Rack and Towbar World"
          />
        </div> -->
        <!-- <div class="navbar-mobile-logo">
          <img
            class="w-100"
            height="85"
            width="218"
            src="@/images/mobile-logo.png"
            alt="Roof Rack and Towbar World"
          />
        </div> -->

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
              <a class="">In-Store Services</a>
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
          <div class="garage is-flex">
            <img
              style="height: 32px"
              src="@/images/car-100.png"
              alt=""
              srcset=""
            />
            <div class="garage-button flex-column">
              <button class="profile-icon">My Garage</button>
              <button class="profile-icon">Select Your Car</button>
            </div>
          </div>
          <button class="menu-icon" @click="toggleMenu">
            <fa :icon="['fas', 'bars']" />
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ShopDropDown from "@/components/NavBar/ShopDropDown.vue";
import InStoreDropDown from "@/components/NavBar/InStoreDropDown.vue";
import StoreDropDown from "@/components/NavBar/StoreDropDown.vue";
import ContactNavBar from "./ContactNavBar.vue";

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
.main-nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.main-nav .menu {
  border-left: 2px solid #f0f0f0;
  width: 64%;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  border-top: 2px solid #f0f0f0;
  color: #ff4433;
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
  cursor: pointer;
}

.navbar-links a {
  color: #ff4426;
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
  left: -46.3%;
  right: auto;
  top: 100%;
  transform: translateX(-45%);
  padding: 6px;
  transform: translateY(-1%);
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 0 12px 1px #999;
  transition: max-height 0.5s ease, opacity 0.5s ease;
  z-index: 9999;
  width: 98dvw;
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

.navbar-actions .garage {
  display: block;
}
.navbar-actions .garage-button {
  display: block;
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
  color: #ff4426;
  font-size: 10px;
}

.navbar-actions .profile-icon:first-child {
  background: none;
  border: none;
  cursor: pointer;
  color: #ff4426;
  font-size: 15px;
}

.navbar-actions .profile-icon img {
  height: 36px;
  width: 36px;
  border-radius: 6px;
}

.navbar-actions .menu-icon {
  display: none;
  border: none;
  cursor: pointer;
  background-color: none;
  width: 30px;
  height: 30px;
}

.navbar-actions .menu-icon i {
  color: #ffffff;
  z-index: 9;
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
    left: -1px;
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
  .navbar-actions {
    width: 100%;
    justify-content: space-between;
  }
  .navbar-actions .menu-icon {
    display: none;
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
  .navbar-actions {
    display: flex;
    justify-content: space-between;
  }
  .navbar-actions .garage {
    display: none;
  }

  .navbar {
    border: none;
  }
  .main-nav .menu {
    width: 100%;
  }
  .navbar-links a {
    color: #ffffff;
  }
}
</style>
