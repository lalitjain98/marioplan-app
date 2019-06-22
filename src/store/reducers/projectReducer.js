const initialState = { }
const projectReducer = (state=initialState, action) => {
    switch(action.type){
        case 'RESET_STATE':
                return {...state, createProjectSuccess: false, err: null};
        case 'CREATE_PROJECT':
            return {...state, createProjectSuccess: true, err: null};
        case 'CREATE_PROJECT_ERROR':
            return {...state, createProjectSuccess: false, err: action.err}
        default:
            return state;
    }
}

export default projectReducer;