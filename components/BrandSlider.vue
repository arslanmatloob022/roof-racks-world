<template>
  <div>
    <h2 class="cu-heading p-5">Shop By Brand</h2>
    <div
      style="width: 100%; background-color: rgb(246, 247, 248)"
      id="brand-slider"
    >
      <b-carousel :interval="500" controls indicators>
        <b-carousel-slide
          v-for="(categoryChunk, index) in chunkedCategories"
          :key="index"
          class="pointer hidden-image"
          img-src="https://res.cloudinary.com/dpkreativ/image/upload/b_auto,c_mpad,h_480,w_1024/v1646483551/wallpapers/car.jpg"
        >
          <div
            class="d-flex flex-wrap justify-content-center"
            style="gap: 20px"
          >
            <div deck v-for="item in categoryChunk" :key="item.model">
              <div
                class="d-flex flex-column align-items-center"
                style="gap: 20px; cursor: pointer;"
              >
                <div class="image-bg" style="width: 300px">
                  <img :src="item.url" alt="" />
                </div>
                <p class="cutome-badge">{{ item.name }} Products</p>
              </div>
            </div>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { ref, defineComponent } from "vue";

const categories = ref([
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/02/yakima.png",
    name: "4WD & Camping",
    items: 247,
  },
  {
    url: "	https://cdn.flowrix.app/85a5f8ac/uploads/2022/02/rhino-rack.png",
    name: "Towbars",
    items: 434,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/02/rola.png",
    name: "Bars",
    items: 100,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/12/autosafe.jpg",
    name: "Roof Mount",
    items: 19,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/02/erich-jaeder.png",
    name: "Roof Boxes",
    items: 43,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/02/proseries.png",
    name: "Kayak Racks",
    items: 21,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/02/redarc.png",
    name: "Keys and Locks",
    items: 107,
  },

  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/02/yakima.png",
    name: "4WD & Camping",
    items: 247,
  },
  {
    url: "	https://cdn.flowrix.app/85a5f8ac/uploads/2022/02/rhino-rack.png",
    name: "Towbars",
    items: 434,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/02/rola.png",
    name: "Bars",
    items: 100,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/12/autosafe.jpg",
    name: "Roof Mount",
    items: 19,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/02/erich-jaeder.png",
    name: "Roof Boxes",
    items: 43,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/02/proseries.png",
    name: "Kayak Racks",
    items: 21,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/02/redarc.png",
    name: "Keys and Locks",
    items: 107,
  },

  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/02/proseries.png",
    name: "Kayak Racks",
    items: 21,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/12/autosafe.jpg",
    name: "Roof Mount",
    items: 19,
  },
  
]);

function chunkArray(array: any[], chunkSize: number) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

const chunkedCategories = chunkArray(categories.value, 8);
</script>

<style>
.cutome-badge {
  font-size: 16px;
  height: unset;
  display: table-cell;
  padding: 5px 5px;
  background-color: #ff2400;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
}
.cutome-badge:hover {
  background-color: black;
}
.cu-heading {
  font-weight: 600;
  color: #004f7b;
  font-size: 50px;
  padding-left: 50px;
}

@media (max-width: 760px) {
  .cu-heading {
    font-size: 30.5px !important; /* Reduce font size by 25% if screen width is less than 760px */
  }
}

#brand-slider .carousel-caption {
  top: 10px;
}

#brand-slider .carousel-control-next-icon {
  padding: 25px; /* Adjust padding as needed */
  background-color: rgb(83, 78, 78);
  background-image: none;
  border-radius: 50px;
}

#brand-slider .carousel-control-next-icon:hover {
  background-color: red !important;
}

#brand-slider .carousel-control-next-icon::before {
  content: ">"; /* Add the greater than sign */
  font-size: 20px; /* Adjust the font size as needed */
  color: white;
  font-weight: bolder;
  position: absolute;
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%);
}

#brand-slider .carousel-control-prev-icon {
  padding: 25px; /* Adjust padding as needed */
  background-color: rgb(83, 78, 78);
  background-image: none;
  border-radius: 50px;
}

#brand-slider .carousel-control-prev-icon:hover {
  background-color: red !important;
}

#brand-slider .carousel-control-prev-icon::before {
  content: "<"; /* Add the greater than sign */
  font-size: 20px; /* Adjust the font size as needed */
  color: white;
  font-weight: bolder;
  position: absolute;
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%);
}

#brand-slider .carousel-inner {
}

#brand-slider .carousel-item {
  min-height: 520px;
  max-height: 600px;
}

#brand-slider .hidden-image > img {
  opacity: 0 !important;
}
</style>

<style scoped>
:root {
  --primary: #221e21;
}
* {
  font-family: "Rajdhani";
}
.image-bg {
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.custom-black {
  color: #000000; /* or any custom black shade */
}
.custom-red {
  color: #ff2400; /* or any custom black shade */
}
.carousel-inner {
  overflow: visible !important;
}

.full-price {
  text-decoration: line-through;
}
.card-deck > .card {
  width: 310px;
  background-color: transparent;
  border: none;
}
.card {
  border-radius: 5px;
}
.card > img {
  width: 200px;
  box-shadow: 0 0 5px 1px rgba(0, 79, 123, 0.3215686275);
  border-radius: 50%;
}
.card-title {
  color: #365072;
}
.card-title :hover {
  color: #ff2400;
}
.circular-image {
  width: 300px;
  height: 300px;
  border-radius: 40px;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  border: 2px solid var(--primary);
  color: var(--primary);
  border-radius: 50%;
  margin-top: -25px;
  margin-left: 25px;
  cursor: pointer;
  line-height: 48px;
  text-align: center;
  text-indent: -2px;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.prev:hover,
.next:hover {
  background: var(--primary);
  color: #fff;
  transform: scale(1.2);
}

.prev:active,
.next:active {
  transform: translate(0, 3px) scale(1.2);
}

.next {
  right: 0;
  margin-left: auto;
  margin-right: 25px;
  text-indent: 2px;
}

.dots {
  position: fixed;
  display: block;
  width: 100%;
  text-align: center;
  bottom: 20px;
}

.dots li {
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background: var(--primary);
  opacity: 0.2;
  display: inline-block;
  margin: 0 3px;
  cursor: pointer;
  transition: opacity 0.4s ease-in-out,
    width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.dots li.active {
  width: 22px;
  opacity: 1;
}

.slides {
  font-size: 20px;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

@media (min-width: 600px) {
  .slides {
    font-size: 80px;
  }
}

@media (min-width: 900px) {
  .slides {
    font-size: 140px;
  }
}

.slides .animated {
  transition: all 400ms;
  position: absolute;
  transform: translate(-50%, -50%);
}

.slides .slide-in {
  opacity: 0;
  transform: translate(-40%, -50%);
}

.slides .slide-in-active {
  transition-delay: 150ms;
}

.slides .slide-out {
  opacity: 1;
}

.slides .slide-out-active {
  opacity: 0;
  transform: translate(-60%, -50%);
}

.buttons {
  position: absolute;
  top: 10px;
  left: 10px;
}

button {
  padding: 10px;
  outline: none;
  border: none;
  -webkit-appearance: none;
  background: var(--primary);
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
}

button:disabled {
  opacity: 0.2;
  cursor: no-drop;
}
</style>
