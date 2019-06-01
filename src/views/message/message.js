import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import { Button, } from 'antd-mobile-rn';
import FitImage from 'react-native-fit-image';
export default class Commission extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  nav () {
    this.props.navigation.navigate("city")
  }
  render () {
    return (
      <View style={styles.container}>
        <Button onClick={this.nav.bind(this)}>home</Button>
        <FitImage
          source={require('@/assets/image/e.jpg')}
          resizeMode="contain"
          indicator={true}
          indicatorColor="#333"
          indicatorSize="large"
          originalWidth={100}
          originalHeight={100}
        />
      </View>
    )
  }
}
const styles =StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 5,
  }
})