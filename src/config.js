import {Dimensions, PixelRatio, AsyncStorage, Platform,} from 'react-native'

export default config = {
	//系统，iOS、Android
    os: Platform.OS,
    //屏幕宽度
	sw: Dimensions.get('window').width,
    //屏幕高度
    sh: Dimensions.get('window').height,
    //获取DPI
    dpi: PixelRatio.get(),
    //换算
	px2dpw: function(uiElementPx){
        return uiElementPx * this.clientWidth / 750;
    },
    px2dph: function(uiElementPx){
        return uiElementPx * this.clientHeight / 1294;
    },
    //APP色值
    color:{
        theme: '#48D1CC',
        Azure: '#F0FFFF',
        GhostWhite: '#F8F8FF',
        DimGray: '#696969',
        Gray: '#808080',
        DarkGray: '#A9A9A9',
        Silver: '#C0C0C0',
        LightGrey: '#D3D3D3',
    }
}

