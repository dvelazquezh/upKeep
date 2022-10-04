

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                status:'authenticated',
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload,
                status:'authenticated',
            }
        case 'LOGOUT':
            return {
                ...state,
                status: 'checking',
                token: null,
                user: null,
                email: null,
                id: null,
                photoUrl: null,
                error: null,
                status:'checking',
            }
        case 'REGISTER':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}