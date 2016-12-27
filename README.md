# React Native Drum Kit
### Install at local:
Open Terminal, then type command:  
> git clone https://github.com/dwicao/react-native-drum-kit.git

Go to project folder:
> cd react-native-drum-kit

Type following command :  
> npm install  

You must have ANDROID_HOME environtment variable, to check if you already have, type in your terminal:  
> echo $ANDROID_HOME  

If blank, you can read at [HERE](https://goo.gl/XSBmwE)

In your terminal type this to make sure react-native know RNSound module:  
> react-native link

Create new file at `react-native-redux-weather-map/android/gradle.properties` and fill with this lines of code :  

```
android.useDeprecatedNdk=true
CODEPUSH_DEBUG_KEY = "insert_your_code_here"
CODEPUSH_RELEASE_KEY = "insert_your_code_here"
```

At this point, you should be able to run the project.
To run your project on your device/emulator at Debug configuration, type:
> npm run android-dev

To build .apk file just type:  
> npm run android-release  

You must sign .apk with keystore, to do this just type in your terminal:  
> npm run android-signer

The .apk file is located at `react-native-drum-kit/android/app/build/outputs/apk/app-release-unsigned.apk`


###  Available Command  

| npm run ... | Description |
| --- | --- |
| adb-reverse | Reset port ADB to tcp:8081 |
| ios-bundle | Bundle with entry file index.ios.js |
| ios-build  | Run ios project with “Release” configuration |
| android-clean | Fix building android if preDexDebug error |
| android-build-debug | Build android .apk with “Debug” configuration |
| android-release  | Build android .apk with “Release” configuration  |
| android-signkey  | Generate keystore android  |
| android-signer | To sign app-release-unsigned.apk with random keystore |
| android-dev | Run android development-mode on simulator |
| android-bundle | Bundle with entry file index.android.js |
 
 
### License
**MIT**  


