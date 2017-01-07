import React from 'react';
import { connect } from 'react-redux';

export const LoginWithProvider = ({loginWithGitHub}) => {
  return (
    <button onClick={loginWithGitHub}>Login</button>
  )
};

export const LogOut = ({logOut}) => {
  return (
    <button onClick={logOut}>Logout</button>
  )
};
