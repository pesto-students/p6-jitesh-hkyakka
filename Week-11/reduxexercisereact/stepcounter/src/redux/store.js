import { createStore } from "redux"
import stepReducer from "./reducer"

const store = createStore(stepReducer)

export default store