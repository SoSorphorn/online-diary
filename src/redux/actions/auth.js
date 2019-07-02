import { AUTH_TYPES } from './../type'

const authRequest = () => ({
  type: AUTH_TYPES.REQUEST
})

export const login = () => {
  return async dispatch => {
    try{
    } catch (e) {
      console.log(e.error)
    }
  }
}
