<script setup lang="ts"></script>
<template>
  <div class="footer">
    <div class="container">
      <div class="row pb-5 upperfooter">
        <div class="col-lg-4 col-md-4 col-sm-12">
          <div class="footer-about">
            <div class="footerlogo">
              <NuxtLink to="/">
                <img src="../assets/images/logofooter.webp" alt="logofooter" />
              </NuxtLink>
            </div>
            <div class="footerphone">
              <span>(02) 8999 8878</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12"></div>
        <div class="col-lg-4 col-md-4 col-sm-12">
          <div class="footer-useful-links">
            <h3 class="footer-head">Customer Care</h3>
            <ul class="row p-0">
              <div class="col-6">
                <li>About</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
              </div>
              <div class="col-6">
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
          <div class="my-2 col-sm-auto order-md-first order-last left text-center">
            Powered by <span>FLOWRIX</span> | Developmed by <span>iVersion</span>
          </div>
          <div class="my-2 col-sm-auto text-center center">
            <span class="mt-2 ">© Roof Rack and Towbar World.</span>
          </div>
          <div class="my-2 col-sm-auto right text-center">
            <img src="../assets/images/payments.png" alt="">
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
.left, .center, .right {
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
}
.left span {
  color: red;
}

@media screen and (max-width: 767px) {
  .footer-head {
    padding: 20px 0;
  }
}
</style>
