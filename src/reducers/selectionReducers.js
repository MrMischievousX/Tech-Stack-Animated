export default (state = null, action) => {
    switch (action.type) {
        case "select_Library":
            return action.payload
        default:
            return state
    }
}