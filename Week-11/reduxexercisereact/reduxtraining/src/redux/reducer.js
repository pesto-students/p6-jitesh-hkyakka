const toggleReducer = (state = { isLightOn: true },action) => {
    switch(action.type){
        case "Toggle":
            return {...state,isLightOn:!state.isLightOn}
        default:
            return state
    }
}

export default toggleReducer