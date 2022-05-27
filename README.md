# MyVoiceMemo App

This is my Stackathon project when attending [Fullstack Academy](https://www.fullstackacademy.com). It is a mobile app developed using [React Native](https://reactnative.dev) framework. It is a speech-to-text app (speech recognition) bascially converts speech from the microphone to text, then allows you to save it as a memo/note, using the [React Native Voice library](https://github.com/react-native-voice/voice).

You could delete the memo, copy the memo to phone clipboard or share it by email. (Edit is still under development). iOS device is NOT tested.

## How to test the application
You need an Android device with the "USB debugging" option enabled or an Android emulator. See how to setup React Native [Development Environment](https://reactnative.dev/docs/environment-setup) and [Android Studio](https://developer.android.com/studio) for more details. Then simply execute the following commands:

```bash
# install dependencies
npm i

# run the app in the Android device
react-native run-android
react-native 
```

## Most relevant libraries

The app uses these relevant libraries:

* [@react-native-voice/voice](https://github.com/react-native-voice/voice) -- for Speech Recognition
* [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) -- Customizable Icons for React Native.
* [@react-native-community/async-storage](https://github.com/react-native-async-storage/async-storage) -- to Store Data Locally in React Native

Take a look at the `package.json` file for a complete list of libraries.
