<template>
  <router-view />
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import { COMPANY_PROFILE } from "@/assets/const"
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ],
      script: [
        { src: `https://www.googletagmanager.com/gtag/js?id=${COMPANY_PROFILE.GA_MEASUREMENT_ID}`, async: true }
      ]
    }
  },
  mounted() {
    if (process.isClient) {
      window.dataLayer = window.dataLayer || []
      function gtag(){ dataLayer.push(arguments) }
      gtag('js', new Date())
      gtag('config', COMPANY_PROFILE.GA_MEASUREMENT_ID)
    }
  }
}
</script>
