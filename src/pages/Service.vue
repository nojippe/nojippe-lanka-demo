<template>
  <Layout>
    <section id="service" class="section">
      <div class="content">
        <h1>SERVICE</h1>
        <section v-for="content in $t('service.content')" :key="content.id" :id="content.code" class="section">
          <h2><span>{{ content.title }}</span></h2>
          <article v-html="content.description"></article>
          <div v-for="item in content.items" :key="item.id" class="service-items">
            <div class="columns is-vcentered">
              <div class="column article">
                <h3>{{ item.name }}</h3>
                <article v-html="item.description"></article>
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

<script>
import { CAMPANY_PROFILE } from "@/assets/const"

export default {
  metaInfo: {
    title: 'Service'
  },
  data () {
    return {
      CampanyProfile: CAMPANY_PROFILE,
      isClient: process.isClient,
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
</style>
