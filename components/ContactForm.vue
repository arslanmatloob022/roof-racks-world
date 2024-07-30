<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <div>
    <div class="content">
      <h1>Get in Touch</h1>
      <p>
        Whether you’re new to carrying a load or a seasoned pro, we share your
        enthusiasm for the trails, slopes, waterways and every reason why you
        need carry a load, and we know the products and solutions to make it
        hassle free – so get in touch with us to discuss how we can make it
        easier for you to get out on your adventure!
      </p>
      <div class="floating-div"></div>
    </div>
    <div class="contact-form">
      <div class="form-cover">
        <div class="row">
          <input type="text" placeholder="First Name*" />
          <input type="text" placeholder="Last Name*" />
          <input type="mail" placeholder="Email*" />
          <input type="phone*" placeholder="Last Name*" />
          <input type="text" placeholder="Postcode*" />
          <input type="text" placeholder="Make / Model*" />
          <input type="text" placeholder="Shop And Number Of Doors" />
          <input type="text" placeholder="Year / Series / Badge" />
          <select placeholder="Select Make">
            <option href="#" value="1">BMW</option>
            <option href="#" value="2">Mercedes</option>
            <option href="#" value="3">Honda</option>
            <option href="#" value="4">Toyota</option>
            <option href="#" value="5">KIA</option>
          </select>
          <textarea
            name="message"
            rows="5"
            id=""
            placeholder="Message"
          ></textarea>
        </div>
        <div class="floating-cover"></div>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped></style>
