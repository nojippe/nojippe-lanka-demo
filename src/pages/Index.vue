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
            <google-map/>
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
