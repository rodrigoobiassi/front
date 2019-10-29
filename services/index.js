import axios from 'axios'

export class Address {
  static DOMAIN = 'http://api.cep.ninja/ws';

  static getCep (cep) {
    const url = `${Address.DOMAIN}/${cep}/json`
    return axios.get(url)
  }

  static getAddress (address) {
    const url = `${Address.DOMAIN}/json/?q=${address}&limit=1000`
    return axios.get(url)
  }
}
