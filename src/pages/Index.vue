<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <section id="banner">
      <g-image alt="Example image" src="~/assets/image/top.jpg" width="1920" height="639" />
    </section>
    <section id="company" class="section">
      <div class="content">
        <h1 class="">Company</h1>
        <p v-html="$t('top.company.description')" />
      </div>
    </section>
    <section id="service" class="section">
      <div class="content">
        <h1>Service</h1>
        <div class="columns is-vcentered">
          <div class="column">
            <g-image class="column" alt="Example image" src="~/assets/image/service.jpg" width="640" height="424"/>
          </div>
          <div class="column">
            <p v-html="$t('top.service.description')"></p>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" class="section">
      <div class="content">
        <h1>Contact</h1>
        <div class="columns is-vcentered">
          <div class="column">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9782281213834!2d79.85956871382959!3d6.89320739501904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bda2080232b%3A0x5c3175ec8326911b!2s112%20Havelock%20Rd%2C%20Colombo%2000500!5e0!3m2!1sja!2slk!4v1617943003088!5m2!1sja!2slk"
              width="100%" height="300" style="border:0;height:15rem;padding:0.75rem;" allowfullscreen="" loading="lazy"></iframe>
            <!-- <google-map/> -->
          </div>
          <div class="column">
            <p>address: No.112, Havelock Road, Colombo 04  Sri Lanka</p>
            <p>tel: +94-11-3456789</p>
            <p v-html="$t('top.service.description')"></p>
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

<script>
import GoogleMap from "@/components/GoogleMap"

export default {
  components: {
    GoogleMap
  },
  metaInfo: {
    title: 'Shibata Lanka'
  }
}
</script>

<style scoped>
#banner img {
  width: 100%;
  max-width: 1920px;
  height: auto;
}
</style>
