<template>
  <div ref="mapDiv" style="width: 60%; height: 100vh"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { Loader } from "@googlemaps/js-api-loader";
import { useLoader } from "@/composables/useLoader";
const GOOGLE_MAPS_API_KEY = "AIzaSyDRWjgqwVy5t_EbpGPZmmb-4PZ4V0rHpw4";
const { isLoading } = useLoader();
const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
const mapDiv = ref();
let map = ref();

onMounted(async () => {
  isLoading.value = true;
  try {
    isLoading.value = false;
    await loader.load();
    map.value = new google.maps.Map(mapDiv.value, {
      center: { lat: -23.5505, lng: -46.6333 },
      zoom: 8,
    });
  } catch (error) {
    console.log(error);
    isLoading.value = false;
  }
});
</script>
