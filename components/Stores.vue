<template>
  <div class="store">
    <h1 class="store-title">Visit our Stores</h1>

    <div class="row">
      <div
        class="col-lg-6 col-md-6 col-sm-12 m-0"
        v-for="(store, index) in stores"
        :key="index"
      >
        <div class="card h-100">
          <div style="background-color: #003d6b" class="row">
            <div
              style="background-color: #003d6b"
              class="col-12 col-sm-12 col-md-8 col-lg-8"
            >
              <div class="card-body">
                <h5 class="card-title">{{ store.name }}</h5>
                <div class="card-text">
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'location-dot']"
                  />
                  <p>
                    <strong>Address</strong><br />
                    {{ store.address }}
                  </p>
                </div>
                <div class="card-text">
                  <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />
                  <p>
                    <strong>Email</strong><br />
                    <a :href="`mailto:${store.email}`">{{ store.email }}</a>
                  </p>
                </div>
                <div class="card-text">
                  <font-awesome-icon class="icon" :icon="['fas', 'phone']" />
                  <p>
                    <strong>Phone</strong><br />
                    {{ store.phone }}
                  </p>
                </div>
              </div>
            </div>
            <a
              class="map col-lg-4 col-md-6 col-sm-12 col-12"
              href="https://goo.gl/maps/oBc2x6oiR5eM57vr6"
              target="_blank"
              data-v-3e25bcad=""
              ><img
                loading="lazy"
                src="https://www.roofrackworld.com.au/assets/map-bg-1-C0OfzIc-.webp"
                class="w-100"
                alt="Artarmon Store Map"
                data-v-3e25bcad=""
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faMapMarkerAlt, faEnvelope, faPhone);

export default {
  name: "StoreComponent",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      stores: [
        {
          name: "Artarmon Store",
          address: "13/87 Reserve Road, Artarmon, NSW 2064",
          email: "artarmon@roofrackandtowbarworld.com.au",
          phone: "02 8999 8878",
          map: "https://www.google.com/maps/embed?...", // Replace with actual map link
        },
        {
          name: "Burwood Store",
          address: "3/320 Parramatta Road, NSW 2134",
          email: "burwood@roofrackandtowbarworld.com.au",
          phone: "02 8999 8878",
          map: "https://www.google.com/maps/embed?...", // Replace with actual map link
        },
      ],
    };
  },
};
</script>

<style scoped>
.store {
  padding: 20px 50px;
}
.store-title {
  color: #003d6b;
  font-size: 48px;
}
.card {
  border: none;
}

.map {
  width: 160px;
  z-index: 0;
}

.map img {
  height: 100%;
  width: auto;
}
.card-body {
  background-color: #003d6b;
  color: white;
  padding: 25px;
  padding-right: 0;
  z-index: 1;
  position: relative;
}
.card-title {
  font-size: 30px;
  font-weight: 600;
}

.card-text {
  display: flex;
  gap: 14px;
}
.card-text .icon {
  font-size: 42px;
}
.card-text p {
  font-size: 20px;
}
.card-text p a {
  color: white;
  text-decoration: none;
}
.card-text p a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .store {
    padding: 4px 6px;
  }
  .card-body {
    background-color: transparent;
  }
  .store-title {
    font-size: 29px;
  }
  .card-title {
    font-size: 24px;
    font-weight: 600;
  }
  .card-text .icon {
    font-size: 26px;
  }
  .card-text p {
    font-size: 16px;
  }
}
</style>
