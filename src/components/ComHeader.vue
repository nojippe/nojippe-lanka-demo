<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <g-link :to="$tp('/')" class="navbar-item">{{ $static.metadata.siteName }}</g-link>
        <a v-for="locale in availableLocales"
          :key="locale"
          href="#!"
          class="navbar-item"
          @click.prevent="changeLocale(locale)">
          {{ locale.substr(0, 2) }}
        </a>
        <a role="button"
          :class="['navbar-burger', { 'is-active': visibledBurger }]"
          aria-label="menu"
          aria-expanded="false"
          @click="visibledBurger = !visibledBurger"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div :class="['navbar-menu', { 'is-active': visibledBurger }]">
        <div class="navbar-start">
          <a v-scroll-to="{ el: '#company', duration: 400 }"
            href="#!" class="navbar-item">
            Company
          </a>
          <a v-scroll-to="{ el: '#service', duration: 400 }"
            href="#!" class="navbar-item" >
            Service
          </a>
        </div>
      </div>
    </nav>
    <!-- <g-link class="nav__link" to="/">Home</g-link>
    <g-link class="nav__link" to="/about/">About</g-link> -->
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
      availableLocales: this.$i18n.availableLocales,
      visibledBurger: false
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
/* .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
} */
</style>
