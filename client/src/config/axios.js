import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://mypassword-manager.herokuapp.com'
})

export default instance
