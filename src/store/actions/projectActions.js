export const resetState = () => {
    return dispatch => {
        dispatch({
            type: 'RESET_STATE'
        });
    }
}
export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {        
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid;
        // console.log(firestore.collection('projects'));
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: userId,
            createdAt: new Date()
        })
        .then(res=>{
            // console.log('createProject', project , res);
            dispatch({
                type: 'CREATE_PROJECT',
                project
            });    
        })
        .catch(err=>{
            // console.log('createProject', project , err);
            dispatch({
                type: 'CREATE_PROJECT_ERROR',
                err
            })
        })
    }
}