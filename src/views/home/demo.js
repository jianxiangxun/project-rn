import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Platform, Image, TouchableOpacity } from 'react-native';
import { Button, Progress, InputItem } from 'antd-mobile-rn';
import Svg from '@/components/svg';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/iconfont'
import config from '@/config'
import { createAction, NavigationActions, connect } from '@/dva'

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag:true,
      value:"",
      showPassword: false,
      password: '',
      percent: 60,
    };
    this.imagePicker = this.imagePicker.bind(this);
  }
  toggle () {
    this.setState({
      flag:!this.state.flag,
      percent: this.state.percent===60?90:60,
    })
  }
  imagePicker(){
    const that = this;
    const options = {
      quality: 0.5,
      maxWidth: 850,
      maxHeight: 1000,
      cancelButtonTitle: 'cancel',
      takePhotoButtonTitle: 'photo',
      chooseFromLibraryButtonTitle: 'gallary',
      storageOptions: {
        skipBackup: true,
        waitUntilSaved: true,
        // cameraRoll: true,
      }
    };
    //take photo
    if(config.os==='ios'){
      options.storageOptions.cameraRoll = true;
    }
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
      }
      else if (response.error) {
      }
      else if (response.customButton) {
      }
      else {
        let imagePath = Object.assign({},response)
        if (config.os === 'ios' && (response.fileName.endsWith('.heic') || response.fileName.endsWith('.HEIC'))) {
        }else{
        }
      }
    });
  }
  componentWillMount () {
  }
  componentDidMount () {
  }
  render () {
    return (
      <View style={styles.container}>
        <View>
          <Progress percent={this.state.percent} style={styles.progress}/>
        </View>
        
        {
          this.state.flag?(
            <View>
              <View style={styles.h1}>
                <Text style={styles.title}>Upload your profile avatar</Text>
              </View>
              <View style={styles.h2}>
                <Text style={styles.text}>upload your profile picture</Text>
              </View>
              <View style={styles.icon}>
                <Icon color={'#999'} size={80} name={'my'}></Icon>
              </View>
              <View style={styles.change}>
                <TouchableOpacity  onPress={ this.imagePicker }>
                  <Text style={styles.extra}>change</Text>
                </TouchableOpacity>
              </View>
              <Button style={styles.buttonStyle} type="primary" onClick={this.toggle.bind(this)}><Text style={{color:'white'}}>Next</Text></Button>
            </View>)
          :(
            <View>
              <View style={styles.h1}>
                <Text style={styles.title}>Choose a Password</Text>
              </View>
              <Text style={styles.text}>password</Text>
              <View style={styles.inputContainer}>
                <InputItem
                clear={false}
                placeholder={''}
                onExtraClick={ ()=>{ this.setState({showPassword:!this.state.showPassword}) } }
                extra={<Text style={styles.extra}>SHOW</Text>} 
                type={this.state.showPassword?'text':'password'}
                value={this.state.password}
                onChange={(val)=>{this.setState({password:val})}} 
                ></InputItem>
              </View>
              <View style={styles.mark}>
              <Text style={styles.text}>Password must be minimum of 8 character with at least 1 Uppercase, 1 lowercase and 1 dight</Text>
              </View>
              <Button style={styles.buttonStyle} type="primary" onClick={this.toggle.bind(this)}><Text style={{color:'white'}}>Create an Account</Text></Button>
              <View style={styles.center}>
                <Text style={styles.text}>by using Meter you must agree to Our
                  <Text style={styles.extra}>Term & Condition</Text> and 
                  <Text style={styles.extra}> Privacy Policy</Text>
                </Text>
              </View>
            </View>)
        }
      </View>
    )
  }
}
const styles =StyleSheet.create({
  container:{
    backgroundColor: "#fff",
    flex: 1,
    paddingLeft: config.sw/20,
    paddingRight: config.sw/20,
  },
  progress: {
    marginTop: 10,
    marginBottom: 10,
  },
  h1:{
    marginTop: 40,
    marginBottom: 30,
  },
  h2:{
    marginTop: -10,
    marginBottom: 30,
  },
  title:{
    color: '#000',
    fontSize: 20,
  },
  inputContainer: {
    borderRadius: 0,
    borderWidth: 1/config.dpi,
    borderColor: '#999',
    marginBottom: 10,
    marginTop: 5,
  },
  input:{
    borderColor: '#999'
  },
  extra:{
    color:'blue',
  },
  text:{
    color:'#999',
  },
  mark:{
    marginBottom: 20,
  },
  center:{
    marginTop:20,
    width:config.sw*2/3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:  'center',
  },
  buttonStyle: {
    backgroundColor: config.color.theme,
    color: 'white',
    borderColor: config.color.theme,
  },
  icon:{
    height: 100,
    width: 100,
    borderRadius: 5,
    borderColor: '#999',
    borderWidth: 1/config.dpi,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:  'center',
    marginBottom: 10,
  },
  change:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  }
})