export const addPassword = () => {
  return new Promise((resolve, reject) => {
    resolve({
      "_id": "5de2384510466250b5c770bb",
      "URL": "linkedin.com",
      "name": "Linkedin",
      "username": "fadil",
      "password": "fadil",
      "createdAt": "2019-11-30T09:37:09.372Z",
      "updatedAt": "2019-11-30T09:37:09.372Z",
      "img": "https://www.militaryspouse.com/wp-content/uploads/2018/06/LinkedIn.png"
    })
  })
}

export const updatePassword = () => {
  return new Promise((resolve, reject) => {
    resolve({
      "_id": "5de2384510466250b5c770bb",
      "URL": "linkedin.com",
      "name": "Linkedin",
      "username": "fadil",
      "password": "fadil",
      "createdAt": "2019-11-30T09:37:09.372Z",
      "updatedAt": "2019-11-30T09:37:09.372Z",
      "img": "https://www.militaryspouse.com/wp-content/uploads/2018/06/LinkedIn.png"
    })
  })
}

export const removePassword = () => {
  return new Promise((resolve, reject) => {
    resolve({
      "_id": "5de2384510466250b5c770bb",
      "URL": "linkedin.com",
      "name": "Linkedin",
      "username": "fadil",
      "password": "fadil",
      "createdAt": "2019-11-30T09:37:09.372Z",
      "updatedAt": "2019-11-30T09:37:09.372Z",
      "img": "https://www.militaryspouse.com/wp-content/uploads/2018/06/LinkedIn.png"
    })
  })
}

export const fetchPasswordList = () => async dispatch => {
  dispatch({
    type: 'FETCH_LIST_PASSWORD',
    payload: [
      {
        "_id": "5de016b85763570b6f9972ca",
        "URL": "https://www.facebook.com/",
        "img": "https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo-Meaning.jpg",
        "name": "Facebook",
        "username": "fadil",
        "password": "fadil",
        "createdAt": "2019-11-28T18:49:28.461Z",
        "updatedAt": "2019-11-28T18:49:28.461Z"
      },
      {
        "_id": "5de2384510466250b5c770bb",
        "URL": "linkedin.com",
        "name": "Linkedin",
        "username": "fadil",
        "password": "fadil",
        "createdAt": "2019-11-30T09:37:09.372Z",
        "updatedAt": "2019-11-30T10:07:02.222Z",
        "img": "https://www.militaryspouse.com/wp-content/uploads/2018/06/LinkedIn.png"
      }
    ]
  })
}