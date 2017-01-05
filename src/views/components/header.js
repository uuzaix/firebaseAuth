const React = require('react');
const { connect } = require('react-redux');
const {loginWithGitHub, logOut } = require('../../auth/actions.js');
const { LoginWithProvider, LogOut } = require('./loginButtons.js');


export const Header = () => (
  <h1>FireBase Authentication</h1>
);


const mapStateToProps = state => {
  return {
    authenticated: state.authenticated
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loginWithGitHub: dispatch(loginWithGitHub),
    logOut: dispatch(logOut)
  }
};

const Foo = ({authenticated, loginWithGitHub, logOut}) => {
  return (
    <div>
      <Header />
      <LoginWithProvider loginWithGitHub={loginWithGitHub} />
      <LogOut logOut={logOut} />
    </div>
  )
}

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Foo);