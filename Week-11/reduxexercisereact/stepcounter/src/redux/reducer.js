const initialState = {
    steps: 0
}
const stepReducer = (state = initialState,action) => {

    switch(action.type){
        case "Add":
            return {...state, steps:state.steps + 1}
        case "Reset":
            return initialState
        default:
             return state
    }
}

export default stepReducer