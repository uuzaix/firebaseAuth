const React = require('react');
const firebase = require('firebase');

const {firebaseApp, firebaseAuth } = require('../firebase.js');


function loginSuccess(result) {
  return {
    type: 'LOGIN_SUCCESS',
    payload: result.user
  };
}

export function loginWithGitHub() {
  const provider = new firebase.auth.GithubAuthProvider();
  return dispatch => {
    firebaseAuth.signInWithPopup(provider)
      .then(result => dispatch(loginSuccess(result)))
  };
}

function logOutSuccess() {
  return {
    type: 'LOGOUT_SUCCESS'
  };
}

export function logOut() {
  return dispatch => {
    firebaseAuth.signOut()
      .then(() => dispatch(logOutSuccess()));
  };
}
