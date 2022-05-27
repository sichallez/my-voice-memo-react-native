import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  View,
  Platform,
  TouchableOpacity,
  Linking,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Email = props => {
  // email text input value:
  const [input, onChangeText] = useState('');

  // save email in state:
  const [emailAddress, onSubmitEmail] = useState('');

  // check if email contains '@' & '.'
  // if Y, save in localstor & go to record screen
  const handleSubmit = emailAddressAttempt => {
    if (
      emailAddressAttempt.includes('@') &&
      emailAddressAttempt.includes('.')
    ) {
      onSubmitEmail(emailAddressAttempt); // SET STATE
      const setStorage = async () => {
        await AsyncStorage.setItem('localEmail', emailAddressAttempt); // SAVE LOCALLY
        props.handleToRecord(emailAddressAttempt);
      };
      setStorage();
    } else {
      Alert.alert('Please enter a valid email address.');
    }
  };

  let keyAvoidPad;
  Platform.OS === 'ios' ? (keyAvoidPad = 'padding') : undefined;

  return (
    <KeyboardAvoidingView style={styles.scroll} behavior={keyAvoidPad}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{alignItems: 'center'}}>
        <Image
          style={styles.logo}
          source={require('../public/Images/logo.png')}
        />

        <Text style={styles.tagline}>
          Welcome to TalkJot, the simplest, most private way to email yourself
          quick speech-to-text ideas, reminders and notes.
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={text => onChangeText(text)}
            defaultValue={emailAddress}
            value={input}
            autoCapitalize="none"
            autoFocus={true}
            autoCompleteType="email"
            autoCorrect={false}
            clearTextOnFocus={false}
            keyboardAppearance="dark"
            keyboardType="email-address"
            maxLength={100}
            textContentType="emailAddress"
            onSubmitEditing={() => handleSubmit(input)}
            enablesReturnKeyAutomatically={true}
            placeholder="Enter Your Email Here"
            placeholderTextColor="#ffffffbb"
            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSubmit(input)}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <Text style={styles.text}>
          We ❤️ Privacy! Your email address and notes are only stored on your
          personal device and in your personal email account, so it's impossible
          for us to spy on you or sell your data. 🙂
        </Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://www.talkjot.co/privacy/');
          }}>
          <Text style={styles.privacyLink}>
            Read our full privacy policy here.
          </Text>
        </TouchableOpacity>
        <View style={styles.bottom} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

//STYLES
const width = '90%';
let inputHeight;
Platform.OS === 'ios' ? (inputHeight = 45) : (inputHeight = 50);
let buttonHeight;
Platform.OS === 'ios' ? (buttonHeight = 40) : (buttonHeight = 45);
let tagWidth;
Platform.OS === 'ios' ? (tagWidth = 320) : (tagWidth = 400);

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  logo: {
    width: 225,
    height: 64,
    marginTop: 32,
    marginBottom: 24,
  },
  tagline: {
    color: '#ffffffee',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    maxWidth: width,
  },
  inputContainer: {
    borderRadius: 5,
    padding: 10,
    marginTop: 18,
    marginBottom: 18,
    backgroundColor: '#09050999',
    alignItems: 'center',
    justifyContent: 'center',
    height: inputHeight,
  },
  textInput: {
    color: '#ffffffcc',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 0,
    minWidth: width,
    maxWidth: width,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: inputHeight,
  },
  button: {
    backgroundColor: '#bbffbb99',
    borderRadius: 5,
    height: buttonHeight,
    paddingHorizontal: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    marginBottom: 18,
  },
  buttonText: {
    color: '#000000cc',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    color: '#ffffffee',
    fontSize: 16,
    textAlign: 'center',
    width: width,
  },
  privacyLink: {
    color: '#ffffffee',
    fontSize: 16,
    textAlign: 'center',
    maxWidth: width,
    fontWeight: 'bold',
    marginTop: 12,
  },
  bottom: {
    height: 32,
  },
});

export default Email;
