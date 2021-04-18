<template>
  <header>
    <b-navbar :fixed-top="true">
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
        <b-navbar-item v-if="isTop" v-scroll-to="{ el: '#about-us', duration: 400 }" href="#!">
          {{ $t('menu.aboutUs.main') }}
        </b-navbar-item>
        <b-navbar-item v-else tag="g-link" v-scroll-to="'#about-us'" :to="{ path: $tp('/#about-us') }">
          {{ $t('menu.aboutUs.main') }}
        </b-navbar-item>
        <b-navbar-dropdown :label="$t('menu.service.main')" :hoverable="true">
          <!-- <b-navbar-item tag="g-link" :to="{ path: $tp('/service/') }">
            Top
          </b-navbar-item> -->
           <b-navbar-item :href="$tp('/service/#spices')">
            {{ $t('menu.service.items.0') }}
          </b-navbar-item>
          <b-navbar-item :href="$tp('/service/#products')">
            {{ $t('menu.service.items.1') }}
          </b-navbar-item>
          <b-navbar-item :href="$tp('/service/#energy')">
            {{ $t('menu.service.items.2') }}
          </b-navbar-item>
          <b-navbar-item :href="$tp('/service/#consulting')">
            {{ $t('menu.service.items.3') }}
          </b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-item :href="companyProfile.BLOG_URL" target="_blank">
          {{ $t('menu.news.main') }}
        </b-navbar-item>
        <b-navbar-item tag="g-link" :to="{ path: $tp('/contact/') }">
          {{ $t('menu.contact.main') }}
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-dropdown :label="$t('menu.language.main')" :hoverable="true">
          <b-navbar-item v-for="(locale, idx) in availableLocales"
            :key="locale"
            href="#!"
            class="is-mobile"
            @click.prevent="changeLocale(locale)">
            {{ $t(`menu.language.items.${idx}`) }}
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
import { COMPANY_PROFILE } from "@/assets/const"

export default {
  name: "ComHeader",
  data () {
    return {
      companyProfile: COMPANY_PROFILE,
      currentLocale: this.$i18n.locale.toString(),
      availableLocales: this.$i18n.availableLocales,
      availableLocalesShort: this.$i18n.availableLocales.map(elm => elm.substr(0, 2))
    }
  },
  computed: {
    isTop () {
      return this.availableLocalesShort.map(elm => `/${elm}/`).indexOf(this.$route.path) !== -1
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
