<template>
  <div id="cnHeader">
    <div class="container">
      <div id="nav-logo">
        <nuxt-link to="/">
          <img src="/logo-horizontal.png" alt="CEP Ninja">
        </nuxt-link>
      </div>
      <div id="nav-items">
        <ul>
          <li>
            <nuxt-link to="/search/cep">
              Buscar um CEP
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/search/address">
              Buscar um Endereço
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/docs">
              Documentação
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/sobre">
              Sobre
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CnHeader'
}
</script>

<style lang="scss" scoped>
#cnHeader {
  align-items: center;
  background-color: #e31c3a;
  color: white;
  display: flex;
  height: 50px;
  width: 100%;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    #nav-logo {
      a {
        img {
          width: 120px;
        }
      }
    }

    #nav-items {
      align-items: center;
      display: flex;

      ul {
        align-items: center;
        display: flex;
        flex-direction: row;

        li {
          margin: 0 5px;

          &:last-child {
            margin-right: 0 !important;
          }

          a {
            border-radius: 3px;
            color: #FFFFFF;
            padding: 10px 10px;
            user-select: none; /* supported by Chrome and Opera */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */

            &:hover {
              background-color: #0000001f;
            }
          }
        }
      }
    }
  }
}
</style>
