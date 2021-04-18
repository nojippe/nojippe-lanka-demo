<template>
<footer class="footer">
  <div class="content">
    <div>
      <div class="is-size-4">{{ companyProfile.NAME }}</div>
      <div>
        {{ companyProfile.ADDRESS }}<br>
        {{ companyProfile.EMAIL }}
      </div>
    </div>
    <a class="facebook" :href="companyProfile.FACEBOOK_URL" target="_blank">
    <img
      :src="require('@/assets/image/facebook-32.png')"
      alt="facebook"/>
    </a>
  </div>
  <div class="is-size-7-mobile has-text-right">
    &copy; Copyright 2021 Shibata Lanka Pvt Ltd.
  </div>  
</footer>
</template>

<script>
import { COMPANY_PROFILE } from "@/assets/const"

export default {
  name: "ComHeader",
  data () {
    return {
      companyProfile: COMPANY_PROFILE,
    }
  }
}
</script>

<style scoped>
.footer .column p {
  margin: 0;
}
a.facebook {
  width: 2rem;
  display: block;
  margin: 1rem;
}
</style>
