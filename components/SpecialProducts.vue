<template>
    <div style="width: 100%" id="special-slider">
        <h2 class="cu-heading p-5">Products On Special</h2>
        <b-carousel :interval="0" controls indicators>
            <b-carousel-slide v-for="(item, index) in categories" :key="index" class="pointer hidden-image"
                img-src="https://res.cloudinary.com/dpkreativ/image/upload/b_auto,c_mpad,h_480,w_1024/v1646483551/wallpapers/car.jpg">

                <div class="d-flex ">
                    <img :src="item.url" alt="">
                    <div>
                        <h1  class=" cu-title test-align-left">
                            <b>{{ item.title }}</b>
                        </h1>

                        <p class="hot-price">
                            <b class="custom-red "> ${{ item.price }}.00</b>
                        </p>
                        <div class="cutome-badge"> Shop Now</div>
                    </div>
                </div>




            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { ref } from "vue";

const categories = ref([
    {
        url: "https://cdn.flowrix.app/85a5f8ac/uploads/2023/06/Justclick3_mai.webp",
        title: "Thule ProRide Roof Bike Rack Black/Aluminium",
        price: 247,
    },
    {
        url: "https://cdn.flowrix.app/85a5f8ac/uploads/2023/06/Justclick3_mai.webp",
        title: "Towbars",
        price: 434,
    },
    {
        url: "https://cdn.flowrix.app/85a5f8ac/uploads/2023/06/Justclick3_mai.webp",
        title: "Bars",
        price: 100,
    },
    {
        url: "https://cdn.flowrix.app/85a5f8ac/uploads/2023/06/Justclick3_mai.webp",
        title: "Roof Mount",
        price: 19,
    },
    {
        url: "https://cdn.flowrix.app/85a5f8ac/uploads/2023/06/Justclick3_mai.webp",
        title: "Roof Boxes",
        price: 4123,
    },
    {
        url: "https://cdn.flowrix.app/85a5f8ac/uploads/2023/06/Justclick3_mai.webp",
        title: "Kayak Racks",
        price: 2145,
    },
    {
        url: "https://cdn.flowrix.app/85a5f8ac/uploads/2023/06/Justclick3_mai.webp",
        title: "Keys and Locks",
        price: 107,
    },
    {
        url: "https://cdn.flowrix.app/85a5f8ac/uploads/2023/06/Justclick3_mai.webp",
        title: "Surf Pads",
        price: 1035,
    },
    {
        url: "https://cdn.flowrix.app/85a5f8ac/uploads/2023/06/Justclick3_mai.webp",
        title: "Alloy Platforms",
        price: 679,
    },
    {
        url: "https://cdn.flowrix.app/85a5f8ac/uploads/2023/06/Justclick3_mai.webp0",
        title: "Spacers",
        price: 537,
    },
    {
        url: "https://cdn.flowrix.app/85a5f8ac/uploads/2023/06/Justclick3_mai.webp",
        title: "4WD & Camping",
        price: 227,
    },
    {
        url: "https://cdn.flowrix.app/85a5f8ac/uploads/2023/06/Justclick3_mai.webp",
        title: "Towbars",
        price: 414,
    },
    {
        url: "https://cdn.flowrix.app/85a5f8ac/uploads/2023/06/Justclick3_mai.webp",
        title: "Bars",
        price: 1509,
    },
    {
        url: "https://cdn.flowrix.app/85a5f8ac/uploads/2023/06/Justclick3_mai.webp",
        title: "Roof Mount",
        price: 1986,
    },
]);



</script>

<style>

.hot-price{
    font-weight: 600;
    font-size: 30px;
    text-align: left;
}
.cu-title {
  color: #365072;
  cursor: pointer;
  text-align: left;
}
.cu-title :hover {
  color: #ff2400;
}

.cu-heading {
    font-weight: 600;
    color: #004f7b;
    font-size: 50px;
    padding-left: 50px;
}

#special-slider .carousel-caption {
    top: 10px;
}

#special-slider .carousel-control-next-icon {
    padding: 25px;
    /* Adjust padding as needed */
    background-color: rgb(83, 78, 78);
    background-image: none;
    border-radius: 50px;
}

#special-slider .carousel-control-next, #special-slider .carousel-control-prev{
 top: 0;
 bottom: auto;
}

#special-slider .carousel-control-prev{
 right: 70px;
 left: auto;
}

#special-slider .carousel-control-next{
 width: auto;
 right: 90px;
}

#special-slider .carousel-control-next-icon:hover {
    background-color: red !important;
}

#special-slider .carousel-control-next-icon::before {
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

#special-slider .carousel-control-prev-icon {
    padding: 25px;
    /* Adjust padding as needed */
    background-color: rgb(83, 78, 78);
    background-image: none;
    border-radius: 50px;
}

#special-slider .carousel-control-prev-icon:hover {
    background-color: red !important;
}

#special-slider .carousel-control-prev-icon::before {
    content: "<";
    font-size: 20px;
    color: white;
    font-weight: bolder;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#special-slider .carousel-inner {}

#special-slider .carousel-item {
    min-height: 520px;
    max-height: 700px;
}

#special-slider .hidden-image>img {
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
    width: 210px;
    background-color: transparent;
    border: none;
}

.card {
    border-radius: 5px;
    position: relative;
    overflow: hidden;
}

.card>img {
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

.hover-effect .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 64%;
    height: 64%;
    transform: translate(28%, 0%);
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    justify-content: center;
    align-price: center;
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
    align-price: center;
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