import React from 'react';
import { LogOut } from './loginButtons.js';

export const Header = ({authenticated, logOut}) => {
  return (
    <div>
      <h1>FireBase Authentication</h1>
      {authenticated ? <LogOut logOut={logOut} /> : null}
    </div>
  )
};
