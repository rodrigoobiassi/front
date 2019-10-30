<template>
  <div class="container">
    <div>
      <logo />

      <div class="columns">
        <div class="column code-highlight">
          <h4>JSON</h4>
          <div class="code-url">
            <span class="tag is-success">GET</span>
            <code>https://api.cep.ninja/ws/01310916/json</code>
          </div>

          <div class="code-response">
            <span class="tag is-dark">RESPONSE</span>
            <code>
              {
              "cep": "01310916",
              "localidade": "São Paulo",
              "uf": "SP",
              "bairro": "Bela Vista",
              "logradouro": "Avenida Paulista, 1374 ",
              "referencia2": " Brazilian Finance Center"
              }
            </code>
          </div>
        </div>

        <div class="column code-highlight">
          <h4>XML</h4>
          <div class="code-url">
            <span class="tag is-success">GET</span>
            <code>https://api.cep.ninja/ws/01310916/xml</code>
          </div>

          <div class="code-response">
            <span class="tag is-dark">RESPONSE</span>
            <code>
              <xmlcep>
                <cep>01310916</cep>
                <localidade>São Paulo</localidade>
                <uf>SP</uf>
                <bairro>Bela Vista</bairro>
                <logradouro>Avenida Paulista, 1374 </logradouro>
                <referencia2> Brazilian Finance Center</referencia2>
              </xmlcep>
            </code>
          </div>
        </div>
      </div>

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
  components: { Logo }
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

  .code-highlight {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h4 {
      background: #e31c3a;
      color: #FFFFFF;
      font-weight: 700;
      margin-bottom: 20px;
      width: 100%;
    }

    .code-url {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }

    .code-response {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-top: 20px;

      span {
        max-width: 100px;
      }
    }
  }

  .links {
    padding-top: 15px;

    > * {
      margin: 0 15px;
    }
  }
}
</style>
