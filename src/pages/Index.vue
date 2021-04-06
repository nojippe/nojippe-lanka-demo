<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/assets/image/top.jpg" style="width:100%" />
    <section id="company" class="section">
      <div class="content">
        <h1 class="">Company</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
        </p>
      </div>
    </section>
    <section id="service" class="section">
      <div class="content">
        <h1>Service</h1>
        <div class="columns is-vcentered">
          <div class="column">
            <g-image class="column" alt="Example image" src="~/assets/image/service.jpg" style="width:100%;"/>
          </div>
          <div class="column">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
            </p>
          </div>
        </div>
      </div>
    </section>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
