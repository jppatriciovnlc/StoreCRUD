import { ACTUAL_PAGE } from '../actions/types';

const initialState = {
    page: window.location.pathname === '/'? 'Dashboard': window.location.pathname
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTUAL_PAGE:
            return{...state, page: action.payload}
        default:
            return state;
    }
}

export default reducer;