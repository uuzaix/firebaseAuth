import  React from 'react';
import  { connect } from 'react-redux';
import  { LoginWithProvider, LogOut } from './loginButtons.js';
import * as authActions from '../../auth/actions.js';

export const Header = () => (
  <h1>FireBase Authentication</h1>
);

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated
  }
};

const app = ({authenticated, loginWithGitHub, logOut}) => {
  return (
    <div>
      <Header />
      {authenticated ? <LogOut logOut={logOut} /> : <LoginWithProvider loginWithGitHub={loginWithGitHub} /> }      
    </div>
  )
}

export const App = connect(
  mapStateToProps,
  authActions
)(app);
