import axios from 'axios'

// backend server url inactive due to aws account suspended, use local instead
const instance = axios.create({
  // baseURL: 'http://pass-manager-server.ahmadfd.site'
  baseURL: `http://localhost:3010`
})

export default instance
