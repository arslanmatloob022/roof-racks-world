<script setup lang="ts">
import { ref } from "vue";
const isActive = ref(false);
const searchQuery = ref("");

const toggleSearch = () => {
  isActive.value = !isActive.value;
};
</script>
<template>
  <div>
    <div class="row">
      <div class="col-lg-1 col-md-1 col-0"></div>
      <div class="col-lg-10 col-md-10 col-10">
        <div class="subscription">
          <h1>Subscribe Now</h1>
          <div class="subscription-input">
            <div class="search-container">
              <div
                class="search-bar"
                :class="{ active: isActive }"
                @click="toggleSearch"
              >
                <input
                  type="text"
                  v-model="searchQuery"
                  placeholder="Email"
                  @click.stop
                />
                <button class="i">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-1 col-md-1 col-0"></div>
    </div>
    <div class="footer">
      <div class="container">
        <div class="row pb-5 upperfooter">
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="footer-about">
              <div class="footerlogo">
                <NuxtLink to="/">
                  <img
                    src="../assets/images/logofooter.webp"
                    alt="logofooter"
                  />
                </NuxtLink>
              </div>
              <div class="footerphone hide-on-mobile">
                <span>(02) 8999 8878</span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12"></div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="footer-useful-links">
              <h3 class="footer-head hide-on-mobile">Customer Care</h3>
              <ul class="row p-0">
                <div class="col-6">
                  <li>Customer care</li>
                  <li>About</li>
                  <li>Terms of Use</li>
                  <li>Privacy Policy</li>
                </div>
                <div class="col-6">
                  <li>(02) 8999 8878</li>
                  <li>Returns & Exchanges</li>
                  <li>Contact Us</li>
                  <li>Shipping Policy</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div
              class="my-2 col-sm-auto order-md-first order-last left text-center"
            >
              Powered by <span>FLOWRIX</span> | Developmed by
              <span>iVersion</span>
            </div>
            <div class="my-2 col-sm-auto text-center center">
              <span class="mt-2">© Roof Rack and Towbar World.</span>
            </div>
            <div class="my-2 col-sm-auto right text-center">
              <img src="../assets/images/payments.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.footer {
  background-color: #000;
  color: #fff;
}
.upperfooter {
  padding-top: 100px;
}
.footer-about img {
  width: 100%;
}
.footerlogo {
  margin-bottom: 30px;
}
.footerphone span {
  font-size: 22px;
  line-height: 22px;
  font-weight: 700;
  color: #fff;
}
.footer-head {
  margin-bottom: 30px;
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  color: #fff;
}
li {
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  list-style: none;
  color: #fff;
  margin-bottom: 12px;
}
.footer-bottom {
  padding: 15px 0px;
  border-top: 2px solid #4d4d4d;
}
.left,
.center,
.right {
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
}
.left span {
  color: red;
}

@media (max-width: 768px) {
  .footer-head {
    padding: 20px 0;
    margin-bottom: 12px;
  }
  .footerlogo {
    margin-bottom: 60px;
  }
  li {
    text-align: center;
  }
  .footer-about img {
    width: 70%;
    margin-left: 15%;
  }
}
</style>
<style scoped>
.subscription {
  z-index: 1;
  transform: translateY(50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff4423;
  padding: 26px 38px;
  border-radius: 16px;
}
.subscription h1 {
  color: #fff;
}

.search-container {
  position: relative;
  width: 900px;
}

.search-bar {
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 34px;
  padding: 0 0 0 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.search-bar.active {
  width: 360px;
}

.search-bar input {
  border: none;
  outline: none;
  flex: 1;
  font-size: 16px;
  padding: 1px;
}

.search-bar .i {
  margin-left: 0;
  background-color: #000;
  border-radius: 34px;
  color: #fff;
  font-size: 20px;
  transition: transform 0.3s ease;
  padding: 16px 34px;
}

@media (max-width: 768px) {
  .subscription {
    transform: translateY(25%);
    flex-direction: column;
    margin-left: 10%;
  }
  .subscription h1 {
    color: #fff;
    font-size: 16px;
  }

  .search-container {
    position: relative;
    width: 60%;
  }
  .search-bar {
    padding: 0 0 0 20px;
    margin-left: 25%;
    width: 100%;
    display: flex;
    background-color: transparent;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .search-bar input {
    background-color: #fff;
    border: none;
    padding: 8px 14px;
    border-radius: 18px;
  }
  .search-bar button {
    margin-top: 12px;
    padding: 16px 20px;
  }
  .search-bar .i {
    border-radius: 34px;
    font-size: 12px;
    transition: transform 0.3s ease;
    padding: 6px 14px;
  }
}
</style>
