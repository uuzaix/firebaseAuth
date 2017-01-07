import firebase from 'firebase';

import { firebaseApp, firebaseAuth } from '../firebase.js';


const loginSuccess = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: user
  };
}

export const loginWithGitHub = () => {
  const provider = new firebase.auth.GithubAuthProvider();
  return dispatch => {
    firebaseAuth.signInWithPopup(provider)
      .then(result => dispatch(loginSuccess(result.user)))
  };
}

const logOutSuccess = () => {
  return {
    type: 'LOGOUT_SUCCESS'
  };
}

export const logOut = () => {
  return dispatch => {
    firebaseAuth.signOut()
      .then(() => dispatch(logOutSuccess()));
  };
}

export const initAuth = () => {
  return dispatch => {
    const unsub = firebaseAuth.onAuthStateChanged(
      user => {
        if (!!user) {
          dispatch(loginSuccess(user));
          unsub();
        }
      });
  };
}
