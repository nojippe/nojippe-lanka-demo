<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <section id="banner">
      <ClientOnly>
        <b-carousel>
          <b-carousel-item v-for="(carousel, idx) in carousels" :key="idx">
            <g-image :src="require(`!!assets-loader!@image/${carousel.img}`)" :alt="`carousel-${idx}`" />
            <!-- <img :src="require(`@/assets/image/${carousel.img}`)"/> -->
          </b-carousel-item>
        </b-carousel>
      </ClientOnly>
      <h1 class="is-overlay">Business for People <br>of Sri Lanka &amp; South Asia</h1>
    </section>
    <section id="about-us" class="section">
      <div class="content">
        <h2><span>ABOUT US</span></h2>
        <h3>{{ $t('aboutUs.message.title') }}</h3>
        <div class="columns is-vcentered">
          <div class="column is-two-fifths">
            <g-image class="is-shadow"
              :src="require(`!!assets-loader!@image/${$t('aboutUs.message.img')}`)"
              :alt="$t('aboutUs.message.title')"/>
          </div>
          <div class="column is-mobile-padding">
            <article v-html="$t('aboutUs.message.description')"></article>
          </div>
        </div>
        <h3>{{ $t('aboutUs.aboutUs.title') }}</h3>
        <div class="columns  is-vcentered">
          <div class="column is-two-fifths">
            <g-image class="is-shadow"
              :src="require(`!!assets-loader!@image/${$t('aboutUs.aboutUs.img')}`)"
              :alt="$t('aboutUs.aboutUs.title')"/>
          </div>
          <div class="column is-mobile-padding">
            <article v-html="$t('aboutUs.aboutUs.description')"></article>
          </div>
        </div>
        <h3>{{ $t('aboutUs.access.title') }}</h3>
        <div class="columns">
          <div class="column">
            <iframe name="access-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9782281213834!2d79.85956871382959!3d6.89320739501904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bda2080232b%3A0x5c3175ec8326911b!2s112%20Havelock%20Rd%2C%20Colombo%2000500!5e0!3m2!1sja!2slk!4v1617943003088!5m2!1sja!2slk"
              width="100%" height="300" style="border:0;height:15rem;padding:0.75rem;" allowfullscreen="" loading="lazy"></iframe>
            <!-- <google-map/> -->
          </div>
          <div class="column  is-mobile-padding">
            <b-tag type="is-primary" rounded>Operating Office</b-tag>
            <p>{{ companyProfile.ADDRESS }}</p>
            <p v-if="$t('aboutUs.access.description')" v-html="$t('aboutUs.access.description')"></p>
          </div>
        </div>
      </div>
    </section>
    <section id="service" class="section">
      <div class="content">
        <h2><span>SERVICE</span></h2>
        <template v-for="content in $t('service.content')">
          <h3 :key="`title_${content.id}`">{{ content.title }}</h3>
          <div :key="`content_${content.id}`" class="columns">
            <div class="column is-two-fifths">
              <div class="frame">
                <g-image :alt="content.title" :src="require(`!!assets-loader!@image/${content.img}`)" class="is-shadow"/>
                <!-- <g-image class="column" alt="Example image" src="~/assets/image/service.jpg" width="640" height="424"/> -->
                <!-- <g-image :src="require(`!!assets-loader!@image/${carousel.img}`)"/> -->
              </div>
            </div>
            <div class="column is-mobile-padding">
              <article v-html="content.description"></article>
              <div class="more">
                <g-link :to="$tp(`/service/#${content.code}`)">
                  <b-button type="is-primary" class="button_arrow">More</b-button>
                </g-link>
              </div>
            </div>
          </div>
        </template>
      </div>
    </section>
    <section id="contact" class="section">
      <div class="content">
        <h2><span>Contact</span></h2>
        <div class="columns">
          <div class="column is-mobile-padding">
            Please contact us from here
          </div>
          <div class="column is-half is-mobile-padding">
            <g-link :to="{ path: $tp('/contact/') }">
              <b-button size="is-primary is-large" outlined expanded>Contact</b-button>
            </g-link>
          </div>
        </div>
      </div>
    </section>
    <!-- <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p> -->
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
  name: "Index",
  components: {
    // CarouselはNetlifyでサーバーサイドレンダリングできないためその対策
    BCarousel: () =>
      import('buefy/dist/esm/carousel')
      .then(m => m.BCarousel)
      .catch(),
    BCarouselItem: () =>
      import('buefy/dist/esm/carousel')
      .then(m => m.BCarouselItem)
      .catch()
  },
  metaInfo() {
    return {
      title: 'Shibata Lanka',
      link: [
        {
          key: 'alternate',
          rel: 'alternate',
          hreflang: 'en-US',
          href: `${this.$static.metadata.siteUrl}/en/`
        },
        {
          key: 'alternate',
          rel: 'alternate',
          hreflang: 'ja-JP',
          href: `${this.$static.metadata.siteUrl}/ja/`
        }
      ],
      meta: [
        { key: `http-equiv`, 'http-equiv': `content-language`, content: `${this.$i18n.locale}` }
      ]
    }
  },
  data () {
    return {
      companyProfile: COMPANY_PROFILE,
      isClient: process.isClient,
      carousels: [
          { img: 'carousel/carousel-flag.jpg', text: 'Slide 1', color: 'info' },
          { img: 'carousel/carousel-sigiriya.jpg', text: 'Slide 2', color: 'info' },
          { img: 'carousel/carousel-building.jpg', text: 'Slide 2', color: 'info' },
          { img: 'carousel/carousel-peacock.jpg', text: 'Slide 2', color: 'info' },
          { img: 'carousel/carousel-dawn.jpg', text: 'Slide 2', color: 'info' },
          { img: 'carousel/carousel-children.jpg', text: 'Slide 2', color: 'info' }
      ]
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
#banner {
  max-width: 1580px;
  margin: 0 auto;
  position: relative;
}
#banner img {
  width: 100%;
  /* height: calc(100vh - 3.25rem); */
  object-fit: cover;
}
#about-us .columns:nth-child(4n + 1) {
  flex-direction: row-reverse;
}

#service .columns:nth-child(4n + 1) {
  flex-direction: row-reverse;
}
#service .columns .more {
  margin-top: 1rem;
  text-align: right;
  padding-right: 1rem;
}
/* .wrapper {
   position:relative;
   background: url('~@/assets/image/carousel/carousel-dawn.jpg')center center;
   background-color:rgba(247 , 237,190, 0.5);
   background-blend-mode:lighten;
   background-size:cover;
   padding: 5rem;
} */
/* #service .column .frame {
	display: inline-block;
  position: relative;
}
#service .column .frame::before {
	position: absolute;
  content: "";
	box-shadow: 0 15px 10px rgba(0,0,0, .5);
	transform: rotate(3deg);
	left: auto;
	top: auto;
	bottom: 15px;
	z-index: -1;
	width: 50%;
	height: 20%;
} */
/* #service .column img{
  box-shadow: 2px 2px 4px gray;
} */

/* #service .card-image figure {
  margin: 0;
}
#service .card-content {
  padding-bottom: 4.5rem;
}
#service .card-footer {
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
} */
</style>
