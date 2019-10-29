<template>
  <div>
    <cn-header />
    <nuxt class="content-body" />
    <cn-footer />
  </div>
</template>

<script>
import CnFooter from '../components/navigation/cnFooter'
import CnHeader from '../components/navigation/cnHeader'

export default {
  components: { CnHeader, CnFooter }
}
</script>

<style lang="scss">
  @import "../assets/styles/_main.scss";

  .content-body {
    min-height: calc(100vh - 100px);
  }
</style>
