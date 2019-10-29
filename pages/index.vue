<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        cep_ninja
      </h1>
      <h2 class="subtitle">
        A API de ceps mais veloz do mundo!
      </h2>
      <div class="links">
        <a href="#" target="_blank" class="button is-outlined">Docs</a>
        <a href="https://github.com/renatoruis/cep.ninja/" target="_blank" class="button is-primary is-outlined">GitHub</a>
        <a href="https://github.com/renatoruis/cep.ninja/" target="_blank" class="button is-link is-outlined">Doe</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;

    > * {
      margin: 0 15px;
    }
  }
}
</style>
