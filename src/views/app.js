import React from 'react';
import { connect } from 'react-redux';
import { LoginWithProvider } from './components/loginButtons.js';
import { Header } from './components/header.js';
import * as authActions from '../auth/actions.js';

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  }
};

const app = ({authenticated, loginWithGitHub, logOut}) => {
  return (
    <div>
      <Header authenticated={authenticated} logOut={logOut} />
      {authenticated ? <p>Game</p> : <LoginWithProvider loginWithGitHub={loginWithGitHub} />}
    </div>
  )
}

export const App = connect(
  mapStateToProps,
  authActions
)(app);