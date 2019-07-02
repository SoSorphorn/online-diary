import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import {getFirebase} from 'react-redux-firebase'
import {getFirestore} from 'redux-firestore'

const initialState = {}
const reducer = rootReducer
const middleware = [thunk.withExtraArgument({getFirebase,getFirestore})]

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store;

