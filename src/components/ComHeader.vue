<template>
  <header class="header">
    <strong>
      <g-link :to="$tp('/')">{{ $static.metadata.siteName }}</g-link>
    </strong>
    <nav class="nav">
      <a v-for="locale in availableLocales"
        :key="locale"
        href="#!"
        class="nav__link"
        @click.prevent="changeLocale(locale)">
        {{ locale.substr(0, 2) }}
      </a>
    </nav>
    <nav class="nav">
      <a href="#!"
        v-scroll-to="{ el: '#company', duration: 400 }"
        class="nav__link">Company</a>
      <a href="#!"
        v-scroll-to="{ el: '#service', duration: 400 }"
        class="nav__link" >Service</a>
      <!-- <g-link class="nav__link" to="/">Home</g-link>
      <g-link class="nav__link" to="/about/">About</g-link> -->
    </nav>
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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
