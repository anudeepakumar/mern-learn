const initialState = {
    employee: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'ADD_EMPLYEE':
            return {
                ...state,
                employee: action.payload
            };
        default:
        return state; 
    }
}