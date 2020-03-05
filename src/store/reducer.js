import axios from 'axios'
const initialState = {
    id: ""
}

export default (state = initialState, action) => {
    switch (action.type) {

        case "PHONE":
            var newState = JSON.parse(JSON.stringify(state))
           newState.id=action.id
            
            return newState;

        case "SOUND":
            var newState = JSON.parse(JSON.stringify(state))

            return newState;
        case "PARTS":
            var newState = JSON.parse(JSON.stringify(state))

            return newState;
        case "LIFE":
            var newState = JSON.parse(JSON.stringify(state))

            return newState;

        default:
            return state
    }
}