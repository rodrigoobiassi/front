<template>
  <div>
    <cn-header />
    <nuxt />
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
</style>
