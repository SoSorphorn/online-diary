import { AUTH_TYPES } from '../type';
import Immutable from 'seamless-immutable'

const initialState = Immutable({
  isLoading: false,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_TYPES.REQUEST:
      return state
              .set('isLoading', true)
    default: return state;
  }
}