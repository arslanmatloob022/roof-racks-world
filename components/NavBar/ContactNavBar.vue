<template>
  <nav class="navbar" :class="showContactNavBar ? 'darkBg' : ''">
    <div v-if="showContactNavBar" class="navbar-mobile-logo hide-on-mobile">
      <img
        class="w-100"
        src="@/images/mobile-logo.png"
        alt="Roof Rack and Towbar World"
      />
    </div>

    <div class="navbar-links" :class="{ active: menuActive }">
      <Searchbar />
    </div>
    <div class="navbar-actions">
      <div class="profile-icon">
        <font-awesome-icon class="i" :icon="['fas', 'user']" />
        <div
          class="text mt-2 hide-on-mobile"
          :class="{ lighttext: showContactNavBar }"
        >
          <p>Account</p>
          <h6>Profile</h6>
        </div>
      </div>
      <div class="profile-icon mr-4">
        <font-awesome-icon class="i" :icon="['fas', 'cart-shopping']" />
        <div
          class="text mt-2 hide-on-mobile"
          :class="{ lighttext: showContactNavBar }"
        >
          <p>Shopping Cart</p>
          <h6>$ 0.00</h6>
        </div>
      </div>
      <div class="profile-icon mr-4">
        <font-awesome-icon class="i" :icon="['fas', 'phone']" />
        <div
          class="text mt-2 hide-on-mobile"
          :class="{ lighttext: showContactNavBar }"
        >
          <p>Call Us</p>
          <h6>+123 45679 128</h6>
        </div>
      </div>

      <fa :icon="['fab', 'cart']" />
      <button class="menu-icon" @click="toggleMenu">
        <fa :icon="['fas', 'cart-shopping']" />
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
import Searchbar from "../utlities/Searchbar.vue";

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
}

.darkBg {
  background-color: #004f7b;
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
}

.navbar-links input {
  border: 2px solid #ff4426;
  padding: 0.5rem;
  border-radius: 16px;
  width: 520px;
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
  margin-right: 10px;
  margin-right: 36px;
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
  .navbar-actions {
    margin-left: 14%;
  }

  .navbar-actions .menu-icon {
    display: block;
  }

  .navbar-actions .profile-icon {
    display: block;
    margin-left: 5%;
  }
  .navbar-actions .profile-icon .i {
    height: 26px;
    width: 26px;
    border-radius: 8px;
  }
  .navbar-logo img {
    display: none;
  }
  .navbar-mobile-logo img {
    display: block;
  }
}
</style>
