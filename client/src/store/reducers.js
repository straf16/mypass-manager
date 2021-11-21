import { combineReducers } from 'redux';
import Swal from 'sweetalert2'

const initFeedback = {
  Toast: Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
}

function feedback(state = initFeedback, action) {
  return state
}

const initUser = {
  isLogin: false
}

function user(state = initUser, action) {
  switch (action.type) {
    case 'SET_LOGIN':
      return {
        ...state,
        isLogin: action.payload
      }
    default:
      return state
  }
}

const initPassword = {
  listPassword: []
}

function password(state = initPassword, action) {
  switch (action.type) {
    case 'FETCH_LIST_PASSWORD':
      return {
        ...state,
        listPassword: action.payload
      }
    default:
      return state
  }
}

const rootReducers = combineReducers({ feedback, user, password })

export default rootReducers
