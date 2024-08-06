<template>
  <div>
    <nav class="navbar" :class="showContactNavBar ? 'darkBg' : ''">
      <div v-if="showContactNavBar" class="navbar-mobile-logo hide-on-mobile">
        <img
          class="w-100"
          src="@/images/mobile-logo.png"
          alt="Roof Rack and Towbar World"
        />
      </div>
      <div
        v-if="!showContactNavBar"
        class="navbar-mobile-logo hide-on-mobile"
      ></div>
      <div
        style="background-color: transparent"
        class="hide-on-mobile"
        :class="{ active: searchActive }"
      >
        <Searchbar />
      </div>

      <div class="navbar-actions">
        <div style="margin-right: 10%" class="show-on-mobile">
          <img
            class="w-100"
            height="36"
            width="40"
            src="https://cdn.flowrix.app/85a5f8ac/uploads/2024/07/logo.webp"
            alt="Roof Rack and Towbar World"
          />
        </div>

        <button class="menu-icon profile-icon" @click="showSearch">
          <fa class="i" :icon="['fas', 'magnifying-glass']" />
        </button>

        <div class="profile-icon">
          <font-awesome-icon
            class="i hide-on-mobile"
            :icon="['fas', 'phone']"
          />
          <div
            class="text mt-2 hide-on-mobile"
            :class="{ lighttext: showContactNavBar }"
          >
            <p>Call us</p>
            <h6>123 456 45</h6>
          </div>
        </div>
        <div
          style="font-size: 28px; margin-right: 4px; color: #d4d4d4"
          class="show-on-mobile"
        >
          <font-awesome-icon class="i" :icon="['fas', 'car-rear']" />
        </div>

        <div class="profile-icon">
          <font-awesome-icon class="i" :icon="['fab', 'opencart']" />
          <div
            class="text mt-2 hide-on-mobile"
            :class="{ lighttext: showContactNavBar }"
          >
            <p>Shopping Cart</p>
            <h6>$ 0.00</h6>
          </div>
        </div>

        <div class="profile-icon">
          <font-awesome-icon class="i" :icon="['far', 'user']" />
          <div
            class="text mt-2 hide-on-mobile"
            :class="{ lighttext: showContactNavBar }"
          >
            <p>Account</p>
            <h6>Profile</h6>
          </div>
        </div>

        <button class="menu-icon profile-icon" @click="">
          <fa @click="toggleMenu" class="i" :icon="['fas', 'bars']" />
        </button>
      </div>
    </nav>
    <div
      v-if="showSearchbar"
      style="
        display: flex;
        position: fixed;
        top: 10dvh;
        left: 0;
        padding-left: 17%;
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #ff4426;
      "
    >
      <Searchbar />
    </div>
    <div v-if="menuActive" class="mobile-sidebar-menu">
      <font-awesome-icon
        @click="toggleMenu"
        style="float: right; font-size: 26px; margin: 20px; cursor: pointer"
        :icon="['fas', 'xmark']"
      />
      <div class="logo">
        <img
          height="76"
          width="auto"
          src="https://cdn.flowrix.app/85a5f8ac/uploads/2024/07/logo.webp"
          alt="Roof Rack and Towbar World"
        />
      </div>
      <div class="menu-links">
        <ul>
          <li>
            <a href="#">Shop</a>
            <font-awesome-icon :icon="['fas', 'square-plus']" />
          </li>
          <li>
            <a href="#">In-Store Services</a>
            <font-awesome-icon :icon="['fas', 'square-plus']" />
          </li>
          <li><a href="#">Brands</a></li>
          <li><a href="#">Visualizer</a></li>
          <li>
            <a href="#">Stores</a
            ><font-awesome-icon :icon="['fas', 'square-plus']" />
          </li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
import Searchbar from "../utlities/Searchbar.vue";

const searchActive = ref(false);
const menuActive = ref(false);
const showContactNavBar = ref(false);
const showHeader = ref(true);

const dropdowns = ref({
  shop: false,
  inStoreServices: false,
  brands: false,
  visualiser: false,
  stores: false,
  contact: false,
});

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  showContactNavBar.value = scrollTop >= 100; // Show ContactNavBar after scrolling down 100px
  showHeader.value = scrollTop >= 0; // Show Header only at the top of the page
};

const toggleSearch = () => {
  searchActive.value = !searchActive.value;
};

const showSearchbar = ref(false);

const showSearch = () => {
  showSearchbar.value = !showSearchbar.value;
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
.mobile-sidebar-menu {
  position: fixed;
  right: 0;
  top: 0;
  width: 280px;
  height: 100dvh;
  z-index: 999;
  background-color: #fff;
  padding: 50px 10px;
  padding-right: 30px;
}

.mobile-sidebar-menu .logo {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-links {
  margin-top: 40px;
}
.menu-links ul {
  list-style: none;
}

.menu-links ul li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  border-bottom: 1px solid #55555556;
  transition: color 0.4s ease-in-out;
  transition: font-weight 0.1s ease-in-out;
}
.menu-links ul li:hover {
  color: #ff4426;
  font-weight: 600;
}
.menu-links ul li a {
  text-decoration: none;
  color: #004f7b;
}

.light-text p {
  color: #fff;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background-color: #ffffff;
  color: #ff4426;
  position: relative;
}

.darkBg {
  background-color: #004f7b;
}
.light-bg {
  background-color: transparent;
}

.navbar-logo img {
  height: 40px;
}

.navbar-mobile-logo {
  margin-right: 60px;
}
.navbar-mobile-logo img {
  /* display: none; */
  height: 38px;
  width: 38px;
  border-radius: 50%;
}

.navbar-links {
  display: flex;
  align-items: center;
  z-index: 9999;
  display: block;
}

.navbar-links input {
  border: 2px solid #ff4426;
  padding: 0.5rem;
  border-radius: 16px;
  width: auto;
  margin-right: 1rem;
  background-color: #fff;
  color: #fff; /* Ensures the text color is white */
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
  align-items: center;
  gap: 16px;
}

.navbar-actions .profile-icon {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
}

.navbar-actions .profile-icon .i {
  font-size: 40px;
  margin-right: 4px;
  color: #d4d4d4;
}

.navbar-actions .profile-icon .text {
  margin: 0;
  line-height: 0;
  padding-top: 8px;
}

.navbar-actions .profile-icon .text.lighttext p {
  color: #fff;
}
.navbar-actions .profile-icon .text.lighttext h6 {
  color: #f2f2f2;
}

.navbar-actions .profile-icon .text p {
  font-size: 18px;
  font-weight: 500;
  color: #adadad;
  white-space: nowrap;
  text-wrap: nowrap;
}
.navbar-actions .profile-icon .text h6 {
  font-size: 18px;
  color: #2b2b2b;
  font-weight: 600;
  white-space: nowrap;
  text-wrap: nowrap;
}

.navbar-actions .menu-icon {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  color: #fff;
}

.navbar-actions .menu-icon i {
  color: #ffffff;
  z-index: 99999;
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

.hide-on-mobile {
  display: block;
}

/* Media Queries */
@media (max-width: 768px) {
  .hide-on-mobile {
    display: none;
  }
  .navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem 1rem;
    background-color: #004f7b;
  }
  .navbar .navbar-mobile-logo {
    display: none;
  }

  .navbar-links {
    display: none;
  }

  .dropdown {
    display: none;
  }

  .navbar-actions {
    gap: 12px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .navbar-actions .menu-icon {
    display: block;
  }

  .navbar-actions .profile-icon {
    display: block;
    margin-left: 0;
  }
  .navbar-actions .profile-icon .i {
    height: 26px;
    width: 26px;
    border-radius: 8px;
    margin-right: 8px;
  }
  .navbar-logo img {
    display: none;
  }
  .navbar-mobile-logo img {
    display: block;
  }
}
</style>
