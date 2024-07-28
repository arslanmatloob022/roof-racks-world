<template>
    <div style="width: 100%; background-color: blue; " id="category-slider">
        <b-carousel :interval="0" controls indicators  >
            <b-carousel-slide
                v-for="(categoryChunk, index) in chunkedCategories"
                :key="index"
                class="pointer hidden-image"
                img-src="https://res.cloudinary.com/dpkreativ/image/upload/b_auto,c_mpad,h_480,w_1024/v1646483551/wallpapers/car.jpg">
                <div class="d-flex flex-wrap" style="gap: 30px;">
                    <b-card-group deck v-for="item in categoryChunk" :key="item.model">
                        <b-card
                            class="text-left"
                            
                            rounded
                            img-src="https://cdn.flowrix.app/85a5f8ac/uploads/2023/10/102826_598001-0640.webp"
                            img-alt="Image"
                            img-top>
                            <b-card-text class="text-left black card-title">
                                <p class="custom-black">M-SKU: <b>{{ item.model }}</b></p>
                                <h5><b>{{ item.title }}</b></h5>
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
import 'vue3-carousel/dist/carousel.css'
import { ref, defineComponent } from "vue";

const categories = ref([
  {
    "url": "image_url_1",
    "model": "F2",
    "title": "F2 - Preparation / Installation / Servicing Charges Base Unit",
    "discount_price": null,
    "price": "$80.00"
  },
  {
    "url": "image_url_2",
    "model": "710600",
    "title": "Thule 710600 Flush Rail Evo Foot For Vehicles 4-Pack",
    "discount_price": "$249.95",
    "price": "$239.00"
  },
  {
    "url": "image_url_3",
    "model": "598002",
    "title": "Thule ProRide Bike Roof Rack Black",
    "discount_price": null,
    "price": "$449.95"
  },
  {
    "url": "image_url_4",
    "model": "598001",
    "title": "Thule ProRide Roof Bike Rack Black/Aluminium",
    "discount_price": "$999.95",
    "price": "$329.00"
  },
  {
    "url": "image_url_5",
    "model": "710500",
    "title": "Thule Clamp Evo Foot For Vehicles 4-Pack",
    "discount_price": "$249.95",
    "price": "$239.00"
  },
  {
    "url": "image_url_6",
    "model": "720600",
    "title": "Thule Flush Rail Edge Foot For Vehicles 4-Pack",
    "discount_price": "$949.95",
    "price": "$328.00"
  },
  {
    "url": "image_url_7",
    "model": "KIT186044",
    "title": "Kit 186044",
    "discount_price": "$116.95",
    "price": "$111.00"
  },
  {
    "url": "image_url_8",
    "model": "KIT183145",
    "title": "Kit 183145",
    "discount_price": null,
    "price": "$111.00"
  },
  {
    "url": "image_url_7",
    "model": "KIT186044",
    "title": "Kit 186044",
    "discount_price": "$116.95",
    "price": "$111.00"
  },
  {
    "url": "image_url_8",
    "model": "KIT183145",
    "title": "Kit 183145",
    "discount_price": null,
    "price": "$111.00"
  }
]
)


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
#category-slider .carousel-caption {
    top: 20px;
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
    content: '>'; /* Add the greater than sign */
    font-size: 40px; /* Adjust the font size as needed */
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
    content: '<'; /* Add the greater than sign */
    font-size: 40px; /* Adjust the font size as needed */
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
}

#category-slider .hidden-image > img {
    opacity: 0 !important;
}
</style>

<style scoped>
:root {
    --primary: #221e21;
}
*{
    font-family: "Rajdhani";
}

.custom-black {
  color: #000000; /* or any custom black shade */
}
.custom-red {
  color: #ff2400; /* or any custom black shade */
}
.carousel-inner{
    overflow:visible !important;
}

.full-price{
    text-decoration:  line-through;
}
.card-deck > .card{
    width: 310px;
    background-color: rgb(240, 238, 238);
}
.card{
    border-radius: 5px;
}
.card > img{
    height: 250px ;
}
.card-title{
    color: #365072;
}
.card-title :hover{
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
    transition: opacity 0.4s ease-in-out, width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.dots li.active {
    width: 22px;
    opacity: 1;
}

.slides {
    font-size: 40px;
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