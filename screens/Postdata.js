import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  WebView
} from 'react-native';

fetch('https://api.mybizzmail.com/v1/relation', {
  method: 'GET',
  headers: {
    Authorization : '6l3i2e79ny8a4b39yu2ndx8e5m50awmj',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    
  };

  render() {
    
    return (
      <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
        <View>
         <Text style={styles.getStartedText}>Hey Hallo Welkom Op de MyBizzMail App</Text>
        <Text style={styles.inlog}>Wilt u Inloggen, Registreren, of iets anders druk dan op de knoppen hier beneden</Text>
     
        </View>
        </View>
      </ScrollView>
    </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30343C',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,

    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(98,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  inlog: {
    fontSize: 15,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  register: {
    fontSize: 14,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        color: '#30343C',
        backgroundColor: '#30343C',
      },
      android: {
        elevation: 20,
        color: '#30343C',
        backgroundColor: '#30343C',
      },
    }),
    alignItems: 'center',
    backgroundColor: '#30343C',
    paddingVertical: 20,
    color: '#30343C',
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#30343C',
  },
  Button: {
    color: "#069CE4",
    width: 100,
    height: 8000,
  }
});
