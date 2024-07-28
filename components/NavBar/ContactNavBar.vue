<template>
  <nav class="navbar">
    <div class="navbar-logo"></div>

    <div class="navbar-links" :class="{ active: menuActive }">
      <input type="text" placeholder="Search..." />
    </div>
    <div class="navbar-actions">
      <div class="profile-icon">
        <img src="@/images/woman-7531315_640.png" alt="" />
        <div class="text hide-on-mobile">
          <p><span> Login </span></p>
        </div>
      </div>
      <div class="profile-icon mr-4">
        <img class="mt-2" src="@/images/cart-64.png" alt="" />
        <div class="text mt-2 hide-on-mobile">
          <p>
            Shopping Cart <br />
            <span>$0.00</span>
          </p>
        </div>
      </div>
      <div class="profile-icon mr-4">
        <img class="mt-2" src="@/images/call-50.png" alt="" />
        <div class="text mt-2 hide-on-mobile">
          <p>
            Call Us <br />
            <span>+123 45679 128</span>
          </p>
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
import { ref } from "vue";

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
  padding: 0.5rem 2rem;
  background-color: #ffffff;
  color: #ff4426;
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
  display: flex;
  align-items: center;
  z-index: 9999;
}

.navbar-links input {
  border: 2px solid #ff4426;
  padding: 0.5rem;
  border-radius: 16px;
  width: 320px;
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
  justify-content: end;
  justify-content: center;
  gap: 16px;
}

.navbar-actions .profile-icon {
  background: none;
  border: none;
  cursor: pointer;
  width: max-content;
  display: flex;
  gap: 4px;
  margin-right: 10px;
  margin-right: 36px;
}

.navbar-actions .profile-icon img {
  height: 36px;
  width: 36px;
  border-radius: 4px;
}

.navbar-actions .profile-icon .text {
  margin: 0;
}

.navbar-actions .profile-icon .text p {
  font-size: 15px;
  color: #555;
  white-space: nowrap;
  text-wrap: nowrap;
}
.navbar-actions .profile-icon .text p span {
  font-size: 15px;
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

  .navbar-actions .menu-icon {
    display: block;
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
