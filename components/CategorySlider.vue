<template>

  <div>
    <div class="get_in_thouch">
      <a href="" style="color: white; font-size: 25px; transition: 0.6s cubic-bezier(0.25, 1, 0.5, 1); text-decoration: none;"> Get in Touch</a>
    </div>

  
  <div style="width: 100%" id="category-slider"  v-if="!isMobileMode">
    <h2 class="cu-heading p-5">Shop By Categories</h2>
    <b-carousel :interval="0" controls indicators>
      <b-carousel-slide
        v-for="(categoryChunk, index) in chunkedCategories"
        :key="index"
        class="pointer hidden-image"
        img-src="https://res.cloudinary.com/dpkreativ/image/upload/b_auto,c_mpad,h_480,w_1024/v1646483551/wallpapers/car.jpg"
      >
        <div class="d-flex flex-wrap justify-content-center" style="gap: 5%">
          <b-card-group deck v-for="item in categoryChunk" :key="item.model">
            <b-card
              class="align-items-center hover-effect"
              rounded
              :img-src="item.url"
              img-alt="Image"
              img-top
            >
              <div class="overlay">
                <fa :icon="['fas', 'arrow-right']" class="next-icon" />
              </div>
              <b-card-text class="black card-title">
                <h4 class="custom-black">
                  <b>{{ item.name }}</b>
                </h4>
                <h5>
                  <!-- <b>{{ item.title }}</b> -->
                </h5>
                <p class="custom-black">
                  <b class="pr-2 custom-red">({{ item.items }} items)</b>
                </p>
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </b-carousel-slide>
    </b-carousel>

  </div>


  <div v-if="isMobileMode">
    <div class="d-flex justify-content-between align-items-center p-4  ">
      <h2 class="cu-heading  pl-0">Shop By Categories</h2>
      <p class="view"> view all</p>
    </div>

      <div class="d-flex flex-column">
        <div class="pl-3 d-flex flex-column" style="gap: 1px;">
          <div class=" miniSlider d-flex justify-content-between align-items-center "  v-for="(item, index) in chunkedCategories[0]" :key="index">
            <div class="  d-flex  align-items-center " style="gap: 10px;">

              <img :src="item.url" alt="" style="width: 50px; height: 50px;">
              <p class="mb-0" style="font-weight: 700; color: black;">{{ item.name }} </p>
            </div>
            <!-- <i class="fa fa-angle-right"></i> -->
            <font-awesome-icon class="mr-4" :icon="['fas', 'angle-right']" />
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import "vue3-carousel/dist/carousel.css";

const isMobileMode = ref(false);

const updateIsMobileMode = () => {
  isMobileMode.value = window.innerWidth <= 600;
};

onMounted(() => {
  updateIsMobileMode();
  window.addEventListener('resize', updateIsMobileMode);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsMobileMode);
});

const categories = ref([
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/07/122217_0818d250-00fa-4b25-9994-7137405c4098.webp",
    name: "4WD & Camping",
    items: 247,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/02/camping.jpg",
    name: "Towbars",
    items: 434,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/02/s-l1600.jpg",
    name: "Bars",
    items: 100,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/06/207572.webp",
    name: "Roof Mount",
    items: 19,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/10/roof-rack-thule-lock-barrel-core-and-key.webp",
    name: "Roof Boxes",
    items: 4123,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/06/52100-00.webp",
    name: "Kayak Racks",
    items: 2145,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/12/555494.webp",
    name: "Keys and Locks",
    items: 107,
  },

  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/07/122217_0818d250-00fa-4b25-9994-7137405c4098.webp",
    name: "4WD & Camping",
    items: 247,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/02/camping.jpg",
    name: "Towbars",
    items: 434,
  },
  // {
  //   url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/02/s-l1600.jpg",
  //   name: "Bars",
  //   items: 100,
  // },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/06/207572.webp",
    name: "Roof Mount",
    items: 19,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/10/roof-rack-thule-lock-barrel-core-and-key.webp",
    name: "Roof Boxes",
    items: 4123,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/06/52100-00.webp",
    name: "Kayak Racks",
    items: 2145,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/12/555494.webp",
    name: "Keys and Locks",
    items: 107,
  },


  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/07/122217_0818d250-00fa-4b25-9994-7137405c4098.webp",
    name: "4WD & Camping",
    items: 247,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/02/camping.jpg",
    name: "Towbars",
    items: 434,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/02/s-l1600.jpg",
    name: "Bars",
    items: 100,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/06/207572.webp",
    name: "Roof Mount",
    items: 19,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/10/roof-rack-thule-lock-barrel-core-and-key.webp",
    name: "Roof Boxes",
    items: 4123,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/06/52100-00.webp",
    name: "Kayak Racks",
    items: 2145,
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/12/555494.webp",
    name: "Keys and Locks",
    items: 107,
  },
 
 
]);

function chunkArray(array: any[], chunkSize: number) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

const chunkedCategories = chunkArray(categories.value, 10);
</script>

<style>
.get_in_thouch {
    position: fixed;
    top: calc(50vh - 50px);
    right: -50px;
    background: #004f7b;
    color: #fff;
    z-index: 999;
    transform: rotate(90deg);
    padding: 5px 10px;
    width: 160px;
    text-align: center;
    line-height: 1;
}
a:hover{
  text-decoration: none;
}
.get_in_thouch:hover {
  background-color: red;

}
.view{
  color: #365072;
}
.cu-heading {
  font-weight: 600;
  color: #004f7b;
  font-size: 50px;
  padding-left: 50px;
}

#category-slider .carousel-caption {
  top: 10px;
}

#category-slider .carousel-caption{
  left: 10%;
  right: 10%;
}

#category-slider .carousel-control-next-icon {
  padding: 25px; /* Adjust padding as needed */
  background-color: rgb(83, 78, 78);
  background-image: none;
  border-radius: 50px;
}

#category-slider .carousel-control-next-icon:hover {
  background-color: red !important;
}

#category-slider .carousel-control-next-icon::before {
  content: ">"; /* Add the greater than sign */
  font-size: 20px; /* Adjust the font size as needed */
  color: white;
  font-weight: bolder;
  position: absolute;
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%);
}

#category-slider .carousel-control-prev-icon {
  padding: 25px; /* Adjust padding as needed */
  background-color: rgb(83, 78, 78);
  background-image: none;
  border-radius: 50px;
}

#category-slider .carousel-control-prev-icon:hover {
  background-color: red !important;
}

#category-slider .carousel-control-prev-icon::before {
  content: "<"; /* Add the greater than sign */
  font-size: 20px; /* Adjust the font size as needed */
  color: white;
  font-weight: bolder;
  position: absolute;
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%);
}

#category-slider .carousel-inner {
}

#category-slider .carousel-item {
  min-height: 520px;
  max-height: 700px;
}

#category-slider .hidden-image > img {
  opacity: 0 !important;
}
</style>

<style scoped>

.miniSlider{
  background: #f7f7f7;
    border: 1px solid #004d78;
    border-radius: 10px;
    margin: 5px 10px;
    overflow: hidden;
}
:root {
  --primary: #221e21;
}
* {
  font-family: "Rajdhani";
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
  width: 210px;
  background-color: transparent;
  border: none;
}
.card {
  border-radius: 5px;
  position: relative;
  overflow: hidden;
}
.card > img {
  width: 200px;
  height: 200px;
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

.hover-effect .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 98%;
  height: 56%;
  /* transform: translate(28%, 0%); */
  /* background-color: rgba(0, 0, 0, 0.5); */
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.hover-effect:hover .overlay {
  opacity: 1;
}

.next-icon {
  color: white;
  font-size: 3rem;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.next-icon:hover {
  background-color: #ff2400;
  cursor: pointer;
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
