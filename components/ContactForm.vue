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
        <div class="floating-cover hide-on-mobile"></div>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
.content {
  padding: 2rem 32rem;
  margin-bottom: 30px;
  position: relative;
}

.content .floating-div {
  position: absolute;
  width: 220px;
  height: 220px;
  border: 8px solid #ff4426;
  border-radius: 12px;
  right: 10%;
  top: 40%;
  z-index: -1;
}

.form-cover .floating-cover {
  position: absolute;
  width: 220px;
  height: 220px;
  background-color: #ff4426;
  left: 16.7%;
  bottom: 12.1%;
  border-radius: 0 0 0 16px;
  z-index: -1;
}

.content h1 {
  font-weight: 600;
  font-size: 46px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
}

.content p {
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.contact-form {
  padding: 1rem 20rem;
  width: fit-content;
  display: flex;
  grid-template-columns: 3 1fr;
  flex-grow: 1;
}

.contact-form input {
  padding: 1rem 2rem;
  width: 30%;
  margin: 8px 16px;
  border: 3px solid #dbdbdd;
  border-radius: 12px;
}

.contact-form select {
  padding: 1rem 2rem;
  width: 30.3%;
  margin: 8px 16px;
  border: 3px solid #dbdbdd;
  background-color: #f0f0f0;
  border-radius: 12px;
}

.contact-form textarea {
  padding: 1rem 2rem;
  width: 97.2%;
  margin: 8px 16px;
  border: 3px solid #dbdbdd;
  border-radius: 12px;
}

.form-cover {
  background-color: rgb(252, 252, 252);
  padding: 12px 18px;
  border-radius: 12px;
  border-top: 6px solid #ff4426;
  box-shadow: 0 0 8px 1px #9999996c;
}

.hide-on-mobile {
  display: block;
}

.show-on-mobile {
  display: none;
}
@media (max-width: 1240px) {
  .content {
    padding: 1rem 10rem;
    position: relative;
  }

  .content .floating-div {
    display: block;
    top: 86%;
  }

  .content h1 {
    font-size: 32px;
  }

  .content p {
    font-size: 18px;
  }

  .contact-form {
    padding: 1rem 2rem;
  }

  .contact-form input {
    padding: 1rem;
    width: 45.6%;
  }

  .contact-form select {
    width: 94.1%;
  }

  .contact-form textarea {
    padding: 1rem;
    width: 94.1%;
  }

  .form-cover {
    padding: 6px 8px;
    border-top: 3px solid #ff4426;
  }
  .hide-on-mobile {
    display: none;
  }
  .show-on-mobile {
    display: block;
  }
}
@media (max-width: 768px) {
  .content {
    padding: 1rem;
    position: relative;
  }

  .content .floating-div {
    display: none;
  }

  .content h1 {
    font-size: 26px;
  }

  .content p {
    font-size: 13px;
  }

  .contact-form {
    padding: 1rem 2rem;
  }

  .contact-form input {
    padding: 1rem;
    width: 90.6%;
  }

  .contact-form select {
    width: 90.6%;
  }

  .contact-form textarea {
    padding: 1rem;
    width: 97.2%;
  }

  .form-cover {
    padding: 6px 8px;
    border-top: 3px solid #ff4426;
  }
  .hide-on-mobile {
    display: none;
  }
  .show-on-mobile {
    display: block;
  }
}
</style>
