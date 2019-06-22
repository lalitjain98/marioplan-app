const authReducer = (state={}, action) => {
    console.log(action.type);
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return { ...state, authError: null };
        case 'LOGIN_ERROR':
            return { ...state, authError: 'Login Failed!' };
        case 'LOGOUT_SUCCESS':
            return { ...state, authError: null };
        case 'LOGOUT_ERROR':
            return { ...state, authError: 'Logout Failed!' };
        case 'SIGNUP_SUCCESS':
            return { ...state, authError: null };
        case 'SIGNUP_ERROR':
            return { ...state, authError: action.err.message };
        default:
            return state;
    }
}

export default authReducer;