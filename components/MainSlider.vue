<template>
    <div style="width: 100%; margin: 20px auto"  >
        <b-carousel :interval="0" controls indicators img-width="1024" img-height="480" background="#ababab">
            <b-carousel-slide
            v-for="url in posters"
            :key="url"
                :img-src="url"></b-carousel-slide>
        </b-carousel>
    </div>
</template>


<script setup lang="ts">
import { ref, defineComponent } from "vue";
const posters = ref([
    'https://cdn.flowrix.app/85a5f8ac/uploads/2023/04/BikeRackThuleSpecialist-v1.webp',
    'https://cdn.flowrix.app/85a5f8ac/uploads/2024/06/thule-mountain-bike-rack-v.webp',
    'https://cdn.flowrix.app/85a5f8ac/uploads/2024/06/roofboxes_v.webp',
    'https://cdn.flowrix.app/85a5f8ac/uploads/2024/06/Ute-lids-mountaindesignv.webp',
    'https://cdn.flowrix.app/85a5f8ac/uploads/2024/07/203923-snow2024.webp'
])
</script>

<style>


</style>