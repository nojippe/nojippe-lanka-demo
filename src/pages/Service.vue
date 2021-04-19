<template>
  <Layout>
    <section id="service" class="section">
      <div class="content">
        <h1>SERVICE</h1>
        <section v-for="content in $t('service.content')" :key="content.id" :id="content.code" class="section">
          <h2><span>{{ content.title }}</span></h2>
          <article class="px-3" v-html="content.description"></article>
          <div v-for="item in content.items" :key="item.id" class="service-items">
            <div class="columns is-vcentered">
              <div class="column is-mobile-padding">
                <h3>{{ item.name }}</h3>
                <article v-if="item.description" v-html="item.description"></article>
                <a v-if="content.id===4 && item.id===4"
                  :href="companyProfile.BLOG_URL"
                  target="_blank"
                  class="read-button"
                >
                  <b-button type="is-primary" class="button_arrow">{{ item.buttonCaption }}</b-button>
                </a>
              </div>
              <div class="column is-two-fifths">
                <g-image :alt="item.title" :src="require(`!!assets-loader!@image/${item.img}`)" class="is-shadow"/>
              </div>
            </div>
          </div>
        </section>
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
  name: "Service",
  metaInfo() {
    return {
      title: 'Service',
      link: [
        {
          key: 'alternate',
          rel: 'alternate',
          hreflang: 'en-US',
          href: `${this.$static.metadata.siteUrl}/en/service/`
        },
        {
          key: 'alternate',
          rel: 'alternate',
          hreflang: 'ja-JP',
          href: `${this.$static.metadata.siteUrl}/ja/service/`
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
#spices .service-items:nth-of-type(2n+1) .columns,
#products .service-items:nth-of-type(2n+1) .columns,
#energy .service-items:nth-of-type(2n+1) .columns,
#consulting .service-items:nth-of-type(2n+1) .columns {
  flex-direction: row-reverse;
}
.service-items {
  margin-top: 2rem;
}
.read-button {
  display: block;
  text-align: right;
}
</style>
