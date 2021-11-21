import axios from '../config/axios'

export const register = payload => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: '/register',
      data: payload
    })
      .then(({ data }) => {
        resolve(data)
      })
      .catch(({ response }) => [
        reject(response.data)
      ])
  })
}

export const login = payload => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: '/login',
      data: payload
    })
      .then(({ data }) => {
        resolve(data)
      })
      .catch(({ response }) => {
        reject(response.data)
      })
  })
}

export const addPassword = payload => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: '/sites',
      data: payload,
      headers: {
        token: localStorage.getItem('token')
      }
    })
      .then(({ data }) => {
        resolve(data)
      })
      .catch(({ response }) => {
        reject(response.data)
      })
  })
}

export const updatePassword = (id, payload) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'PATCH',
      url: `/sites/${id}`,
      data: payload,
      headers: {
        token: localStorage.getItem('token')
      }
    })
      .then(({ data }) => {
        resolve(data)
      })
      .catch(({ response }) => {
        reject(response.data)
      })
  })
}

export const removePassword = payload => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'DELETE',
      url: `/sites/${payload.id}`,
      headers: {
        token: localStorage.getItem('token')
      }
    })
      .then(({ data }) => {
        resolve(data)
      })
      .catch(({ response }) => {
        reject(response.data)
      })
  })
}

export const fetchPasswordList = () => async dispatch => {
    const { data } = await axios({
      method: 'GET',
      url: '/sites',
      headers: {
        token: localStorage.getItem('token')
      }
    })
    dispatch({
      type: 'FETCH_LIST_PASSWORD',
      payload: data
    })
}