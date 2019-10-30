<template>
  <div id="cnSearch">
    <logo />

    <form name="cn-search">
      <div class="field has-addons">
        <div class="control">
          <input v-model="query" class="input" type="text" placeholder="Localize um CEP ou Endereço">
        </div>
        <div class="control">
          <button class="button is-info" @click.prevent.stop="buscar(1)">
            <i class="material-icons">
              search
            </i>
          </button>
          <ul>
            <li v-for="row in results.data" :key="row.id">
              {{ row.logradouro }}
            </li>
          </ul>
        </div>
      </div>
    </form>
  <div v-if="results.pages">
        <a v-for="i in Math.min(results.pages, 10)" :key="i" @click="buscar(i)" href="#">
          <span>{{ i }}</span>
          <span> - </span>
        </a>
  </div>
  </div>
</template>

<script>
import Logo from '../../components/Logo'
import { Address } from '../../services'

export default {
  name: 'Search',
  components: { Logo },
  data () {
    return {
      query: '',
      results: {
        pages: 0,
        data: []
      },
      page: 1,
      limit: 10
    }
  },
  methods: {
    buscar (page = 1) {
      this.page = page
      /**
       * @TODO
       * Precisa colocar o Axios
       * Colocar o endere;o como variável de ambiente <https://api.cep.ninja>
       */
      fetch(`https://api.cep.ninja/ws/json?q=${this.query}&page=${this.page}&limit=${this.limit}`)
        .then(response => response.json())
        .then((results) => {
          this.results = results
        })
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
