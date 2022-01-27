import { SET_AUTHENTICATED, SET_UNAUTHENTICATED } from '../types'

const initialState = {
    authenticated: false,
    credentials: {},
    loading: false
}

export default function (state = initialState, action:any) {
 switch (action.type) {
    case SET_AUTHENTICATED:
        return {
            ...state,
            authenticated: true,
            loading:false,
            credentials: action.payload
        };
    case SET_UNAUTHENTICATED:
        return initialState

    default:
        return state;
    }
}