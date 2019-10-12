package com.tongaogu;

import android.app.Application;

import com.facebook.react.ReactApplication;
import me.hauvo.thumbnail.RNThumbnailPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.rt2zz.reactnativecontacts.ReactNativeContacts;
import cn.jpush.reactnativejpush.JPushPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.zmxv.RNSound.RNSoundPackage;
import com.rnim.rn.audio.ReactNativeAudioPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.imagepicker.ImagePickerPackage;
import com.horcrux.svg.SvgPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNThumbnailPackage(),
            new LinearGradientPackage(),
            new ReactNativeContacts(),
            new JPushPackage(!BuildConfig.DEBUG, !BuildConfig.DEBUG),
            new SplashScreenReactPackage(),
            new RNSoundPackage(),
            new ReactNativeAudioPackage(),
            new ReactVideoPackage(),
            new ImagePickerPackage(),
            new SvgPackage(),
            new VectorIconsPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
