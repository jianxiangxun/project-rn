import App from './src/main'
import SplashScreen from 'react-native-splash-screen'
import React, { Component } from 'react';
class Apps extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
        <App/>
    );
  }
}



export default Apps;

