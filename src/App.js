import React from 'react';

// Import GlobalState Component from GlobalState.js.
import GlobalState from './utilites/GlobalState';

// Import UsingState Component from UsingState.js.
import UsingState from './components/UsingState';


export default () => (
  //Use GlobalState Component & UsingState (App) Component.
  <GlobalState>
    <UsingState />
  </GlobalState>
);
