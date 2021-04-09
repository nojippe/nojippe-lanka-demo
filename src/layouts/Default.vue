<template>
  <div class="layout">
    <comHeader/>
    <slot/>
    <comFooter/>
  </div>
</template>

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
/* .layout {
  padding: 0 1rem;
} */
</style>
