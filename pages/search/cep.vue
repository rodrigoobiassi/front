<template>
  <div id="cnSearch">
    <logo />

    <form name="cn-search">
      <div class="field has-addons">
        <div class="control">
          <input v-model="input" class="input" type="text" placeholder="Localize um CEP ou Endereço">
        </div>
        <div class="control">
          <button class="button is-info" @click.prevent.stop="buscar">
            <i class="material-icons">
              search
            </i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Logo from '../../components/Logo'
import { Address } from '../../services'

export default {
  name: 'Search',
  components: { Logo },
  data: () => ({
    input: ''
  }),
  methods: {
    buscar () {
      Address.getAddress(this.input)
        .then(r => console.log(r))
        .catch(e => console.error(e))
    }
  }
}
</script>

<style lang="scss" scoped>
#cnSearch {
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>
