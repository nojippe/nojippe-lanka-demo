<template>
<div>
  <div ref="map" class="map"></div>
</div>
</template>

<script>
import { CAMPANY_PROFILE } from "@/assets/const"

export default {
  name: "GoogleMap",
  props: {
    latLng: {
      type: Object,
      require : false,
      default: () => ({ lat: CAMPANY_PROFILE.LAT_LNG.LAT, lng: CAMPANY_PROFILE.LAT_LNG.LNG })
    }
  },
  data() {
    return {
      map: ''
    }
  },
  mounted() {
    if (!window.mapLoadStarted) {
      window.mapLoadStarted = true
      let script = document.createElement('script')
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCF4cOEyztvw54puLcRQGc-UMus3cQfacI&callback=initMap'
      script.async = true
      document.head.appendChild(script)
    }

    window.initMap = () => {
      window.mapLoaded = true
    }

    let timer = setInterval(() => {
      if (window.mapLoaded) {
        clearInterval(timer)
        this.map = new window.google.maps.Map(this.$refs.map, {
          center: this.latLng,
          zoom: 13
        })
        new window.google.maps.Marker({ position: this.latLng, map: this.map })
      }
    }, 500)
  }
}
</script>

<style scoped>
  .map {
    width: 100%;
    height: 15rem;
  }
</style>