<template>
  <div>
    <comHeader/>
    <div class="layout">
      <slot/>
    </div>
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
