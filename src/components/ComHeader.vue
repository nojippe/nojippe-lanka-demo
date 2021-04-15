<template>
  <header>
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="g-link" :to="{ path: $tp('/') }" class="logo">
          <!-- <g-image
            src="~/assets/image/logo_transparent_trim.png"
            :alt="$static.metadata.siteName"/> -->
          <img
            :src="require('@/assets/image/lanka-logo.png')"
            :alt="$static.metadata.siteName"/>
        </b-navbar-item>
        <!-- <a role="button"
          :class="['navbar-burger', { 'is-active': visibledBurger }]"
          aria-label="menu"
          aria-expanded="false"
          @click="visibledBurger = !visibledBurger"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a> -->
      </template>
      <template #start>
        <b-navbar-item v-scroll-to="{ el: '#about-us', duration: 400 }" href="#!">
          ABOUT US
        </b-navbar-item>
        <b-navbar-dropdown label="SERVICE">
          <b-navbar-item href="#">
            Export of Ceylon Spices
          </b-navbar-item>
          <b-navbar-item href="#">
            Export of Ceylon Products
          </b-navbar-item>
          <b-navbar-item href="#">
            Renewable Energy
          </b-navbar-item>
          <b-navbar-item href="#">
            Business Consulting
          </b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-item href="#" target="_blank">
          Daily Sri Lankan Business News(Japanese)
        </b-navbar-item>
        <b-navbar-item v-scroll-to="{ el: '#contact', duration: 400 }" href="#!">
          CONTACT
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-dropdown label="LANGUAGE" :hoverable="true">
          <b-navbar-item v-for="locale in availableLocales"
            :key="locale"
            href="#!"
            class="is-mobile"
            @click.prevent="changeLocale(locale)">
            {{ locale.substr(0, 2) }}
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  name: "ComHeader",
  data () {
    return {
      currentLocale: this.$i18n.locale.toString(),
      availableLocales: this.$i18n.availableLocales
    }
  },
  methods: {
    changeLocale (locale) {
      if (this.currentLocale === locale) return
      this.currentLocale = locale
      this.$router.push({
        path: this.$tp(this.$route.path, this.currentLocale, true)
      })
    }
  }
}
</script>

<style>
header {
  display: block;
}
/* .logo {
  width: 10rem;
} */
header .logo img {
  max-height: 2.25rem;
}
</style>
