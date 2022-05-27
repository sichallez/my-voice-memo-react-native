import SplashScreen from 'react-native-splash-screen';
import React from 'react';
import Email from './Components/Email';
import Record from './Components/Record';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  View,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Picker} from '@react-native-picker/picker';
import {backgroundColor} from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      view: null,
      language: 'en-US',
      isSelected: 'en-US',
    };
    this.handleToRecord = this.handleToRecord.bind(this);
    this.handleToEmail = this.handleToEmail.bind(this);
    this.loading = this.loading.bind(this);
  }

  handleToRecord(emailAddressAttempt) {
    this.setState({
      view: 'record',
      email: emailAddressAttempt,
    });
  }

  handleToEmail() {
    this.setState({
      view: 'email',
    });
  }

  handelLanguageChange() {
    this.setState({
      language,
    });
  }

  loading() {
    // STEP 3 - if email -> record. if none -> email screen
    const handleLoad = email => {
      if (email) {
        this.handleToRecord(email);
      } else {
        this.handleToEmail();
      }
    };

    // STEP 2 - checkStorage checks for local email
    const checkStorage = async () => {
      try {
        let email = await AsyncStorage.getItem('localEmail');
        handleLoad(email);
      } catch (error) {}
    };
    // STEP 1 - call checkStorage
    checkStorage();
  }

  UNSAFE_componentWillMount() {
    this.loading();
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const {isSelected} = this.state;
    return (
      <ImageBackground
        defaultSource={require('./public/Images/background5.jpg')}
        source={require('./public/Images/background5.jpg')}
        style={styles.backgroundImage}>
        <StatusBar hidden={true} />
        <SafeAreaView style={styles.safe}>
          {/* {this.state.view === 'email' && (
            <Email
              email={this.state.email}
              handleToRecord={this.handleToRecord}
            />
          )} */}
          {/* {this.state.view === 'record' && (
            <Record
              email={this.state.email}
              language={this.state.language}
              handleToEmail={this.handleToEmail}
            />
          )} */}
          <Record
            email={this.state.email}
            language={this.state.language}
            handleToEmail={this.handleToEmail}
          />
        </SafeAreaView>
        <View style={styles.iconButtonContainer}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              this.setState({language: 'en-US', isSelected: 'en-US'})
            }>
            <Image
              source={require('./public/Images/united-states.png')}
              style={styles.buttonImageIconStyle}
            />
            {isSelected === 'en-US' ? (
              <Text style={styles.buttonTextStyleSelected}>EN</Text>
            ) : (
              <Text style={styles.buttonTextStyle}>EN</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this.setState({language: 'fr', isSelected: 'fr'})}>
            <Image
              source={require('./public/Images/france.png')}
              style={styles.buttonImageIconStyle}
            />
            {isSelected === 'fr' ? (
              <Text style={styles.buttonTextStyleSelected}>FR</Text>
            ) : (
              <Text style={styles.buttonTextStyle}>FR</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this.setState({language: 'zh', isSelected: 'zh'})}>
            <Image
              source={require('./public/Images/china.png')}
              style={styles.buttonImageIconStyle}
            />
            {isSelected === 'zh' ? (
              <Text style={styles.buttonTextStyleSelected}>CN</Text>
            ) : (
              <Text style={styles.buttonTextStyle}>CN</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this.setState({language: 'es', isSelected: 'es'})}>
            <Image
              source={require('./public/Images/spain.png')}
              style={styles.buttonImageIconStyle}
            />
            {isSelected === 'es' ? (
              <Text style={styles.buttonTextStyleSelected}>ES</Text>
            ) : (
              <Text style={styles.buttonTextStyle}>ES</Text>
            )}
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  iconButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 10,
    height: 35,
    width: 35,
    resizeMode: 'stretch',
  },
  buttonImageIconStyleSeletcted: {
    padding: 10,
    margin: 10,
    height: 45,
    width: 45,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
    paddingLeft: 10,
  },
  buttonTextStyleSelected: {
    borderColor: 'yellow',
    borderStyle: 'solid',
    borderWidth: 1,
    color: '#fff',
    paddingLeft: 10,
    marginBottom: 4,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
});

export default App;
