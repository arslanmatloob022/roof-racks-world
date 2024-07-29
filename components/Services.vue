<template>
    <div class="d-flex align-items-center p-5" style="justify-content: space-around; background-color: rgb(246, 247, 248);">
        <div v-for="item in services" class="d-flex align-items-center justify-content-center">
            <img class="service-image" src="data:image/png;base64,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" alt="">
            
            <div>
                <p class="mb-0"> <b>{{ item.title }}</b></p>
                <p>{{ item.decription }}</p>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from "vue";

const services = ref([
    {
    url:'https://www.roofrackworld.com.au/assets/icon_01-Di11afME.png',
    title:'100% FIT',
    decription:'GUARANTEE'
    },
    {
    url:'https://www.roofrackworld.com.au/assets/icon_01-Di11afME.png',
    title:'100% FIT',
    decription:'GUARANTEE'
    },
    {
    url:'https://www.roofrackworld.com.au/assets/icon_01-Di11afME.png',
    title:'100% FIT',
    decription:'GUARANTEE'
    },
    {
    url:'https://www.roofrackworld.com.au/assets/icon_01-Di11afME.png',
    title:'100% FIT',
    decription:'GUARANTEE'
    }
])
</script>

<style>
.service-image{
    width: 70px;
    height: 70px;
    padding-right: 15px;
}
</style>