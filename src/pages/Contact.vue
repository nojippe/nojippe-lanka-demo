<template>
  <Layout>
    <section id="contact" class="section">
      <div class="content">
        <h1>CONTACT</h1>
        <div class="container has-text-centered">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSefTDC6Qk7ffL9SzWOyLivXrPQVNbHVQzTKcui8DZS75cJLvA/viewform?embedded=true" width="640" height="950" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </div>
    </section>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>

<script>
import { COMPANY_PROFILE } from "@/assets/const"

export default {
  name: "Contact",
  metaInfo() {
    return {
      title: 'Contact',
      link: [
        {
          key: 'alternate',
          rel: 'alternate',
          hreflang: 'en-US',
          href: `${this.$static.metadata.siteUrl}/en/contact/`
        },
        {
          key: 'alternate',
          rel: 'alternate',
          hreflang: 'ja-JP',
          href: `${this.$static.metadata.siteUrl}/ja/contact/`
        }
      ],
      meta: [
        { key: `http-equiv`, 'http-equiv': 'content-language', content: `${this.$i18n.locale}` }
      ]
    }
  },
  data () {
    return {
      companyProfile: COMPANY_PROFILE,
      isClient: process.isClient,
    }
  },
  mounted () {
    if (this.$route.hash) {
      this.scrollToHash()
    }
  },
  methods: {
    scrollToHash () {
      const hash = this.$route.hash
      this.$nextTick(() => {
        this.$scrollTo(hash, 400, { offset: 0 })
      })
    }
  }
}
</script>

<style scoped>
iframe[src^="https://docs.google.com/forms/d/e"]{
  width:100%;
}
/* #contact .container {
  text-align: center;
} */
</style>
