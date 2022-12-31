import { createStore } from 'redux'
import toggleReducer from './reducer'

console.log(toggleReducer)
const store = createStore(toggleReducer)

export default store