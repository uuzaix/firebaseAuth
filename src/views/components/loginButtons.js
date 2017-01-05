const React = require('react');
// const { loginWithGitHub, logOut } = require('../../auth/actions.js');
const { connect } = require('react-redux');


// const mapStateToLoginProps = state => {
//   return {}
// };

// const mapDispatchToLoginProps = dispatch => {
//   return {
//     onLoginClick: () => {
//       dispatch(loginWithGitHub())
//     }
//   }
// };

export const LoginWithProvider = ({loginWithGitHub}) => {
  return (
    <div>
      <button onClick={() => loginWithGitHub}>Login</button>
      <p>Game</p>
    </div>
  )
};

// export const LoginWithProvider = connect(
//   mapStateToLoginProps,
//   mapDispatchToLoginProps
// )(LoginButton);

// const mapStateToLogOutProps = state => {
//   return {}
// };

// const mapDispatchToLogOutProps = dispatch => {
//   return {
//     onLogOutClick: () => {
//       dispatch(logOut())
//     }
//   }
// };

export const LogOut = ({logOut}) => {
  return (
    <button onClick={() => logOut}>Logout</button>
  )
};

// export const LogOut = connect(
//   mapStateToLogOutProps,
//   mapDispatchToLogOutProps
// )(LogOutButton);
