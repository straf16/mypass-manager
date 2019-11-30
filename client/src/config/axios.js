import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://pass-manager-server.ahmadfd.site'
})

export default instance
