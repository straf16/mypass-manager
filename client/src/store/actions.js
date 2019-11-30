import axios from '../config/axios'

export const addPassword = payload => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: '/sites',
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

export const removePassword = payload => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'DELETE',
      url: `/sites/${payload.id}`
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
    const { data } = await axios({ method: 'GET', url: '/sites' })
    dispatch({
      type: 'FETCH_LIST_PASSWORD',
      payload: data
    })
}