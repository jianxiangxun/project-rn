import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Platform, Image } from 'react-native';
import { Button, } from 'antd-mobile-rn';
// import { connect } from 'react-redux';
import FitImage from 'react-native-fit-image';
import config from '@/config'
import { createAction, NavigationActions, connect } from '@/dva'
@connect( ({ home }) => ({ ...home }) )
export default class Commission extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  nav () {
    this.props.navigation.navigate("city")
  }
  search () {
    this.props.dispatch( createAction('home/query')() )
  }
  componentWillMount () {
  }
  componentDidMount () {
    this.props.dispatch( createAction('home/list')('千千阙歌') )
  }
  render () {
    let userinfo = this.props
    return (
      <View style={styles.container}>
        <Text>{this.props.a}</Text>
        <Text>{userinfo.name}</Text>
        <Button onClick={this.nav.bind(this)}>home</Button>
        <Button onClick={this.search.bind(this)}>search</Button>
        {/* <Image
          resizeMode='contain'
          style={styles.img}
          source={require('../../assets/image/a.jpg')}
        /> */}
        <FitImage
          source={require('@/assets/image/a.jpg')}
          // resizeMode="contain"
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
  },
  img: {
    // marginTop: config.px2dph(193),
    // marginTop: config.px2dph(50),
    width: config.sw,
    // height: config.px2dph(115)
  },
})