import {
  AUTH,
  SIGNUP_FAIL,
  LOGOUT,
  LOGOUT_FAILED,
} from '../constants/actionsConstants.js'
const usersReducer = (state = { userData: null }, action) => {
  switch (action.type) {

    //kullanıcı oluşturulursa
    case AUTH:
      localStorage.setItem('user', JSON.stringify(action.payload))
      return { ...state, userData: action.payload }

    //fail olursa
    case SIGNUP_FAIL:
      return { error: action.payload }

    case LOGOUT:
      localStorage.removeItem('user')
      return { ...state, userData: null }

    case LOGOUT_FAILED:
      return { error: action.payload }
      
    default:
      return state
  }
}

export default usersReducer