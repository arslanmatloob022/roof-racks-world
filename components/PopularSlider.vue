<template>
  <div style="width: 100%; " id="popular-slider">
    <h1 class="cu-heading">Popular Products </h1>
    <b-carousel :interval="0" controls indicators>
      <b-carousel-slide v-for="(categoryChunk, index) in chunkedCategories" :key="index" class="pointer hidden-image"
        img-src="https://res.cloudinary.com/dpkreativ/image/upload/b_auto,c_mpad,h_480,w_1024/v1646483551/wallpapers/car.jpg">
        <div class="d-flex flex-wrap justify-content-center" style="gap: 30px">
          <b-card-group deck v-for="(item, index) in categoryChunk" :key="index">
            <!--  -->
            <b-card class="text-left" rounded>
              <div style="position: relative;" class="hover-effect">
                <img :src="item.url" style="width: 100%; height: 270px;" alt="">
                <div class="overlay">

                  <div class="d-flex flex-column" style="gap: 10px; width: 90%;">
                    <div class="d-flex align-items-center cart-badge" >
                      <p  class="mb-0 p-2 pl-3 pr-3 icon-bage" >
                        <fa :icon="['fas', 'arrow-right']" class="next-icon" />
                      
                      </p>
                      <h6 style="font-weight: 600;" class="pl-2 pr-2 mb-0">ADD TO CART</h6>
                    </div>

                    <div class="d-flex align-items-center cart-badge" >
                      <p  class="mb-0 p-2  pl-3 pr-3 icon-bage">
                        <fa :icon="['fas', 'arrow-right']" class="next-icon" />

                      </p>
                      <h6 style="font-weight: 600;" class="pl-2 pr-2 mb-0">QUICK VIEW</h6>
                    </div>

                    <div class="d-flex align-items-center cart-badge" >
                      <p  class="mb-0 p-2 pl-3 pr-3  icon-bage">
                        <fa :icon="['fas', 'arrow-right']" class="next-icon" />

                      </p>
                      <h6 style="font-weight: 600;" class="pl-2 pr-2 mb-0">COMPARE</h6>
                    </div>
                  </div>
                  
                </div>
              </div>
              <b-card-text class="text-left black card-title pl-3 pr-3 pt-3">
                <p class="custom-black">
                  M-SKU: <b>{{ item.model }}</b>
                </p>
                <h5>
                  <b>{{ item.title }}</b>
                </h5>
                <p class="custom-black">
                  <b class="pr-2">{{ item.discount_price }}</b>
                  <span class="custom-red full-price">{{ item.price }}</span>
                </p>
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import "vue3-carousel/dist/carousel.css";

const categories = ref([
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/06/691453.webp",
    model: "F2",
    title: "F2 - Preparation / Installation / Servicing Charges Base Unit",
    discount_price: null,
    price: "$80.00",
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/06/082343_696928(1).webp",
    model: "710600",
    title: "Thule 710600 Flush Rail Evo Foot For Vehicles 4-Pack",
    discount_price: "$249.95",
    price: "$239.00",
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/06/081339_510917(1).webp",
    model: "598002",
    title: "Thule ProRide Bike Roof Rack Black",
    discount_price: null,
    price: "$449.95",
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/06/691453.webp",
    model: "598001",
    title: "Thule ProRide Roof Bike Rack Black/Aluminium",
    discount_price: "$999.95",
    price: "$329.00",
  },

  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/06/691453.webp",
    model: "F2",
    title: "F2 - Preparation / Installation / Servicing Charges Base Unit",
    discount_price: null,
    price: "$80.00",
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/06/082343_696928(1).webp",
    model: "710600",
    title: "Thule 710600 Flush Rail Evo Foot For Vehicles 4-Pack",
    discount_price: "$249.95",
    price: "$239.00",
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/06/081339_510917(1).webp",
    model: "598002",
    title: "Thule ProRide Bike Roof Rack Black",
    discount_price: null,
    price: "$449.95",
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/06/691453.webp",
    model: "598001",
    title: "Thule ProRide Roof Bike Rack Black/Aluminium",
    discount_price: "$999.95",
    price: "$329.00",
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/06/691453.webp",
    model: "F2",
    title: "F2 - Preparation / Installation / Servicing Charges Base Unit",
    discount_price: null,
    price: "$80.00",
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/06/082343_696928(1).webp",
    model: "710600",
    title: "Thule 710600 Flush Rail Evo Foot For Vehicles 4-Pack",
    discount_price: "$249.95",
    price: "$239.00",
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/06/081339_510917(1).webp",
    model: "598002",
    title: "Thule ProRide Bike Roof Rack Black",
    discount_price: null,
    price: "$449.95",
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/06/691453.webp",
    model: "598001",
    title: "Thule ProRide Roof Bike Rack Black/Aluminium",
    discount_price: "$999.95",
    price: "$329.00",
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/06/691453.webp",
    model: "F2",
    title: "F2 - Preparation / Installation / Servicing Charges Base Unit",
    discount_price: null,
    price: "$80.00",
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/06/082343_696928(1).webp",
    model: "710600",
    title: "Thule 710600 Flush Rail Evo Foot For Vehicles 4-Pack",
    discount_price: "$249.95",
    price: "$239.00",
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/06/081339_510917(1).webp",
    model: "598002",
    title: "Thule ProRide Bike Roof Rack Black",
    discount_price: null,
    price: "$449.95",
  },
  {
    url: "https://cdn.flowrix.app/85a5f8ac/uploads/2022/06/691453.webp",
    model: "598001",
    title: "Thule ProRide Roof Bike Rack Black/Aluminium",
    discount_price: "$999.95",
    price: "$329.00",
  },

]);

function chunkArray(array: any[], chunkSize: number) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}
const chunkedCategories = ref(<any>[])
chunkedCategories.value = chunkArray(categories.value, 8);


const isMobileMode = ref(false);

const updateIsMobileMode = () => {
  isMobileMode.value = window.innerWidth <= 600;
  if(isMobileMode.value){

    chunkedCategories.value = chunkArray(categories.value, 1);
  }else{
    chunkedCategories.value = chunkArray(categories.value, 8);

  }

};

onMounted(() => {
  updateIsMobileMode();
  window.addEventListener('resize', updateIsMobileMode);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsMobileMode);
});
</script>

<style>
#popular-slider .carousel-caption {
  top: 20px;
}

#popular-slider .carousel-control-next-icon {
  padding: 25px;
  /* Adjust padding as needed */
  background-color: rgb(83, 78, 78);
  background-image: none;
  border-radius: 50px;
}

#popular-slider .carousel-control-next-icon:hover {
  background-color: red !important;
}

#popular-slider .carousel-control-next-icon::before {
  content: ">";
  /* Add the greater than sign */
  font-size: 20px;
  /* Adjust the font size as needed */
  color: white;
  font-weight: bolder;
  position: absolute;
  top: 50%;
  /* Center vertically */
  left: 50%;
  /* Center horizontally */
  transform: translate(-50%, -50%);
}

#popular-slider .carousel-control-prev-icon {
  padding: 25px;
  /* Adjust padding as needed */
  background-color: rgb(83, 78, 78);
  background-image: none;
  border-radius: 50px;
}

#popular-slider .carousel-control-prev-icon:hover {
  background-color: red !important;
}
@media (max-width: 600px) {
  #popular-slider .carousel-control-prev, .carousel-control-next{
    display: none !important;
  }
 
}

#popular-slider .carousel-control-prev-icon::before {
  content: "<";
  /* Add the greater than sign */
  font-size: 20px;
  /* Adjust the font size as needed */
  color: white;
  font-weight: bolder;
  position: absolute;
  top: 50%;
  /* Center vertically */
  left: 50%;
  /* Center horizontally */
  transform: translate(-50%, -50%);
}

#popular-slider .carousel-inner {}

#popular-slider .carousel-item {
  min-height: 520px;
}

#popular-slider .hidden-image>img {
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
.cart-badge{
  background-color: #000000;
}
.cart-badge:hover {
  background-color: #ff2400;
}
.cart-badge:hover  .icon-bage{
  background-color: #000000;
}
.icon-bage{
  background-color: #ff2400;

}
.icon-bage:hover{
  background-color: #000000;

}
.carparts_product_grid .product_action_btns .icon {
    width: 50px;
    height: 50px;
    display: flex;
    font-size: 16px;
    text-align: center;
    align-items: center;
    border-radius: 0;
    font-weight: 700;
    color: #fff;
    justify-content: center;
    background-color: #ff2400;
    box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.07);
}

.product_action_btns {
  top: 50%;
  left: 0px;
  right: 0px;
  z-index: 1;
  position: absolute;
  transform: translateY(-50%);
  list-style: none;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.product_action_btns li {
  opacity: 0;
  transform: translateY(40px);
  width: 100%;
}

.product_action_btns li:not(:last-child) {
  margin-right: 8px;
}

.product_action_btns span {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #404040;
  margin: 5px 0;
  cursor: pointer;
  font-size: 18px;
  font-family: "Rajdhani";
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  width: 100%;
  border-radius: 0;
  padding: 0 20px;

}

.hover-effect .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* transform: translate(28%, 0%); */
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hover-effect:hover .overlay {
  opacity: 1;
}

.custom-black {
  color: #000000;
  /* or any custom black shade */
}

.custom-red {
  color: #ff2400;
  /* or any custom black shade */
}

.carousel-inner {
  overflow: visible !important;
}

.full-price {
  text-decoration: line-through;
}

.card-deck>.card {
  width: 310px;
  background-color: rgb(240, 238, 238);
}

.card {
  border-radius: 5px;

  box-shadow: 0 0 5px 1px rgba(84, 84, 84, 0.32);
  border: none;
}

.card-body {
  padding: 0px;
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
