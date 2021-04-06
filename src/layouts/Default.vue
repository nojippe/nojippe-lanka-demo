<template>
  <div class="layout">
    <comHeader />
    <slot/>
    <comFooter />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import ComHeader from "@/components/ComHeader"
import ComFooter from "@/components/ComFooter"
export default {
  components: {
    ComHeader,
    ComFooter
  }
}
</script>

<style scoped>
.layout {
  padding: 0 1rem;
}
</style>
