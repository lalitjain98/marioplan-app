
export const signUp = (newUser)=>{
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        )
        .then(res=>{
            console.log("Res User Id ", res);
            return firestore.collection('users').doc(res.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        })
        .then(res=>{
            console.log(res);
            dispatch({type: 'SIGNUP_SUCCESS'})
        })
        .catch(err=>{
            console.log(err);
            dispatch({type: 'SIGNUP_ERROR', err})
        })
    }
}

export const signIn = (credentials)=>{
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
        .then(res=>{
            console.log(res);
            dispatch({type: 'LOGIN_SUCCESS'})
        })
        .catch(err=>{
            console.log(err);
            dispatch({type: 'LOGIN_ERROR', err})
        })
    }
}

export const signOut = (credentials)=>{
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut()
        .then(res=>{
            console.log(res);
            dispatch({type: 'LOGOUT_SUCCESS'})
        })
        .catch(err=>{
            console.log(err);
            dispatch({type: 'LOGOUT_ERROR', err})
        })
    }
}
