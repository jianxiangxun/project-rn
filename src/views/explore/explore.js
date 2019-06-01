import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import FitImage from 'react-native-fit-image';
// import { ActionSheet, } from 'antd-mobile';
export default class Commission extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <View style={styles.container}>
        <Text>find</Text>
        <FitImage
          source={require('@/assets/image/c.jpg')}
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