import Router from './router.js';
import dva from './dva'
import homeModel from './models/home'

import React from 'react';
import { AppRegistry, Platform, } from 'react-native';

console.disableYellowBox = true;

const app = dva({
  initialState: {},
  models: [homeModel],
  onError(e) {
    console.log('onError', e)
  },
})

const App = app.start(<Router />)

export default App





